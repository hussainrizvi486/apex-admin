
export type GridColDefType = "string" | "number" | "date" | "dateTime" | "boolean" | "time" | "currency";

export interface GridColDef {
    label: string;
    accessor: string;
    width?: number;
    type?: GridColDefType;
    renderHeader?(): React.ReactNode;
    renderCell?(): React.ReactNode,
    valueFormatter?(): void;
    valueGetter?(value: GridColDefType, row: object): string
}

export interface GridCellDef {
    data: object
}


export interface DataGridProps {
    enableSerial?: boolean,
    columns: Array<GridColDef>
    data: Array<object>,
}