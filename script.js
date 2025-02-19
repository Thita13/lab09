import { useEffect, useState } from "react";

function UserList({ onSelectUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // API ตัวอย่าง
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-center">รายชื่อผู้ใช้</h1>
      <div className="mt-4 space-y-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"
            onClick={() => onSelectUser(user.id)}
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
