import { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../components/UserCard';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/users')
      .then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
};

export default UsersList;
