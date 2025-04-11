import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-8 py-4 mx-8">
      <Link to="/" className="bg-[#E1FF4A] w-12 h-12 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-200">
        <span className="text-black text-2xl font-bold">M</span>
      </Link>

      <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu className="w-6 h-6" />
      </button>

      <nav className={`${isMenuOpen ? 'block absolute top-16 right-4 bg-zinc-800 p-4 rounded-lg shadow-lg z-10' : 'hidden'} lg:block lg:static lg:bg-transparent lg:p-0 lg:shadow-none transition-all duration-200`}>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
          <NavLink to="/"
            className={({ isActive }) => isActive ? "text-[#E1FF4A]" : "text-white hover:text-[#E1FF4A] transition-colors duration-200"}>
            home
          </NavLink>
          <NavLink to="/dev-projects"
            className={({ isActive }) => isActive ? "text-[#E1FF4A]" : "text-white hover:text-[#E1FF4A] transition-colors duration-200"}>
            dev projects
          </NavLink>
          <NavLink to="/ux-projects"
            className={({ isActive }) => isActive ? "text-[#E1FF4A]" : "text-white hover:text-[#E1FF4A] transition-colors duration-200"}>
            ux-projects
          </NavLink>
          <NavLink to="/contact"
            className="text-white hover:text-[#E1FF4A] transition-colors duration-200">
            contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;