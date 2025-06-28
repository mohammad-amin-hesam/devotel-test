import { PublicMobileList } from "./public-mobile-list";
import { PublicColumn, PublicListProps } from "./models";
import { useIsMobile } from "../../hooks/use-mobile";
import { useRowNumber } from "../../hooks/use-table-row-number";
import { DataTable } from "../data-table";

export function ResponsiveTable(
  props: PublicListProps & { tableContainerClass?: string }
) {
  const isMobile = useIsMobile();
  const { getRowNumber } = useRowNumber();

  const columns: PublicColumn[] = [...props.columns];

  if (props.hasRowNumber) {
    columns.unshift({
      accessorKey: "createdAt",
      header: () => <div className="text-right">Row</div>,
      cell: ({ row }) => {
        return <div>{getRowNumber(row.index)}</div>;
      },
    });
  }

  return isMobile ? (
    <PublicMobileList {...props} columns={columns} />
  ) : (
    <DataTable {...props} columns={columns} />
  );
}
