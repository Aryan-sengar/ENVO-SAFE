import  { useState } from 'react';
import VoucherCard from '../components/VoucherItem/VoucherItem';
import Modal from '../components/Modal';

const vouchers = [
  {
    company: { name: 'Ecoindian', logo: '/ecoindian-logo.png' },
    description: '10% Off on All Eco-Friendly Products + Free Shipping',
    actionLabel: 'Activate Deal',
    greenCredits: 50, // Example value
  },
  {
    company: { name: 'Organic India', logo: '/organicindia-logo.png' },
    description: '15% Off on First Order of Organic Products',
    actionLabel: 'Get Code',
    greenCredits: 40, // Example value
  },
  {
    company: { name: 'Patanjali', logo: '/patanjali-logo.png' },
    description: 'Up to 20% Off on Natural Health and Wellness Products',
    actionLabel: 'Activate Deal',
    greenCredits: 60, // Example value
  },
  {
    company: { name: 'EcoKart', logo: '/ecokart-logo.png' },
    description: 'Exclusive 25% Off on Sustainable Products',
    actionLabel: 'Get Code',
    greenCredits: 30, // Example value
  },
  {
    company: { name: 'Bare Necessities', logo: '/barenecessities-logo.png' },
    description: '10% Off on Zero-Waste and Sustainable Products',
    actionLabel: 'Activate Deal',
    greenCredits: 70, // Example value
  },
  {
    company: { name: 'The Better India Shop', logo: '/betterindia-logo.png' },
    description: '20% Off on Eco-Friendly Household Items',
    actionLabel: 'Get Code',
    greenCredits: 50, // Example value
  },
  {
    company: { name: 'Himalaya Wellness', logo: '/himalaya-logo.png' },
    description: 'Free Shipping on Orders Over ₹500 + 10% Off First Order',
    actionLabel: 'Activate Deal',
    greenCredits: 45, // Example value
  },
  {
    company: { name: 'GoodDot', logo: '/gooddot-logo.png' },
    description: '15% Off on Plant-Based Meat Products for New Customers',
    actionLabel: 'Get Code',
    greenCredits: 35, // Example value
  },
  {
    company: { name: 'Organic India', logo: '/organicindia-logo.png' },
    description: '15% Off on First Order of Organic Products',
    actionLabel: 'Get Code',
    greenCredits: 40, // Example value
  }
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
      <h1 className="text-3xl font-bold text-center mb-8">Todays Best Cashback Deals</h1>
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
