import { useEffect, useRef, useState } from "react"

type AutocompleteOptions = Array<{ value: string, label: string, }>;

interface AutocompleteProps {
    label: string;
    defaultValue?: string;
    options: AutocompleteOptions
    onChange?: (event: string) => void;
}


export const AutoComplete = ({ label, onChange, options }: AutocompleteProps) => {
    // const options: AutocompleteOptions = [
    //     { value: "Gaming Mouse", label: "Gaming Mouse", },
    //     { value: "Gaming Keyboard", label: "Gaming Keyboard", },
    //     { value: "Copper Wiring ", label: "Copper Wiring ", },
    //     { value: "Django reset", label: "Django reset", },
    //     { value: "Nike Shoe", label: "Nike Shoe", },
    // ]


    const [inputValue, setInputValue] = useState<string>();
    const [showOptions, setShowOptions] = useState(false);
    const [searchResults, setSearchResults] = useState<AutocompleteOptions | null>(options);

    const autocompleteRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);



    function filterOptions(query: string) {
        if (!query) { setSearchResults(options); }

        const results = options.filter((row) => {
            if (row.value?.toLowerCase().includes(query.toLowerCase())) return row;
        })

        setSearchResults(results.sort());
    }


    function setValue(row: { value: string, label: string }) {
        if (onChange) onChange(row.value);
        setInputValue(row.value);
        setShowOptions(false)
    }

    function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
        const { value: query } = event.target;
        function match(q: string, v: string) {
            if (v.toLowerCase() === q.toLowerCase()) {
                return true
            }
        }

        const filteredRow = options.find(row => {
            const { label, value } = row;
            if (match(query, value) || match(query, label)) return true;
        })

        if (!filteredRow) return;

        setValue(filteredRow);
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            const { target } = event;
            if (target instanceof Node && !autocompleteRef?.current?.contains(target)) {
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
            <div className="input-label">{label}</div>
            <div className="input-field__wrapper">
                <input type="text"
                    value={inputValue}
                    onFocus={() => setShowOptions(true)}
                    onChange={(event) => {
                        const { value } = event.target;
                        filterOptions(value)
                    }}
                    onBlur={handleBlur}
                    ref={inputRef}
                />
            </div>

            {showOptions ?
                <div className="autocomplete-options">
                    <div className="autocomplete-option__list">
                        {searchResults?.length ? searchResults.map((row, index) => (
                            <div
                                onClick={() => setValue(row)}
                                className="text-sm pointer option" key={index} >{row.value}</div>
                        )) : <div className="text-sm option text-center" >No results found</div>}
                    </div>
                </div> : <></>}
        </div>
    )
}