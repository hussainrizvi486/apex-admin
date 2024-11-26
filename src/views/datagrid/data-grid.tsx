import React, { useState } from "react";
import { GridColDef, DataGridProps } from "./types";
import "./style.css";
import moment from "moment";
import { formatCurrency } from "../../utils";
import { Check as CheckIcon, X as CloseIcon } from 'lucide-react';

export const DataGrid: React.FC<DataGridProps> = ({ columns, data, enableSerial }) => {
    // const [GridData, setGridData] = useState([]);

    return (
        <table className="datagrid">
            <thead className="datagrid-header">
                <tr>
                    {enableSerial ? <th className="datagrid-cell">SR.</th> : <></>}
                    {columns.map((val, i) => (
                        <DataGridHeaderCell key={i} column={val} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i}>
                        {enableSerial ? <td className="datagrid-cell">{i}</td> : <></>}
                        {columns.map((col, j) => (
                            <DataGridCell key={j} column={col} row={row} />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table >
    )

}
function getGridCellValue(column: GridColDef, row) {
    const value = row[column.accessor] || null;

    if (column.type == "date" && value) {
        return moment(value).format("L");
    }
    else if (column.type == "dateTime" && value) {
        return moment(value).format("L LT");
    }
    else if (column.type == "time" && value) {
        return moment(value).format("LT");
    }
    else if (column.type == "currency") {
        return formatCurrency(value);
    }
    else if (column.type == "boolean") {
        console.log(value);
        return value ? <CheckIcon /> : <CloseIcon />
    }
    else {
        return value;
    }

}
export const DataGridCell = ({ column, row }: { column: GridColDef, row: object }) => {
    return <td className="datagrid-cell">
        {column.valueFormatter ? column.valueFormatter(row[column.accessor]) : getGridCellValue(column, row)}
    </td>
}

export const DataGridHeaderCell = ({ column }: { column: GridColDef }) => {
    const styles: React.CSSProperties = {
        width: column.width || 50
    }
    return (
        <th className="datagrid-cell" style={styles}>
            {column.renderHeader ? column.renderHeader() : column.label}
        </th>
    )
}