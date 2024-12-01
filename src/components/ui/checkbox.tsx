import { useState } from "react";
interface CheckboxProps {
    label: string
    name: string,
    value?: any,
}


export const Checkbox = ({ label, name, value }: CheckboxProps) => {
    const [check, setCheck] = useState(value);
    return (
        <div className="checkbox-wrapper">
            <div className="checkbox">
                <label>
                    <input type="checkbox" id={name} name={name}
                        defaultChecked={check}
                        defaultValue={check}
                        onChange={() => {
                            setCheck(!check)
                        }}
                    />
                    <span className="checkbox-material">
                        <span className="check"></span>
                    </span>
                </label>
            </div>
            <label className="no-select cursor-pointer text-sm" htmlFor={name}>{label}</label>
        </div>
    )
}
