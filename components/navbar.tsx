const Navbar = () => {
  return (
    <nav className="navbar-gradient border-b border-purple-500/20 sticky top-0 z-50">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="hidden font-bold sm:inline-block text-xl text-gradient">Pureside V RP</span>
        </a>

        {/* Navigation Links (Example) */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button (Example) */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            {/* Hamburger Icon (You can use a library like react-icons) */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
