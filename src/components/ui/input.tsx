interface InputProps {
    name: string,
    label?: string
    type?: "text" | "int" | "float" | "currency",
    placeholder?: string,
    readOnly?: boolean,
    disabled?: boolean,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    precision?: number,
    showLabel?: boolean,
}


function getFloat() { }
// function getFloat(value: null | string | number | GLfloat, precision = 2): GLfloat {
//     if (!value) return 0;

//     let parsedValue: number;

//     if (typeof value !== "number") {
//         parsedValue = parseFloat(value as string);
//         if (isNaN(parsedValue)) return 0;
//     } else {
//         parsedValue = value;
//     }

//     const factor = Math.pow(10, precision);
//     return Math.round(parsedValue * factor) / factor;
// }

export const Input = ({ label, placeholder, name, onChange, showLabel = true, readOnly = false, type = "text", disabled = false, precision = 2 }: InputProps) => {

    return <div className="input-container">
        {showLabel ?
            <div className="input-label">
                {label}
            </div> : <></>}

        <div className="input-field__wrapper">
            <input type="text" name={name}
                readOnly={readOnly}
                placeholder={placeholder || ""}
                disabled={disabled}
                onBlur={(event) => {
                    // if (["number", "float", "currency"].includes(type)) {
                    //     const { value } = event.target;
                    //     event.target.value = getFloat(value, precision);
                    // }
                    if (onChange) onChange(event);
                }}
            />
        </div>
    </div>
}



