import { useState } from "react";
import axios from "axios";

type User = {
  id: number;
  name: string;
};

const UserFetcher = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const endPoint = "https://jsonplaceholder.typicode.com/users";

  const handleFetchUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${endPoint}`);
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="text-[16px] space-y-[8px]">
      <button
        className="bg-white text-gray-800 px-[22px] py-[4px] rounded-[8px]"
        onClick={handleFetchUsers}>
        Load Users
      </button>
      {loading && <p>Loading...</p>}
      <ul className="space-y-[2px]">
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserFetcher;
