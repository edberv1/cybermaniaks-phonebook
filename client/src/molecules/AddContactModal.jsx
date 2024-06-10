import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Button from "../atoms/Buton";

Modal.setAppElement("#root");

const AddContactModal = ({ isOpen, onRequestClose }) => {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    emails: [""],
    numbers: [""],
  });

  const handleInputChange = (e, index, type) => {
    const values = [...contact[type]];
    values[index] = e.target.value;
    setContact({ ...contact, [type]: values });
  };

  const handleAddClick = (type) => {
    setContact({ ...contact, [type]: [...contact[type], ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/contacts");
      console.log(response.data);
      setContact({
        name: "",
        lastName: "",
        address: "",
        city: "",
        country: "",
        emails: [""],
        numbers: [""],
      });
      
      onRequestClose();
    } catch (error) {
      console.error("Could not save contact:", error);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Contact"
      className="m-4 p-5 bg-white rounded shadow-lg outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-lg font-bold mb-4">Register new contact</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Name:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          value={contact.name}
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
          placeholder="Enter the Name"
        />
        <label>Lastname:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          value={contact.lastName}
          onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
          placeholder="Enter the Lastname"
        />
        <label>Address:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          value={contact.address}
          onChange={(e) => setContact({ ...contact, address: e.target.value })}
          placeholder="Enter the address"
        />
        <label>City:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          value={contact.city}
          onChange={(e) => setContact({ ...contact, city: e.target.value })}
          placeholder="Enter the city"
        />
        <label>Country:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          value={contact.country}
          onChange={(e) => setContact({ ...contact, country: e.target.value })}
          placeholder="Enter the country"
        />

        {contact.emails.map((email, index) => (
          <div key={index} className="flex items-center mb-2">
            <label className="mr-2">Email:</label>
            <input
              className="flex-1 p-2 border rounded"
              type="email"
              value={email}
              onChange={(e) => handleInputChange(e, index, "emails")}
              placeholder="Enter the Email"
            />
            {index === contact.emails.length - 1 && (
              <Button
                type="button"
                text="Add"
                onClick={() => handleAddClick("emails")}
                colorClass="bg-blue-500 hover:bg-blue-700"
              >
                Add
              </Button>
            )}
          </div>
        ))}

        {contact.numbers.map((number, index) => (
          <div key={index} className="flex items-center mb-2">
            <label className="mr-2">Number:</label>
            <input
              className="flex-1 p-2 border rounded"
              type="tel"
              value={number}
              onChange={(e) => handleInputChange(e, index, "numbers")}
              placeholder="Enter the Number"
            />
            {index === contact.numbers.length - 1 && (
              <Button
                type="button"
                text="Add"
                onClick={() => handleAddClick("numbers")}
                colorClass="bg-blue-500 hover:bg-blue-700"
              >
                Add
              </Button>
            )}
          </div>
        ))}

        <Button
          type="submit"
          text="Save"
          colorClass="bg-blue-500 hover:bg-blue-700 w-40 mt-6"
        >
          Save
        </Button>
      </form>
    </Modal>
  );
};

export default AddContactModal;
