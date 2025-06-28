"use client";

import { Fragment } from "react";
import { PublicListContainer } from "./public-list-container";
import { PublicListRow } from "./public-list-row";
import { Skeleton } from "../ui/skeleton";
import { LoaderCircle } from "lucide-react";

export function PublicListSkeleton({
  testId,
  className,
  imageClassName,
}: {
  testId?: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <PublicListContainer>
      {Array.from({ length: 10 }).map((_, skeleton) => (
        <PublicListRow
          rowElementProps={{ className }}
          startChildren={
            <Fragment>
              <div className="flex flex-col" data-testid={testId}>
                <Skeleton
                  className={`h-[55px] w-[55px] rounded-[12px] ${imageClassName}`}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[8px]">
                <Skeleton className="h-[10px] w-[60%] animate-bounce rounded-[12px]" />
                <Skeleton className="h-[10px] w-[100%] rounded-[12px]" />
              </div>
              <div className="flex flex-1 flex-col gap-[8px]">
                <Skeleton className="h-[10px] w-[60%] rounded-[12px]" />
                <Skeleton className="h-[10px] w-[100%] rounded-[12px]" />
              </div>
              <div className="flex flex-1 flex-col gap-[8px]">
                <Skeleton className="h-[10px] w-[60%] rounded-[12px]" />
                <Skeleton className="h-[10px] w-[100%] rounded-[12px]" />
              </div>
            </Fragment>
          }
          endChildren={
            <Fragment>
              <LoaderCircle className="animate-spin text-secondary-foreground/30" />
            </Fragment>
          }
          key={`public-skeleton-${skeleton}`}
        />
      ))}
    </PublicListContainer>
  );
}
