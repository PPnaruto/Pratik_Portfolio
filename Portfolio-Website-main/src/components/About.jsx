import Typical from 'react-typical';
import profile from "./images/profile.png";

function About() {
  return (
    <div id="about">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={profile}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              
              <Typical
        steps={['Hi, I am Pratik Patil! 👋', 1000, 'I am a Full Stack Web Developer 👨‍💻', 1000, 'I love to code, build things and solve problems ⚒️', 1000]}
        loop={Infinity}
        wrapper="p"
      />
            </h1>
            <p className="leading-relaxed mb-8">
            Passionate Full Stack Web Developer with skills in the JAVA,JAVASCRIPT,HTML and CSS, I have learned Full Stack Web Development in Masai school.
            As an aspiring Full Stack Web developer, I like the impact it creates on the world that really excites me. 
            In my leisure time, I like watching Anime, trekking and explore new places.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                
            <a className="hover:text-white" href="#projects">
                See My Projects 👇
            </a>
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <a className="hover:text-white" href="https://drive.google.com/file/d/13rwfNn_yVxYbL3HaMimprquKX54XlK_q/view?usp=share_link" target="_blank" rel="noopener noreferrer">
              Download Resume 🖨️
            </a>
                
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
