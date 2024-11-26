import { useEffect, useRef, useState } from "react"

export const AutoComplete = ({ }) => {
    let autocompleteRef: React.MutableRefObject<HTMLDivElement> = useRef();
    const [showOptions, setShowOptions] = useState(false);
    const options = [
        { value: "Gaming Mouse" },
        { value: "Gaming Keyboard" },
        { value: "Copper Wiring " },
        { value: "Django reset framework" },
        { value: "Nike Shoe" },
    ]

    const handleBlur = () => {
        const currentValue = inputRef.current.value;

        if (inputQuery) {
            const filterValue = results?.find((val) => {
                if (typeof val === 'object' && val.option === currentValue) {
                    return true;
                }
                if (typeof val === 'string' && val === currentValue) {
                    return true;
                }
                return false;
            });

            if (filterValue) {
                if (typeof filterValue === "object") {
                    inputValueRef.current.value = filterValue.value;
                    setInputQuery(currentValue);
                    setValue(filterValue.value);
                    setShowResults([]);
                }
                else if (typeof filterValue === "string") {
                    inputValueRef.current.value = filterValue;
                    setInputQuery(currentValue);
                    setValue(filterValue);
                    setShowResults([]);
                }
            }
            else {
                inputValueRef.current.value = "";
                inputRef.current.value = "";
                setInputQuery("");
                setValue("");
            }
        }
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!autocompleteRef.current.contains(event?.target)) {
                setShowOptions(false);
            }
        }
        window.addEventListener("click", handleOutsideClick);
        return () => {
            window.removeEventListener("click", handleOutsideClick);
        }
    }, [])
    return (
        <div className="input-container input-autocomplete" ref={autocompleteRef}>
            <div className="input-label">Product</div>
            <div className="input-field__wrapper">
                <input type="text"
                    onFocus={() => setShowOptions(true)}
                />
            </div>


            {showOptions ?

                <div className="autocomplete-options">
                    <div className="autocomplete-option__list">
                        {options.map((val, index) => (
                            <div className="text-sm pointer option" key={index} >{val.value}</div>
                        ))}
                    </div>
                </div> : <></>}
        </div>
    )
}

{/* <div className="input-container">
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
                    if (["number", "float", "currency"].includes(type)) {
                        const { value } = event.target;
                        event.target.value = getFloat(value, precision);
                    }
                    if (onChange) onChange(event);
                }}
            />
        </div>
    </div> */}