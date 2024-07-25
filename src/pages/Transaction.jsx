import  { useState } from 'react';
import { useWallet } from '../context/WalletContext';

const Transaction = () => {
  const { creditWallet, debitWallet } = useWallet();
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');

  const handleCredit = () => {
    creditWallet(Number(amount));
    setMessage('Amount credited successfully');
  };

  const handleDebit = () => {
    if (debitWallet(Number(amount))) {
      setMessage('Amount debited successfully');
    } else {
      setMessage('Insufficient funds');
    }
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleCredit}>Credit</button>
      <button onClick={handleDebit}>Debit</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Transaction;
