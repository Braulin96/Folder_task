import { useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Users</h2>
      <button
        className="bg-gray-500 text-white font-semibold py-[4px] px-[22px] rounded-full"
        onClick={fetchUsers}>
        Load users
      </button>
      {loading && <p>Loading...</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
