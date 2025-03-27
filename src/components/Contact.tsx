
"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-6">Feel free to reach out via email or phone.</p>

        <div className="space-y-4">
          <motion.a
            href="mailto:saikiran07144@gmail.com"
            className="text-blue-400 text-xl hover:text-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            aswathict.05@gmail.com
          </motion.a>
          <p className="text-lg">or</p>
          <motion.a
            href="tel:+49 1766833703"
            className="text-green-400 text-xl hover:text-green-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            +49 17668337803
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
