"use client";
import { ComponentProps, ReactNode, useState } from "react";
import { useIsMobile } from "../../hooks/use-mobile";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

export interface ModalProps {
  children: ReactNode;
  trigger?: ReactNode;
  title?: string;
  description?: string;
  defaultOpen?: boolean;
  open?: boolean;
  showMobileCloseButton?: boolean;
  setOpen?: (isOpen: boolean) => void;
  desktopContentProps?: ComponentProps<typeof DialogContent>;
  mobileContentProps?: ComponentProps<typeof DrawerContent>;
}

export function Modal({
  children,
  trigger,
  description,
  title,
  defaultOpen = false,
  open,
  showMobileCloseButton = true,
  setOpen,
  desktopContentProps = {},
  mobileContentProps = {},
}: ModalProps) {
  const [openModal, setOpenModal] = useState(defaultOpen);
  const isDesktop = !useIsMobile();

  if (isDesktop) {
    return (
      <Dialog
        open={open !== undefined ? open : openModal}
        onOpenChange={setOpen || setOpenModal}
      >
        {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
        <DialogContent
          {...desktopContentProps}
          className={`${ !title && !description ? "p-0" : "px-0" } sm:max-w-[800px]
            ${desktopContentProps.className || ""}`}
        >
          {!title && !description ? null : (
            <DialogHeader className={"px-[24px]"}>
              {title && <DialogTitle>{title}</DialogTitle>}
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>
          )}
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer
      open={open !== undefined ? open : openModal}
      onOpenChange={setOpen || setOpenModal}
    >
      {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
      <DrawerContent {...mobileContentProps}>
        {!title && !description ? null : (
          <DrawerHeader className="text-right">
            {title && <DrawerTitle>{title}</DrawerTitle>}
            {description && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
          </DrawerHeader>
        )}
        {children}
        {showMobileCloseButton && (
          <DrawerFooter className="border-t py-[10px]">
            <DrawerClose asChild>
              <Button variant="secondary">بستن</Button>
            </DrawerClose>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}

export interface DrawerScrollAreaProps {
  children: ReactNode;
  className?: string;
}

export function DrawerScrollArea({
  children,
  className = "",
}: DrawerScrollAreaProps) {
  const isMobile = useIsMobile();
  const isDesktop = !isMobile;

  if (isDesktop) return children;

  return (
    <div
      className={`flex max-h-[calc(100vh-172px)] flex-col overflow-y-auto ${className}`}
    >
      {children}
    </div>
  );
}
