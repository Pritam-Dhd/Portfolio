const Header = () => {
  return (
    <header>
      <div className="container m-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Pritam Portfolio</h1>
          <ul className="flex gap-3">
            <li>
              <a  href="#about" className="text-gray-400 hover:text-white cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a  href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                Projects
              </a>
            </li>
            <li>
              <a  href="#skills" className="text-gray-400 hover:text-white cursor-pointer">
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
