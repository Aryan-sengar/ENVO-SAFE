import  { useState } from 'react';
import VoucherCard from '../components/VoucherItem/VoucherItem';
import Modal from '../components/Modal';

const vouchers = [
  {
    company: { name: 'Flipkart', logo: '/flipkart-logo.png' },
    description: 'Back to College Sale: Laptops from Rs 9,999 + 3% CashKaro Rewards',
    actionLabel: 'Activate Deal',
    greenCredits: 50, // Example value
  },
  {
    company: { name: 'Medlife', logo: '/medlife-logo.png' },
    description: 'New Users Offer: Upto 25% Off Medicines + 20% Mobikwik SuperCash',
    actionLabel: 'Get Code',
    greenCredits: 30, // Example value
  },
  {
    company: { name: 'MI', logo: '/mi-logo.png' },
    description: '3rd MI Anniversary Sale: Launching Mi Max 2 + 5% SBI Cashback',
    actionLabel: 'Activate Deal',
    greenCredits: 40, // Example value
  },
  {
    company: { name: 'Jabong', logo: '/jabong-logo.png' },
    description: 'Exclusive 100% Cashback: Rs 250 Cashback on orders over Rs 250',
    actionLabel: 'Activate Deal',
    greenCredits: 60, // Example value
  },
];

const VoucherRedeemPage = () => {
  const [selectedVoucher, setSelectedVoucher] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (voucher) => {
    setSelectedVoucher(voucher);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedVoucher(null);
  };

  const handleRedeem = (voucher) => {
    // Handle redeem logic here
    alert(`Redeemed ${voucher.greenCredits} Green Credits for ${voucher.company.name}`);
    handleCloseModal();
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Today's Best Cashback Deals</h1>
      <div className="flex flex-wrap justify-center">
        {vouchers.map((voucher, index) => (
          <VoucherCard
            key={index}
            company={voucher.company}
            description={voucher.description}
            actionLabel={voucher.actionLabel}
            greenCredits={voucher.greenCredits}
            onClick={() => handleOpenModal(voucher)}
          />
        ))}
      </div>
      {selectedVoucher && (
        <Modal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          voucher={selectedVoucher}
          onRedeem={handleRedeem}
        />
      )}
    </div>
  );
};

export default VoucherRedeemPage;
