import Modal from 'react-modal';

Modal.setAppElement('#root');

const DeleteContactModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirm Deletion"
      className="m-4 p-5 bg-white rounded shadow-lg outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <h2 className="text-lg font-bold mb-4">Are you sure you want to delete?</h2>
      <div className="flex justify-end">
        <button
          onClick={onRequestClose}
          className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-gray-300 mr-2"
        >
          Cancel
        </button>
        <button
          onClick={onRequestClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Yes, I am sure
        </button>
      </div>
    </Modal>
  );
};

export default DeleteContactModal;
