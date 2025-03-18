import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/users/${id}`)
      .then(({ data }) => setUser(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded p-6">
      <h2 className="text-xl font-bold mb-4">{user.name.firstname} {user.name.lastname}</h2>
      <p><b>Адрес:</b> {user.address.street}, {user.address.number}, {user.address.city}, {user.address.zipcode}</p>
      <p><b>Телефон:</b> {user.phone}</p>
      <p><b>Геолокация:</b> lat {user.address.geolocation.lat}, long {user.address.geolocation.long}</p>
      <p><b>Username:</b> {user.username}</p>
      <p>
        <b>Пароль:</b>
        <span className="ml-2 cursor-pointer text-blue-500" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? user.password : '••••••••'}
        </span>
      </p>
      <button onClick={() => navigate('/users')} className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
        Назад к списку пользователей
      </button>
    </div>
  );
};

export default UserDetails;
