"use client";

import React from "react";
import CustomModal from "@/components/modal/CustomModal";
import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/ModalProvider";

const page = () => {
  const { setOpen } = useModal();

  const handleSuccess = () => {
    setOpen(
      <CustomModal title="This is a success heading" variant="success">
        Class names for the title in CustomModal component have been
        successfully generated based on the provided variant prop.
      </CustomModal>
    );
  };

  const handleError = () => {
    setOpen(
      <CustomModal title="This is a error heading" variant="error">
        Failed to generate class names for the title in CustomModal component.
        Please ensure that the variant prop is provided and has a valid value
        ('error' or 'success').
      </CustomModal>
    );
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center gap-x-4">
      <Button
        type="button"
        variant="default"
        onClick={handleSuccess}
        className="bg-emerald-600 hover:bg-emerald-700"
      >
        Success
      </Button>
      <Button
        type="button"
        onClick={handleError}
        className="bg-red-600 hover:bg-red-700"
      >
        Error
      </Button>
    </div>
  );
};

export default page;
