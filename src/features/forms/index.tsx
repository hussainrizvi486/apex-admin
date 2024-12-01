import { Input } from "../../components/ui/input";
import { Checkbox } from "../../components/ui/checkbox";
import { AutoComplete } from "../../components/inputs/AutoComplete";
import { DatePicker } from "../../components/ui/datepicker"




interface FieldDF {
    label: string;
    type?: "text" | "number" | "float" | "currency";
    required?: boolean;
    name: string;
    options?: any
}

export interface FormFieldDF extends FieldDF {
    type: "text" | "number" | "float" | "currency" | "column_break" | "section" | "autocomplete" | "checkbox" | "date";
}


export function renderForm(fields: Array<FormFieldDF>) {
    function renderField(df: FormFieldDF) {
        if (df.type == "autocomplete") return <AutoComplete label={df.label} options={df.options} />
        if (df.type == "checkbox") return <Checkbox label={df.label} name={df.name} />
        if (df.type == "date") return <DatePicker />
        return <Input label={df.label} name={df.name} />
    }

    function makeFormFieldSet(data: Array<FormFieldDF>) {
        const formFieldSet: Array<{ label: string, columns: FormFieldDF[] }> = [];
        const sectionWiseFieldSet = {};
        let colIndex = 0;
        let currentSection = null;

        for (const field of data) {
            if (field.type === "section") {
                currentSection = field.name
                sectionWiseFieldSet[field.name] = {
                    columns: [[]], label: field.label || ""
                }
                colIndex = 0
            }
            else {
                if (field.type == "column_break") {
                    colIndex++;
                    sectionWiseFieldSet[currentSection]["columns"].push([]);
                }
                else {
                    sectionWiseFieldSet[currentSection]["columns"][colIndex].push(field);
                }
            }
        }

        for (const key of Object.keys(sectionWiseFieldSet)) {
            const sec = sectionWiseFieldSet[key];
            formFieldSet.push({ "label": sec.label, columns: sec.columns });
        }
        return formFieldSet;
    }

    const formFieldSet = makeFormFieldSet(fields);


    return (
        <>
            {
                formFieldSet.map((section, i) => (
                    <section key={i} className="form-section--wrapper">
                        {section.label ? <div className="font-semibold form-section__heading ">{section.label}</div> : <></>}
                        <div className="form-section">

                            {section.columns.map((cols, j) => (
                                <div className="form-columns" key={j}>{
                                    cols.map(field => (
                                        <div className="form-field__wrapper">
                                            {renderField(field)}
                                        </div>
                                    ))
                                }</div>
                            ))}
                        </div>
                    </section>
                ))
            }

            {/* */}
        </>)
}