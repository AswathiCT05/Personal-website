import Head from "next/head";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import About from "@/components/About";
import Landing from "@/components/Landind";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    // <div className="bg-gray-900 text-white min-h-screen">
    //   <Head>
    //     <title>Portfolio Dashboard</title>
    //   </Head>

    //   {/* Navbar */}
    //   <nav className="fixed w-full bg-gray-800 p-4 shadow-md">
    //     {/* <nav className="fixed top-0 left-0 w-full bg-[#1e293b] text-white p-4 z-50"> */}
    //     <div className="container mx-auto flex w-full justify-between items-center">
    //       <h1 className="text-2xl font-bold">My Portfolio</h1>
    //       {/* <h1 className="text-2xl font-bold"><Landing /></h1>  */}
    //       <ul className="flex space-x-6">
    //         {["Home", "About", "Technologies", "Projects", "Contact"].map((section) => (
    //           <li key={section}>
    //             <a
    //               href={`#${section.toLowerCase()}`}
    //               className="hover:text-blue-400 transition"
    //             >
    //               {section}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //       <div className="flex space-x-4">
    //         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    //           <FaLinkedin className="text-2xl hover:text-blue-500" />
    //         </a>
    //         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    //           <FaGithub className="text-2xl hover:text-gray-500" />
    //         </a>
    //       </div>
    //     </div>
    //   </nav>

    //   {/* Sections */}
    //   {/* <div className="container w-full mx-auto pt-20 space-y-20"> */}
    //   <section id="home" className="h-screen w-full flex items-center justify-center" >
    //     <div><Landing /></div>
    //   </section>

    //   <section id="about" className="h-screen flex items-center justify-center">
    //     <div>
    //       <About />
    //     </div>
    //   </section>


    //   <section id="technologies" className="h-screen flex items-center justify-center">
    //     <div className="relative w-full h-[500px] bg-gray-800 text-white mt-8 overflow-visible rounded-lg">
    //       <Technology />
    //     </div>
    //   </section>

    //   <section id="projects" className="h-screen flex items-center justify-center">
    //     <h2 className="text-4xl font-bold">Projects</h2>
    //   </section>

    //   <section id="contact" className="h-screen flex items-center justify-center">

    //     <div>
    //       {/* Other sections */}
    //       <Contact />
    //     </div>
    //   </section>
    //   {/* </div> */}
    // </div>

    // <div className="bg-gray-900 text-white min-h-screen">
    //   <Head>
    //     <title>Portfolio Dashboard</title>
    //   </Head>

    //   {/* Navbar */}
    //   <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-md z-50">
    //     <div className="w-full flex justify-between items-center px-4">
    //       <h1 className="text-2xl font-bold">My Portfolio</h1>
    //       <ul className="flex space-x-6">
    //         {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((section) => (
    //           <li key={section}>
    //             <a
    //               href={`#${section.toLowerCase()}`}
    //               className="hover:text-blue-400 transition"
    //             >
    //               {section}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //       <div className="flex space-x-4">
    //         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    //           <FaLinkedin className="text-2xl hover:text-blue-500" />
    //         </a>
    //         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    //           <FaGithub className="text-2xl hover:text-gray-500" />
    //         </a>
    //       </div>
    //     </div>
    //   </nav>

    //   {/* Sections */}
    //   <section id="home" className="h-screen w-full flex items-center justify-center m-0 p-0">
    //     <div><Landing /></div>
    //   </section>

    //   <section id="about" className="h-screen w-full flex items-center justify-center m-0 p-0">
    //     <div><About /></div>
    //   </section>

    //   <section id="technologies" className="h-screen w-full flex items-center justify-center m-0 p-0">
    //     <div className="relative w-full h-full bg-gray-800 text-white overflow-visible rounded-none">
    //       <Technology />
    //     </div>
    //   </section>

    //   <section id="projects" className="h-screen w-full flex items-center justify-center m-0 p-0">
    //     <h2 className="text-4xl font-bold">Projects</h2>
    //   </section>

    //   <section id="contact" className="h-screen w-full flex items-center justify-center m-0 p-0">
    //     <div><Contact /></div>
    //   </section>
    // </div>


    //     <div className="bg-gray-900 text-white min-h-screen">
    //   <Head>
    //     <title>Portfolio Dashboard</title>
    //   </Head>

    //   {/* Navbar */}
    //   <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-md z-50">
    //     <div className="w-full flex justify-between items-center px-4">
    //       <h1 className="text-2xl font-bold">My Portfolio</h1>
    //       <ul className="flex space-x-6">
    //         {['Home', 'About', 'Technologies', 'Projects', 'Contact'].map((section) => (
    //           <li key={section}>
    //             <a
    //               href={`#${section.toLowerCase()}`}
    //               className="hover:text-blue-400 transition"
    //             >
    //               {section}
    //             </a>
    //           </li>
    //         ))}
    //       </ul>
    //       <div className="flex space-x-4">
    //         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    //           <FaLinkedin className="text-2xl hover:text-blue-500" />
    //         </a>
    //         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    //           <FaGithub className="text-2xl hover:text-gray-500" />
    //         </a>
    //       </div>
    //     </div>
    //   </nav>

    //   {/* Sections */}
    //   <div>
    //   <section id="home" className="h-screen w-full m-0 p-0">
    //     <div className="w-full h-full"><Landing /></div>
    //   </section>

    //   <section id="about" className="h-screen w-full m-0 p-0">
    //     <div className="w-full h-full"><About /></div>
    //   </section>

    //   <section id="technologies" className="h-screen w-full m-0 p-0">
    //     <div className="relative w-full h-full bg-gray-800 text-white overflow-visible rounded-none">
    //       <Technology />
    //     </div>
    //   </section>

    //   <section id="projects" className="h-screen w-full m-0 p-0">
    //     <div className="w-full h-full"><h2 className="text-4xl font-bold">Projects</h2></div>
    //   </section>

    //   <section id="contact" className="h-screen w-full m-0 p-0">
    //     <div className="w-full h-full"><Contact /></div>
    //   </section>
    //   </div>
    // </div>

    <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Portfolio Dashboard</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-md z-50">
        <div className="w-full flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            {['Home', 'About', 'Technologies', 'Project', 'Contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="hover:text-blue-400 transition"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <a href="//www.linkedin.com/in/aswathi-c-t-723586134/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-500" />
            </a>
            <a href="https://github.com/AswathiCT05" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-500" />
            </a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="home" className="bg-gradient-to-b from-gray-800 via-blue-950 to-black-1000 h-screen w-full m-0 p-0">
        <div className="w-full h-full flex items-center justify-center">
          <Landing />
        </div>
      </section>

      <section id="about" className=" w-full m-0 mt-4 p-0 py-3">
        <div className="w-full h-full"><About /></div>
      </section>

      {/* <section id="technologies" className="h-screen w-full m-0 p-0">
    <div className="relative w-full h-full bg-gray-800 text-white overflow-visible rounded-none">
      <Technology />
    </div>
  </section> */}

      <section id="technologies" className="w-full m-0 mt-8 mb-8 p-0">
        <div className="w-full h-full">
          <Technology />
        </div>
      </section>


      <section id="project" className="w-full m-0 mt-4 p-0">
        <div className="w-full h-full flex items-center justify-center">
          {/* <h2 className="text-4xl font-bold">Projects</h2> */}
          <div className="w-full h-full">
          <Projects />
        </div>
        </div>
      </section>

      <section id="contact" className=" w-full m-0 p-0">
        <div className="w-full h-full flex items-center justify-center">
          <Contact />
        </div>
      </section>
    </div>


  );
}
