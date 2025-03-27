"use client";

const Projects = () => {
  return (
    <div className="h-screen w-screen flex items-start justify-center pt-30 bg-gray-900 text-white">
      <div className="max-w-md bg-gray-800 text-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-3xl font-bold">Weather App</h2>
        <p className="text-gray-400 mt-2">
          Weather app using Next.js, TypeScript, and Tailwind CSS with API.
        </p>

        {/* Image (Replace with actual path) */}
        {/* <img src="/weather-app.png" alt="Weather App" className="rounded-lg mt-4" /> */}
        {/* <Image src="/weather-app.png" alt="Weather App" className="rounded-lg mt-4" width={50} height={30}/> */}

        {/* Action Buttons */}
        <div className="mt-4 flex justify-center gap-4">
          <a href="https://aswathict05.github.io/Weather/" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">Live Website</a>
           {/* <a href="#https://aswathict05.github.io/Weather/" className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">View Code</a> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;