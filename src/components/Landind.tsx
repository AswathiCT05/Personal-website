// import Image from "next/image";

// const Landing = () => {
//   return (
//     // <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
//     //   <div className="max-w-4xl w-full text-center flex flex-col items-center">
//     // <section className="bg-gray-800 text-white flex items-center justify-center px-2">

//     //   <div className="max-w-4xl w-full text-top flex flex-col items-top mt-[-12rem]">
//     //     {/* Profile Image */}
//     //     <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-gray-300 mb-4">
//     //       <Image
//     //         src="/IMG_20240411_130014655.jpg" // Replace with your actual image path
//     //         alt="Profile Picture"
//     //         width={192}
//     //         height={192}
//     //         className="object-cover w-full h-full"
//     //       />
//     //     </div>

//     //     {/* Name and Bio */}
//     //     <h1 className="text-2xl font-bold mt-4 animate-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">Aswathi Chittiyam Veettil Thankan</h1>
//     //     {/* <h3 className="text-lg text-gray-600 mt-2">A Bit About Me</h3> */}
//     //     <p className="text-sm text-gray-400 mt-1">
//     //       Master's student in Electrical Engineering and Information Technology.
//     //     </p>

//     //     {/* Buttons Section */}
//     //     <div className="flex gap-6 mt-8">
//     //       {["Resume", "Resources", "Outreach", "Personal"].map((item, index) => (
//     //         <button
//     //           key={index}
//     //           className={`px-6 py-3 rounded-full text-white font-semibold transition duration-300 shadow-md ${index === 0
//     //               ? "bg-green-500 hover:bg-green-600"
//     //               : index === 1
//     //                 ? "bg-yellow-500 hover:bg-yellow-600"
//     //                 : index === 2
//     //                   ? "bg-blue-500 hover:bg-blue-600"
//     //                   : "bg-gray-400 hover:bg-gray-500"
//     //             }`}
//     //         >
//     //           {item}
//     //         </button>
//     //       ))}
//     //     </div>
//     //   </div>
//     // </section>


    
//   );
// };

// export default Landing;
import Image from "next/image";

const Landing = () => {
  return (
    <section className="text-white w-full h-full flex items-center justify-center p-0 m-0">
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* Profile Image */}
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-gray-300 mb-4">
          <Image
            src="/IMG_20240411_130014655.jpg"
            alt="Profile Picture"
            width={192}
            height={192}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Name and Bio */}
        <h1 className="text-4xl font-bold mt-4 animate-text bg-gradient-to-r from-blue-400 via-red-500 to-green-500 bg-clip-text text-transparent">Aswathi Chittiyam Veettil Thankan</h1>
        <p className="text-lg text-gray-400 mt-2">
          Master's student in Electrical Engineering and Information Technology.
        </p>
      </div>
    </section>
  );
};

export default Landing;
