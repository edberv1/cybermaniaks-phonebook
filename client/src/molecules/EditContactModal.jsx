import Modal from "react-modal";
import Button from "../atoms/Buton";

Modal.setAppElement("#root");

const EditContactModal = ({ isOpen, onRequestClose, contactToEdit }) => {
  const handleSave = () => {
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Contact"
      className="m-4 p-5 bg-white rounded shadow-lg outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-lg font-bold mb-4">Edit Contact</h2>
      <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
        <label>Name:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          name="name"
          placeholder="Name"
        />
        <label>Lastname:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          placeholder="Enter the Lastname"
        />
        <label>Address:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          placeholder="Enter the address"
        />
        <label>City:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          placeholder="Enter the city"
        />
        <label>Country:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="text"
          placeholder="Enter the country"
        />
        <label>Email:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="email"
          placeholder="Email"
        />
        <label>Number:</label>
        <input
          className="mb-2 p-2 border rounded"
          type="tel"
          placeholder="Number"
        />

        <Button
          type="button"
          text="Save Changes"
          onClick={handleSave}
          colorClass="bg-blue-500 hover:bg-blue-700 w-40 mt-6"
        />
      </form>
    </Modal>
  );
};

export default EditContactModal;
