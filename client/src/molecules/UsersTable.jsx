import { useState, useEffect } from "react";
import Button from "../atoms/Buton";
import axios from "axios";
import AddContactModal from "./AddContactModal";
import DeleteContactModal from "./DeleteContactModal";
import EditContactModal from "./EditContactModal";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openModal = () => {
    setContactModalIsOpen(true);
  };

  const closeModal = () => {
    setContactModalIsOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/contacts");
        setUsers(response.data);
      } catch (error) {
        console.error("Could not fetch contacts:", error);
      }
    };

    fetchContacts();
  }, [users]);

  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Contacts</h2>
        <Button
          text="Add Contact"
          onClick={openModal}
          colorClass="bg-blue-500 hover:bg-blue-700"
        />
      </div>
      <table className="table-auto w-full">
        <thead className="bg-gray-400 text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Country</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Number</th>
            <th className="px-4 py-2">Edit</th>
            <th className="px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.lastName}</td>
              <td className="border px-4 py-2">{user.address}</td>
              <td className="border px-4 py-2">{user.city}</td>
              <td className="border px-4 py-2">{user.country}</td>
              <td className="border px-4 py-2">{user.emails?.join(", ")}</td>
              <td className="border px-4 py-2">{user.numbers?.join(", ")}</td>
              <td className="border px-4 py-2">
                <Button
                  text="Edit"
                  onClick={openEditModal}
                  colorClass="bg-green-500 hover:bg-green-700"
                />
              </td>
              <td className="border px-4 py-2">
                <Button
                  text="Delete"
                  onClick={openDeleteModal}
                  colorClass="bg-red-500 hover:bg-red-700"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddContactModal
        isOpen={contactModalIsOpen}
        onRequestClose={closeModal}
      />

      <DeleteContactModal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeDeleteModal}
      />
      <EditContactModal
        isOpen={isEditModalOpen}
        onRequestClose={closeEditModal}
      />
    </div>
  );
};

export default UsersTable;
