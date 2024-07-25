

const VoucherCard = ({ company, description, actionLabel, greenCredits, onClick }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-80 b-2">
      <div className="flex items-center mb-4">
        <img src={company.logo} alt={`${company.name} logo`} className="w-12 h-12 mr-4" />
        <h2 className="text-xl font-semibold">{company.name}</h2>
      </div>
      <p className="mb-4">{description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-bold">Green Credits: {greenCredits}</span>
        <button
          onClick={onClick}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default VoucherCard;
