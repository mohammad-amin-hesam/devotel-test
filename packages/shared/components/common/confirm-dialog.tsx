"use client";

import { Button } from "../ui/button";
import { Modal } from "./modal";

export interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  submitTitle: string;
  buttonLoading?: boolean;
  setOpen: (bool: boolean) => void;
  handleSubmit: () => void;
}

export function ConfirmDialog({
  open,
  title,
  description,
  submitTitle,
  buttonLoading,
  setOpen,
  handleSubmit,
}: ConfirmDialogProps) {
  return (
    <Modal
      open={open}
      setOpen={setOpen}
      title={title}
      description={description}
      showMobileCloseButton={false}
      desktopContentProps={{ className: "w-[450px]" }}
    >
      <div className="flex flex-row justify-end gap-2 px-4 pb-[24px]">
        <Button
          onClick={() => setOpen(false)}
          className="w-full lg:w-[70px]"
          variant={"outline"}
          disabled={buttonLoading}
        >
          انصراف
        </Button>
        <Button
          type="button"
          className="w-full lg:w-[70px]"
          onClick={handleSubmit}
          loading={buttonLoading}
        >
          {submitTitle}
        </Button>
      </div>
    </Modal>
  );
}
