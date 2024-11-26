import { useState } from "react";
import { Input } from "../ui/input";

export type FieldType = "string" | "number" | "date" | "dateTime" | "boolean" | "time" | "currency" | "float";


interface GridInputDf {
    label: string,
    name: string
    type: FieldType,
}


const renderField = (field: GridInputDf): JSX.Element | null => {
    if (["string", "number", "currency", "float"].includes(field.type))
        return <Input placeholder={field.label} name={field.name} showLabel={false} type={field.type} />

    return null
}

export const GridInput = () => {

    const fields: Array<GridInputDf> = [
        {
            label: "Item",
            name: "item",
            type: "string"
        },
        {
            label: "Price",
            name: "price",
            type: "currency"
        },
        {
            label: "Quantity",
            name: "quantity",
            type: "number"
        },
    ];

    const [inputData, setInputData] = useState([]);
    const [inputRows, setInputRows] = useState({
        "1": [{
            label: "Item",
            name: "item",
            type: "string"
        },
        {
            label: "Price",
            name: "price",
            type: "currency"
        },
        {
            label: "Quantity",
            name: "quantity",
            type: "number"
        }]
    });

    function handleAddRow() {
        setInputRows(prev => {
            const keys = Object.keys(prev).map(v => parseInt(v));
            const idx = Math.max.apply(null, keys) + 1;
            const object = {};
            object[idx] = fields;
            return { ...prev, ...object }
        })
    }

    return (
        <div>
            <Input label="User" placeholder="User" name="user" />
            <table className="input-grid">
                <thead>
                    <tr>
                        {fields.map((field, i) => (
                            <th key={i} className="text-left">{field.label}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {
                        Object.keys(inputRows).map((key, i) => (
                            <tr key={key}>
                                {inputRows[key].map((field, j) => (
                                    <td>
                                        {renderField(field)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>

            </table>

            <button onClick={() => {
                handleAddRow()
            }}>
                Add Row
            </button>
        </div>
    )
}
