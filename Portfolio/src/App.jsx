import React from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Amanpreet Singh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg md:text-xl"
        >
          Junior Frontend Developer | Sunstone Eduversity Pvt Ltd..
        </motion.p>
       <a
          href="/Full stack.pdf"
          download="Full stack.pdf"
          className="bg-pink-400 text-white px-4 py-2 m-7 rounded-lg"
>
          Download Full Resume
        </a>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-lg leading-relaxed">
          I am a passionate Web Developer skilled in HTML, CSS, JavaScript, and
          modern frameworks like React JS. I aim to contribute to
          impactful, user-friendly applications while growing my technical
          expertise.

        </p>
      </section>

      <section className="py-16 pc-7 max-w-4xl mx-auto">

     <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 mx-6"
        > Education
        
       
       
        </motion.h2>

        
     <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font mb-6 mx-6"
        > 
        
        <p>Class Xth and XII | CBSE Board | K.L MEHTA DAYANAND PUBLIC SCHOOL</p>
       
        </motion.h2>

            
     <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font mb-6 mx-6"
        > 
        
         GRADUATION |<i><b>BCA</b></i>  | JC BOSE UNIVERSIITY OF SCIENCE AND TECHNOLOGY |2019-2022

         
        
       
        </motion.h2>

                    
     <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font- mb-6 mx-6"
        > 
        
        POST GRADUCATION |<i><b>MCA</b></i> | LOVELY PROFESSIONAL UNIVERSITY | 2025 - <i><b>Persuing</b></i> 
         
        
       
        </motion.h2>


      



        


      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
          "HTML5",
            "CSS3",
            "JavaScript",
            "React-JS",
            "Python",
            "SQL WorkBench",
            "Networking Troublshoot",
            "IT Support"
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.5 }}
              className="bg-white shadow rounded-xl p-4 text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            " Netflix Clone",
            "Amazon Clone",
            "Jarvis Voice Command System",
            "Tic Tac Toe Game",
            "Calculator (ReactJS)",
            "Weather Application",
            "Hindustan Venture Travels (Freelance)",
            "Random Password Generator"

          ].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 shadow rounded-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{project}</h3>
              <p className="text-sm text-gray-600">
                {project} Technologies Used to build is HTML, CSS , Javascript and Raact-Js .
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-indigo-600 text-white text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Get In Touch
        </motion.h2>


        <p>Email: amanpreetdhanjal77@gmail.com</p>
        <p>Phone: +91 9811035498</p>
      </section>
    </div>

  );
}
