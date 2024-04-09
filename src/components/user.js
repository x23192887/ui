import React, { useState, useEffect } from "react";
import {
  UserListContainer,
  UserListTable,
  TableHeader,
  TableCell,
  DeleteButton,
  AddUserForm,
  AddUserInput,
  AddUserButton,
  ErrorMessage,
} from "./userStyle.tsx";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [formValid, setFormValid] = useState(false);
  const [formErrors, setFormErrors] = useState({ name: false, email: false, phone: false });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://assignmentbackend-9eic.onrender.com/api/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormValid(formData.name !== "" && formData.email !== "" && formData.phone !== "");
    setFormErrors({ ...formErrors, [name]: value === "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://assignmentbackend-9eic.onrender.com/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      fetchUsers();
      setFormData({ name: "", email: "", phone: "" });
      setFormValid(false);
      setFormErrors({ name: false, email: false, phone: false }); // Reset form errors after submission
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (name) => {
    try {
      await fetch(`https://assignmentbackend-9eic.onrender.com/api/users/${name}`, {
        method: "DELETE",
      });
      fetchUsers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserListContainer>
      <div style={{ textAlign: "center" }}>
        <h1>User List</h1>
      </div>
      <UserListTable>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Phone</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <DeleteButton onClick={() => handleDelete(user.name)}>
                  Delete
                </DeleteButton>
              </TableCell>
            </tr>
          ))}
        </tbody>
      </UserListTable>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "0 auto",
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        <div style={{ display: "grid", gridrow: "1fr 1fr" }}>
          <AddUserForm>
            <AddUserInput
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              style={{ border: formErrors.name ? "1px solid red" : "1px solid #ccc" }}
              required
            />
            <AddUserInput
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              style={{ border: formErrors.email ? "1px solid red" : "1px solid #ccc" }}
              required
            />
            <AddUserInput
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              style={{ border: formErrors.phone ? "1px solid red" : "1px solid #ccc" }}
              required
            />
            {!(formData.name && formData.email && formData.phone) && (
              <ErrorMessage>All fields are required</ErrorMessage>
            )}
          </AddUserForm>
          <AddUserButton type="submit" disabled={!formValid}>
            Add User
          </AddUserButton>
        </div>
      </form>
    </UserListContainer>
  );
};

export default UserList;
