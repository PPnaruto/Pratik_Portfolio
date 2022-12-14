import html from './images/html.png';
import javascript from './images/javascript.png';
import css from './images/css.png';
import mongodb from './images/mongodb.png';
import react from './images/react.png';
import express from './images/express.png'
import nodejs from './images/nodejs.png';
import git from './images/git.png';
import dsalgo from './images/dsalgo.png';

function Skills() {
  return (
    <div id="skills">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              My Skills & Tech Stack 🛠️
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              I have experience in HTML,CSS,JAVASCRIPT and JAVA & solving Data Structures & Algorithms problems. I also love learning about new technologies & expanding my skillset.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={html}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    HTML
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={css}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    CSS
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={javascript}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    JavaScript
                  </h2>

                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={react}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    React
                  </h2>
    
                </div>
              </div>
            </div>
            {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={nodejs}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Node.js
                  </h2>
       
                </div>
              </div>
            </div> */}
            {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={express}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Express
                  </h2>
  
                </div>
              </div>
            </div> */}
            
            {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={mongodb}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    MongoDB
                  </h2>

                </div>
              </div>
            </div> */}
            {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={git}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Git & GitHub
                  </h2>
          
                </div>
              </div>
            </div> */}
            {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={dsalgo}
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    DS & Algorithms
                  </h2>
      
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
