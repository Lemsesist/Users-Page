import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white py-4">
    <nav className="container mx-auto px-4">
      <Link to="/users" className="text-xl font-bold">👤 UserApp</Link>
    </nav>
  </header>
);

export default Header;
