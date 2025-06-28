import { useMemo, useState } from "react";
import { PublicColumn } from "../list/models";
import { SubmissionRow } from "../../api/forms/types";
import { useSubmissions } from "../../api/forms/use-forms";

export function useFormsColumns() {
  const { data } = useSubmissions();
  const [disabledColumns, setDisabledColumns] = useState<string[]>(
    []
  );

  const formsColumns: PublicColumn[] = useMemo(() => {
    if (data?.columns) {
      return data.columns
        .filter((col) => !disabledColumns.includes(col))
        .map((column) => {
          return {
            accessorKey: column,
            header: () => <div>{column}</div>,
            cell: ({ row }: { row: { original: SubmissionRow } }) => {
              return (
                <div>
                  {row.original[column as keyof SubmissionRow]}
                </div>
              );
            },
          };
        });
    }

    return [];
  }, [data?.columns, disabledColumns]);

  const toggleColumn = (column: string) => {
    if (disabledColumns.includes(column)) {
      setDisabledColumns(disabledColumns.filter((c) => c !== column));
    } else {
      setDisabledColumns([...disabledColumns, column]);
    }
  };

  return { formsColumns, toggleColumn, disabledColumns };
}
