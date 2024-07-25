import  { useState } from 'react';
import VoucherCard from '../components/VoucherItem/VoucherItem';
import Modal from '../components/Modal';

const vouchers = [
  {
    company: { name: 'Ecoindian', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPyi17y4QMDaegufpia_nfPWZdbXNqnCOPQ&s' },
    description: '10% Off on All Eco-Friendly Products + Free Shipping',
    actionLabel: 'Activate Deal',
    greenCredits: 50, // Example value
  },
  {
    company: { name: 'Organic India', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrO9Wf4Ggnz195y4Mt4Hd0Mmws5IBIBAJj6w&s'
 },
    description: '15% Off on First Order of Organic Products',
    actionLabel: 'Get Code',
    greenCredits: 40, // Example value
  },
  {
    company: { name: 'Patanjali', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQ4crgfsf8bfVYfOknLKBJenshAIkDHHllg&s' },
    description: 'Up to 20% Off on Natural Health and Wellness Products',
    actionLabel: 'Activate Deal',
    greenCredits: 60, // Example value
  },
  {
    company: { name: 'EcoKart', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHx9x9OQah3epUZe6pB-DL13L7GtWpC3UskQ&s' },
    description: 'Exclusive 25% Off on Sustainable Products',
    actionLabel: 'Get Code',
    greenCredits: 30, // Example value
  },
  {
    company: { name: 'Bare Necessities', logo: 'https://barenecessities.in/cdn/shop/files/Bare_Necessities_logo_white_bg_1200x1200.png?v=1700618281' },
    description: '10% Off on Zero-Waste and Sustainable Products',
    actionLabel: 'Activate Deal',
    greenCredits: 70, // Example value
  },
  {
    company: { name: 'The Better India Shop', logo: 'https://brandfetch.com/thebetterindia.com?library=default&collection=logos&asset=idJfwDU6Be&view=library' },
    description: '20% Off on Eco-Friendly Household Items',
    actionLabel: 'Get Code',
    greenCredits: 50, // Example value
  },
  {
    company: { name: 'Himalaya Wellness', logo: 'https://brandfetch.com/himalayawellness.in?library=default&collection=logos&asset=idi_zqVpw7&view=library' },
    description: 'Free Shipping on Orders Over ₹500 + 10% Off First Order',
    actionLabel: 'Activate Deal',
    greenCredits: 45, // Example value
  },
  {
    company: { name: 'GoodDot', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmw7TyiL86GKQolZM31EPt7J74OMgWQ1Rk2w&s' },
    description: '15% Off on Plant-Based Meat Products for New Customers',
    actionLabel: 'Get Code',
    greenCredits: 35, // Example value
  },
  {
    company: { name: 'Organic India', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRcJpkZH2gorUFSAwpTK9OmelxbYs2MYoLXg&s' },
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
