"use client";

import React, { FC, createContext, useContext, useState } from "react";

interface ModalProviderProps {
  children: React.ReactNode;
}

type ModalContexType = {
  isOpen: boolean;
  setOpen: (modal: React.ReactNode) => void;
  setClose: () => void;
};

export const ModalContext = createContext<ModalContexType>({
  isOpen: false,
  setOpen: (modal: React.ReactNode) => {},
  setClose: () => {},
});

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showingModal, setShowingModal] = useState<React.ReactNode>(null);

  const setOpen = (modal: React.ReactNode) => {
    if (modal) {
      setShowingModal(modal);
      setIsOpen(true);
    }
  };

  const setClose = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ setOpen, setClose, isOpen }}>
      {children}
      {showingModal}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within the modal provider");
  }
  return context;
};

export default ModalProvider;
