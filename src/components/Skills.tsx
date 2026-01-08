import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { 
  SiTypescript, SiJavascript, SiPhp,
  SiAngular, SiReact, SiNodedotjs,
  SiMongodb, SiRedis, SiMysql,
  SiFirebase, SiAmazonaws, SiMicrosoftazure
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';

const getSkillIcon = (skillName: string): JSX.Element => {
  const iconMap: { [key: string]: JSX.Element } = {
    'TypeScript': <SiTypescript className="text-4xl" />,
    'JavaScript': <SiJavascript className="text-4xl" />,
    'PHP': <SiPhp className="text-4xl" />,
    'Angular': <SiAngular className="text-4xl" />,
    'React.js': <SiReact className="text-4xl" />,
    'React Native': <SiReact className="text-4xl" />,
    'Node.js': <SiNodedotjs className="text-4xl" />,
    'MongoDB': <SiMongodb className="text-4xl" />,
    'Redis': <SiRedis className="text-4xl" />,
    'MySQL': <SiMysql className="text-4xl" />,
    'Firebase': <SiFirebase className="text-4xl" />,
    'AWS': <SiAmazonaws className="text-4xl" />,
    'Azure': <SiMicrosoftazure className="text-4xl" />,
  };
  
  return iconMap[skillName] || <FaCode className="text-4xl text-gray-400" />;
};

const categoryLabels = {
  language: 'Languages',
  framework: 'Frameworks & Libraries',
  database: 'Databases',
  tool: 'Tools & IDEs',
  cloud: 'Cloud Platforms',
};

const Skills = () => {
  const skillsByCategory = portfolioData.skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof portfolioData.skills>);

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <FaCode className="text-primary-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    {getSkillIcon(skill.name)}
                    <span className="text-sm font-medium text-gray-700 mt-2 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

