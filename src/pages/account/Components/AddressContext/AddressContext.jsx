import { createContext, useContext, useState } from "react";

const AddressContext = createContext(undefined);

export const useAddressContext = () => {
  const addressContext = useContext(AddressContext);

  if (addressContext === undefined) {
    throw new Error(
      "'useAddressContext' must be used within a AddressProvider"
    );
  }
  return addressContext;
};

const AddressProvider = ({ userAddress = [], children }) => {
  const [address, setAddress] = useState(userAddress);

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
