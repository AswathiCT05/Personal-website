import { FaBuilding, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

const About = () => {
  return (
    // <section id="about" className="bg-gray-800 text-white py-12 px-6">
    //   <div className="max-w-4xl mx-auto">
    //     <h2 className="text-4xl font-bold border-b-2 border-gray-600 pb-2">About Me</h2>

 <section id="about" className="text-white flex items-center justify-center px-6">
  <div className="max-w-4xl w-full text-center">
    <h2 className="text-4xl font-bold border-b-4 border-gray-600 pb-4 w-fit mx-auto">About Me</h2>
      
        {/* Work Experience */}
        <div className="mt-6">
          <h3 className="text-2xl font-bold border-b-2 border-gray-600 pb-2">Work Experience</h3>

          {/* Job 1 - System Engineer */}
          <div className="mt-4">
            <h4 className="text-2xl font-semibold">System Engineer</h4>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaBuilding />
              <span>Infosys Ltd.</span>
              <FaMapMarkerAlt />
              <span>Trivandrum</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-300">April 2022 - February 2024</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                full Time
              </span>
            </div>
          </div>

          {/* Job 2 - MERN Stack Intern */}
          <div className="mt-6">
            {/* <h4 className="text-2xl font-semibold">Intern (MERN Stack Developer)</h4>
            <div className="flex items-center space-x-2 text-gray-400">
              <FaBuilding />
              <span>Edureka</span>
              <FaMapMarkerAlt />
              <span>Online</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-300">April 2022 - Present</span>
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                part Time
              </span>
            </div> */}

            {/* Education Section */}
        {/* <div className="mt-12 bg-gray-700 p-6 rounded-lg shadow-lg"> */}
          <h3 className="text-4xl font-bold border-b-4 border-gray-500 pb-2">Education</h3>

          {/* Education Entry 1 */}
          <div className="mt-6">
            <h4 className="text-2xl font-semibold">Master’s in Electrical Engineering and Information Technology</h4>
            <p className="flex items-center text-lg text-gray-300">
              <FaUniversity className="mr-2 text-xl" /> Technische Hochschule Deggendorf
            </p>
            <p className="flex items-center text-gray-400">
              <FaMapMarkerAlt className="mr-2 text-lg" /> Germany
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">full-time</span>
              <span className="text-gray-300">2024 - Present</span>
            </div>
          </div>

          {/* Education Entry 2 */}
          <div className="mt-6 border-t border-gray-500 pt-4">
            <h4 className="text-2xl font-semibold">B.Tech in Electrical & Electronics Engineering</h4>
            <p className="flex items-center text-lg text-gray-300">
              <FaUniversity className="mr-2 text-xl" /> SJCET
            </p>
            <p className="flex items-center text-gray-400">
              <FaMapMarkerAlt className="mr-2 text-lg" /> PALA, kottayam
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">full-time</span>
              <span className="text-gray-300">2015 - 2019</span>
            </div>
          </div>

          {/* Education Entry 3 */}
          {/* <div className="mt-6 border-t border-gray-500 pt-4">
            <h4 className="text-2xl font-semibold">Full Stack Development</h4>
            <p className="flex items-center text-lg text-gray-300">
              <FaUniversity className="mr-2 text-xl" /> Udemy, YouTube
            </p>
            <p className="flex items-center text-gray-400">
              <FaMapMarkerAlt className="mr-2 text-lg" /> Online
            </p>
            <div className="flex justify-between items-center mt-2">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">full-time</span>
              <span className="text-gray-300">2021 - Present</span>
            </div>
          </div> */}
{/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
