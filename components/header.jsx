import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          GalacticRP V2
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/servers" className="hover:text-gray-300">
                Servers
              </Link>
            </li>
            <li>
              <Link to="/discord" className="hover:text-gray-300">
                Discord
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
