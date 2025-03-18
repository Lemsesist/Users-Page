import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center mt-20">
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <p className="text-xl my-4">Страница не найдена</p>
    <Link to="/users" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
      Вернуться на главную
    </Link>
  </div>
);

export default NotFound;
