"use client";

import React from "react";
import { DialogDescription } from "@radix-ui/react-dialog";
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { useModal } from "@/providers/ModalProvider";

type Props = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: "error" | "success";
};

const CustomModal = ({ children, defaultOpen, title, variant }: Props) => {
  const { isOpen, setClose } = useModal();

  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
      <DialogContent className="overflow-y-auto md:max-h-[700px] md:h-fit h-screen">
        <DialogHeader>
          <DialogTitle
            className={cn(
              "font-bold text-center flex items-center justify-center gap-x-2 mb-6",
              variant === "error" && "text-red-600",
              variant === "success" && "text-emerald-600"
            )}
          >
            {variant === "error" && <AlertCircleIcon />}
            {variant === "success" && <CheckCircle2Icon />}
            {title}
          </DialogTitle>

          <DialogDescription className="text-gray-700 pb-6">
            {children}
          </DialogDescription>
        </DialogHeader>

        <Button onClick={setClose} className="w-fit mx-auto">
          <span>Close</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
