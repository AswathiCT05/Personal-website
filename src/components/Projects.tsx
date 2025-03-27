// "use client";
// import { useState } from "react";
// import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";

// const Projects= () => {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline" className="mt-4">View Project</Button>
//       </DialogTrigger>
//       <DialogContent className="max-w-lg p-6 rounded-lg bg-gray-900 text-white">
//         <div className="flex flex-col items-center">
//           <img src="/weather-app.png" alt="Weather App" className="rounded-lg w-full" />
//           <h2 className="text-2xl font-bold mt-4">Weather App</h2>
//           <p className="text-sm text-gray-300 mt-2 text-center">
//             Weather app using HTML, CSS, Bootstrap, and JavaScript with API.
//           </p>
//           <div className="flex gap-4 mt-4">
//             <Button variant="secondary" className="flex items-center gap-2">
//               <ExternalLink size={16} /> Live Website
//             </Button>
//             <Button variant="secondary" className="flex items-center gap-2">
//               <Github size={16} /> View Code
//             </Button>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default Projects;
"use client";

// const Projects = () => {
//   return (
//     <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
//       <div className="max-w-md bg-gray-800 text-white rounded-2xl shadow-lg p-6 text-center">
//         <h2 className="text-3xl font-bold">Weather App</h2>
//         <p className="text-gray-400 mt-2">
//           Weather app using Next.js, TypeScript, and Tailwind CSS with API.
//         </p>

//         {/* Image (Replace with actual path) */}
//         <img src="/weather-app.png" alt="Weather App" className="rounded-lg mt-4" />

//         {/* Action Buttons */}
//         <div className="mt-4 flex justify-center gap-4">
//           <a href="#" className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition">Live Website</a>
//           <a href="#" className="px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 transition">View Code</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


const Projects = () => {
  return (
    <div className="h-screen w-screen flex items-start justify-center pt-30 bg-gray-900 text-white">
      <div className="max-w-md bg-gray-800 text-white rounded-2xl shadow-lg p-6 text-center">
        <h2 className="text-3xl font-bold">Weather App</h2>
        <p className="text-gray-400 mt-2">
          Weather app using Next.js, TypeScript, and Tailwind CSS with API.
        </p>

        {/* Image (Replace with actual path) */}
        <img src="/weather-app.png" alt="Weather App" className="rounded-lg mt-4" />

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