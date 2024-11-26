import React, { useState } from "react";
import { formatCurrency } from "../utils";
import moment from "moment";

interface GridDataType {
    id: number | string,
    selected?: boolean,
    data: object
}

interface TypeColumnDf {
    width: number,
    valueFormatter: (value) => value;
    label: string,
    accessor: string,
    type?: "data" | "currency" | "percent" | "date" | "datetime" | "int" | "float"
}


type GridColDefType = "string" | "number" | "date" | "dateTime" | "boolean"

interface GridColDef {
    label: string;
    accessor: string;
    width?: number;
    type?: GridColDefType;
    renderHeader?(): React.ReactNode;
    renderCell?(): React.ReactNode,
    valueFormatter?(): void;
    valueGetter?(value: GridColDefType, row: object): string
}


let a: GridColDef


interface DataGridProps {
    columns: Array<TypeColumnDf>,
    data: [],
    selectableRows?: boolean,
}


const serializeGridData = (data: Array<GridDataType>) => {
    const serializedData: Array<GridDataType> = [];
    data.forEach((row, i) => {
        serializedData.push({
            selected: false,
            id: i,
            data: row
        })
    })


    return serializedData

}
export const DataGrid: React.FC<DataGridProps> = ({ columns, data, selectableRows = false }) => {
    // const accessors = columns.map(i => i.accessor);

    const [gridData, setGridData] = useState(serializeGridData(data));
    console.log(gridData)

    function selectRow(idx: number, select = true) {
        setGridData((prev: any) => {
            if (prev[idx]?.selected === select) return prev;

            return prev.map((row: any, i: any) =>
                i === idx ? { ...row, selected: select } : row
            );
        });
    }


    return (
        <table className="datagrid">
            <thead className="datagrid-header">
                <tr>
                    {selectableRows ?
                        <th className="datagrid-cell">
                            #
                        </th>
                        : <></>}

                    {columns.map((col, i) => (
                        <DataGridHeaderCell key={i} width={col.width}>
                            {col.label}
                        </DataGridHeaderCell>

                    ))}
                </tr>
            </thead>

            <tbody className="datagrid-body">
                {gridData.map((row, i) => (
                    <tr className="datagrid-row" data-row-selected={row.selected} key={i}>
                        {selectableRows ?
                            <td className="datagrid-cell">
                                <input type="checkbox" onChange={(event) => event.target.checked ? selectRow(i) : selectRow(i, false)} />
                            </td>
                            : <></>}

                        {columns.map((col, _i) => (
                            <DataGridCell column={col} data={row["data"]} key={_i} />
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}


{/* <td className="datagrid-cell">{row["data"][col.accessor]}</td> */ }

interface DataCellTProp {
    data: object,
    column: TypeColumnDf
}


const DataGridHeaderCell = ({ children, width = 50 }) => {
    const style = { width: width }
    return (
        <th className="datagrid-cell" style={style}>{children}</th>
    )
}
const DataGridCell: React.FC<DataCellTProp> = ({ data, column }) => {
    const { accessor } = column;
    let value = data[accessor];
    if (column.type == "currency") {
        value = formatCurrency(value);
        console.log(value)
    }
    if (column.type == "date") {
        value = moment(value).format('l');
    }
    if (column.type == "datetime") {
        value = moment(value).format('l LT');
    }

    return (
        <>
            <td className="datagrid-cell">{value}</td>
        </>
    )
}
