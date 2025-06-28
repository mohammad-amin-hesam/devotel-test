import { ReactNode } from 'react';

export interface PublicColumn<T = any> {
    accessorKey: string;
    header: () => ReactNode | ReactNode;
    cell: (args: { row: { original: T; index: number } }) => ReactNode;
}

export interface PublicListProps<T = any> {
    isLoading?: boolean;
    data: T[];
    columns: PublicColumn<T>[];
    totalPages?: number;
    hasRowNumber?: boolean;
}
