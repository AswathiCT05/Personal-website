import React from 'react';
import { SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript, SiAngular, SiReact, SiGit, SiGithub, SiMongodb, SiNextdotjs, SiHtml5, SiBootstrap, SiMysql} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
//import { SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript, SiAngular, SiReact, SiGit, SiGithub, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'Python', icon: <SiPython size={40} color="#3776AB" /> },
  { name: 'C', icon: <SiC size={40} color="#00599C" /> },
  { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
  { name: 'Angular', icon: <SiAngular size={40} color="#DD0031" /> },
  { name: 'React JS', icon: <SiReact size={40} color="#61DAFB" /> },
  { name: 'Git', icon: <SiGit size={40} color="#F05032" /> },
  { name: 'GitHub', icon: <SiGithub size={40} color="#181717" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
  { name: 'SQL', icon: <SiMysql />, color: '#00758F' },
  { name: 'Java', icon: <FaJava />, color: '#007396' }
];

const Technology: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a]">
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="grid grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
          key={index}
          className="flex flex-col items-center rounded-2xl bg-[#1e293b] p-4"
          style={{ color: skill.color }}
        >
          <div className="text-6xl mb-2">{skill.icon}</div>
          <p className="text-white text-lg">{skill.name}</p>
        </div>

          // <div key={index} className="flex flex-col items-center p-3 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full transition-transform duration-500 hover:scale-110">
          //   {skill.icon}
          //   <span className="text-white text-sm mt-2">{skill.name}</span>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;

// import React from 'react';
// import { SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript, SiAngular, SiReact, SiGit, SiGithub, SiMongodb, SiNextdotjs, SiHtml5, SiBootstrap, SiMysql } from 'react-icons/si';
// import { FaJava } from 'react-icons/fa';

// const skills = [
//   { name: 'Python', icon: <SiPython size={40} color="#3776AB" /> },
//   { name: 'C', icon: <SiC size={40} color="#00599C" /> },
//   { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" /> },
//   { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
//   { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
//   { name: 'Angular', icon: <SiAngular size={40} color="#DD0031" /> },
//   { name: 'React JS', icon: <SiReact size={40} color="#61DAFB" /> },
//   { name: 'Git', icon: <SiGit size={40} color="#F05032" /> },
//   { name: 'GitHub', icon: <SiGithub size={40} color="#181717" /> },
//   { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
//   { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
//   { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26' },
//   { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
//   { name: 'SQL', icon: <SiMysql />, color: '#00758F' },
//   { name: 'Java', icon: <FaJava />, color: '#007396' }
// ];

// const Technology: React.FC = () => {
//   return (
//     <section className="w-full h-full flex items-center justify-center p-0 m-0 bg-[#0f172a]">
//       <div className="w-full h-full flex flex-col items-center justify-center">
//         <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
//         <div className="grid grid-cols-4 gap-6">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center rounded-2xl bg-[#1e293b] p-4"
//               style={{ color: skill.color }}
//             >
//               <div className="text-6xl mb-2">{skill.icon}</div>
//               <p className="text-white text-lg">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Technology;

// import { SiPython, SiC, SiCplusplus, SiJavascript, SiTypescript, SiAngular, SiReact, SiGit, SiGithub, SiMongodb, SiNextdotjs, SiHtml5, SiBootstrap, SiMysql } from 'react-icons/si';
// import { FaJava } from 'react-icons/fa';

// const skills = [
//   { name: 'Python', icon: <SiPython size={40} color="#3776AB" /> },
//   { name: 'C', icon: <SiC size={40} color="#00599C" /> },
//   { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" /> },
//   { name: 'JavaScript', icon: <SiJavascript size={40} color="#F7DF1E" /> },
//   { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
//   { name: 'Angular', icon: <SiAngular size={40} color="#DD0031" /> },
//   { name: 'React JS', icon: <SiReact size={40} color="#61DAFB" /> },
//   { name: 'Git', icon: <SiGit size={40} color="#F05032" /> },
//   { name: 'GitHub', icon: <SiGithub size={40} color="#181717" /> },
//   { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
//   { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
//   { name: 'HTML', icon: <SiHtml5 />, color: '#E34F26' },
//   { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
//   { name: 'SQL', icon: <SiMysql />, color: '#00758F' },
//   { name: 'Java', icon: <FaJava />, color: '#007396' }
// ];

// const Technology = () => {
//   return (
//     <section className="bg-gray-800 text-white w-full h-full flex items-center justify-center p-0 m-0">
//       <div className="w-full h-full flex flex-col items-center justify-center">
//         <h2 className="text-4xl font-bold mt-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Skills</h2>
//         <p className="text-lg text-gray-400 mt-2">Technologies I have experience with</p>
//         <div className="grid grid-cols-4 gap-6 mt-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center rounded-full bg-[#1e293b] p-4 shadow-lg border-4 border-gray-300"
//               style={{ color: skill.color }}
//             >
//               <div className="text-6xl mb-2">{skill.icon}</div>
//               <p className="text-white text-lg font-semibold">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Technology;

