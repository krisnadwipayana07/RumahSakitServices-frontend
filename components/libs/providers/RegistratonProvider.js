import { createContext, useContext, useMemo, useState } from 'react';

const RegistrationContext = createContext();

export default function RegistratonProvider({ children }) {
  const [_registrationData, setRegistrationData] = useState({
    email: '',
    name: '',
    nim: '',
    lineWa: '',
    joinedYear: '',
    choice1: '',
    choice1Reason: '',
    choice2: '',
    choice2Reason: '',
    otherDivision: false,
    overallReason: '',
    ideasForSIC: ''
  });
  const registrationData = useMemo(
    () => _registrationData,
    [_registrationData]
  );
  return (
    <RegistrationContext.Provider
      value={[registrationData, setRegistrationData]}
    >
      {children}
    </RegistrationContext.Provider>
  );
}

export const useRegistrationData = () => useContext(RegistrationContext);
