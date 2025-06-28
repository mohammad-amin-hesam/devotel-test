"use client";

import { ComponentProps, ReactNode } from "react";

export interface PublicListContainerProps {
  children: ReactNode;
  containerProps?: ComponentProps<"ul">;
}

export function PublicListContainer({
  children,
  containerProps = {},
}: PublicListContainerProps) {
  return (
    <ul
      {...containerProps}
      className={`${ containerProps.className || "" } flex w-full flex-col gap-[16px]`}
    >
      {children}
    </ul>
  );
}
