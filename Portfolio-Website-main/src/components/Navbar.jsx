function Navbar() {
  return (
    <div id="navbar" className="sticky top-0 z-50">
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 hover:text-white hidden md:block" href="#about">
              About 👨
            </a>
            <a className="mr-5 hover:text-white" href="#projects">
              Projects 🌐
            </a>
            <a className="mr-5 hover:text-white" href="#skills">
              Skills 🛠️
            </a>
            <a className="mr-5 hover:text-white" href="#contact">
              Contact 📧
            </a>
          </nav>
          <a
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
            href="#navbar"
          >
              
            <span className="ml-3 text-xl xl:block lg:hidden">Pratik Patil 👨‍💻</span>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <a className="hover:text-white" href="https://www.linkedin.com/in/pratik-patil-73b0a1165" target="_blank" rel="noopener noreferrer">
              Connect With Me! 👉
            </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
