import { ComponentProps, ReactNode } from "react";

export interface PublicListRowProps {
  startChildren: ReactNode;
  endChildren: ReactNode;
  endChildrenWrapper?: ComponentProps<"div">;
  rowElementProps?: ComponentProps<"li">;
}

export function PublicListRow({
  startChildren,
  endChildren,
  endChildrenWrapper = {},
  rowElementProps = {},
}: PublicListRowProps) {
  return (
    <li
      {...rowElementProps}
      className={`relative flex flex-col items-start gap-[12px] rounded-[12px]
        bg-secondary p-3 dark:bg-secondary/60 lg:flex-row lg:items-center
        lg:gap-[8px] lg:py-[4px] ${rowElementProps.className || ""}`}
      data-testid={"public-list-row"}
    >
      <article
        className="flex h-full w-full flex-1 flex-col items-stretch gap-[12px]
          lg:flex-row lg:gap-[4px]"
      >
        {startChildren}
      </article>
      <aside
        {...endChildrenWrapper}
        className={`flex w-full flex-wrap items-center justify-end gap-[12px] lg:gap-[8px]
          ${endChildrenWrapper.className || ""}`}
      >
        {endChildren}
      </aside>
    </li>
  );
}
