import { createContext, useState, useContext } from 'react';

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const [walletBalance, setWalletBalance] = useState(0);

  const creditWallet = (amount) => {
    setWalletBalance(prevBalance => prevBalance + amount);
  };

  const debitWallet = (amount) => {
    if (walletBalance >= amount) {
      setWalletBalance(prevBalance => prevBalance - amount);
      return true;
    } else {
      return false;
    }
  };

  return (
    <WalletContext.Provider value={{ walletBalance, creditWallet, debitWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
