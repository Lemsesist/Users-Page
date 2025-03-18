import { Link } from 'react-router-dom';

const UserCard = ({ user }) => (
  <div className="bg-white shadow-md rounded p-4 transform transition hover:scale-105 hover:shadow-lg">
    <img className="rounded-full w-24 h-24 mx-auto" src={`https://i.pravatar.cc/150?img=${user.id}`} alt="avatar" />
    <h2 className="text-lg font-bold text-center mt-2">{user.name.firstname} {user.name.lastname}</h2>
    <p className="text-gray-600 text-center">{user.email}</p>
    <p className="text-center">{user.address.city}, {user.address.street}</p>
    <Link to={`/users/${user.id}`} className="mt-4 block bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-600">
      Подробнее
    </Link>
  </div>
);

export default UserCard;
