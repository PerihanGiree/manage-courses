import React, { useEffect, useState } from "react";

interface User {
  id: number;
  firstName: string;
  email: string;
  phone: string;
}

const Tablo: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dummyjson.com/docs/users")
      .then((response) => response.json())
      .then((result) => {
        // Assuming the API response is an array of objects with properties id, name, email, and phone
        setUsers(result);
        console.log(users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users &&
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Tablo;
