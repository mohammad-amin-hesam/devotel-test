"use client";

import PublicListInformation from "./public-information";
import { PublicListContainer } from "./public-list-container";
import { PublicListRow } from "./public-list-row";
import { PublicListSkeleton } from "./public-list-skeleton";
import { CircleEllipsis } from "lucide-react";
import { Fragment } from "react";
import { PublicListProps } from "./models";

export function PublicMobileList({
  columns,
  data,
  isLoading,
}: PublicListProps) {
  const renderRows = () => {
    if (isLoading) {
      return <PublicListSkeleton />;
    }

    return data?.map(
      (mobileListItem, mobileListItemIndex: number) => {
        const key = `mobile-row-${mobileListItemIndex}`;

        return (
          <PublicListRow
            key={key}
            startChildren={
              <Fragment>
                {columns.map((column, columnIndex) => {
                  return (
                    <PublicListInformation
                      key={`mobile-list-item-${columnIndex}`}
                      title={
                        typeof column.header === "function"
                          ? (column as any).header()
                          : column.header
                      }
                      headerClass="flex items-center justify-between flex-row"
                      content={(column as any).cell({
                        row: {
                          original: mobileListItem,
                          index: columnIndex,
                        },
                      })}
                      descriptionClass="text-xs inline-flex ltr"
                      Icon={CircleEllipsis}
                    />
                  );
                })}
              </Fragment>
            }
            endChildren={<Fragment></Fragment>}
          />
        );
      }
    );
  };

  return (
    <PublicListContainer containerProps={{ className: "px-4" }}>
      {renderRows()}
    </PublicListContainer>
  );
}
