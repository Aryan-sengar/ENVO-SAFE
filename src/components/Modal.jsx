const Modal = ({ isOpen, onClose, voucher, onRedeem }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Offer Details</h2>
        <p className="mb-4">{voucher.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold">Green Credits Needed: {voucher.greenCredits}</span>
          <button
            onClick={() => onRedeem(voucher)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Use Green Credits
          </button>
        </div>
        <button
          onClick={onClose}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
