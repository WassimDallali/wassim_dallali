import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

interface UnifiedProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  primaryLink: {
    href: string;
    label: string;
  };
  secondaryLink?: {
    href: string;
    label: string;
  };
  highlight?: boolean;
}

const PAGE_SIZE = 4;

const Projects = () => {
  const { projects } = portfolioData;
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [readmeDescriptions, setReadmeDescriptions] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/WassimDallali/repos?sort=updated&per_page=100'
        );
        if (response.ok) {
          const data: GitHubRepo[] = await response.json();
          setGithubRepos(data);
        }
        // If not ok, silently fall back to curated projects
      } catch {
        // Network / API error – ignore and use curated projects only
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const fetchReadmes = async () => {
      if (!githubRepos.length) return;

      try {
        const results = await Promise.all(
          githubRepos.map(async (repo) => {
            try {
              const res = await fetch(
                `https://api.github.com/repos/WassimDallali/${repo.name}/readme`
              );
              if (!res.ok) {
                return { id: repo.id, text: '' };
              }
              const data = await res.json();
              if (!data.content) {
                return { id: repo.id, text: '' };
              }

              const decoded = atob(String(data.content).replace(/\n/g, ''));
              const lines = decoded
                .split('\n')
                .map((line: string) => line.trim())
                .filter(Boolean);

              const firstParagraph = lines[0] || '';
              const shortText =
                firstParagraph.length > 260
                  ? `${firstParagraph.slice(0, 257)}...`
                  : firstParagraph;

              return { id: repo.id, text: shortText };
            } catch {
              return { id: repo.id, text: '' };
            }
          })
        );

        const map: Record<string, string> = {};
        results.forEach((r) => {
          map[String(r.id)] = r.text;
        });
        setReadmeDescriptions(map);
      } catch {
        // ignore readme errors, fall back to repo / curated descriptions
      }
    };

    fetchReadmes();
  }, [githubRepos]);

  const allProjects: UnifiedProject[] = useMemo(() => {
    // If we managed to load GitHub repos, show ALL of them
    if (githubRepos.length) {
      return githubRepos.map((repo) => {
        const readmeText = readmeDescriptions[String(repo.id)];

        return {
          id: `github-${repo.id}`,
          title: repo.name,
          description:
            readmeText ||
            repo.description ||
            'Open‑source project hosted on GitHub.',
          technologies: repo.language ? [repo.language] : [],
          primaryLink: {
            href: repo.html_url,
            label: 'View on GitHub',
          },
        };
      });
    }

    // Fallback: only curated projects from portfolioData
    return projects.map((p) => ({
      id: p.sourceCode || p.title,
      title: p.title,
      description: p.description,
      technologies: p.technologies,
      primaryLink: {
        href: p.sourceCode || '#',
        label: 'Source Code',
      },
      highlight: p.highlight,
    }));
  }, [projects, githubRepos, readmeDescriptions]);

  const totalPages = Math.max(1, Math.ceil(allProjects.length / PAGE_SIZE));

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const paginatedProjects = allProjects.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE
  );

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50"
      aria-label="Projects section"
    >
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Featured work and a complete list of public projects from my GitHub
            profile{' '}
            <span className="font-semibold text-primary-600">
              (@WassimDallali)
            </span>
            , all in one place.
          </p>
        </motion.div>

        {loading && (
          <p className="text-gray-600 text-sm">Loading projects…</p>
        )}

        {!loading && allProjects.length > 0 && (
          <>
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={handlePrevPage}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors shadow-sm"
                aria-label="Previous page"
              >
                <FaChevronLeft />
              </button>
              <p className="text-sm text-gray-600">
                Page {currentPage + 1} of {totalPages}
              </p>
              <button
                type="button"
                onClick={handleNextPage}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors shadow-sm"
                aria-label="Next page"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {paginatedProjects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-xl p-6 shadow-md bg-white border ${
                    project.highlight
                      ? 'border-primary-200 bg-gradient-to-br from-primary-50 to-white'
                      : 'border-gray-100'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900 break-words">
                      {project.title}
                    </h3>
                    <FaCode className="text-primary-500 text-xl ml-3" />
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-semibold bg-primary-50 text-primary-700 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.primaryLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
                    >
                      {project.primaryLink.label}
                      <FaExternalLinkAlt className="ml-2" />
                    </a>
                    {project.secondaryLink && (
                      <a
                        href={project.secondaryLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900"
                      >
                        {project.secondaryLink.label}
                        <FaGithub className="ml-2" />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;


