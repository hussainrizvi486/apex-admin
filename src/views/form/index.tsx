import { renderForm, FormFieldDF } from "../../features/forms"
const formFields: Array<FormFieldDF> = [


    {
        label: "Product Information",
        name: "section1",
        type: "section",
    },

    {
        label: "Product Name",
        type: "text",
        name: "product_name",
    },
    {
        label: "Model Number",
        type: "text",
        name: "model_number",
    },
    {
        label: "Brand",
        type: "autocomplete",
        name: "brand",
        options: [
            { label: "Razer", value: "Razer" },
            { label: "Logitech G ", value: "Logitech G " },
            { label: "SteelSeries", value: "SteelSeries" },
            { label: "Corsair", value: "Corsair" },
            { label: "HyperX", value: "HyperX" },
            { label: "ASUS ROG (Republic of Gamers)", value: "ASUS ROG (Republic of Gamers)" },
            { label: "Alienware", value: "Alienware" }
        ]
    },

    {
        label: "Color",
        type: "text",
        name: "color",
    },
    {
        label: "Maintain Stock",
        name: "maintain_stock",
        type: "checkbox",
    },
    {
        label: "Posting Date",
        name: "posting_date",
        type: "date",
    },
    {
        label: "Disabled",
        name: "disabled",
        type: "checkbox",
    },
    {
        label: "",
        type: "column_break",
        name: "column_break",
    },
    {
        label: "Category",
        name: "category",
        type: "text",
    },
    {
        label: "Country of Origin",
        name: "category",
        type: "text",
    },
    {
        label: "Serial Number",
        name: "category",
        type: "text",
    },
    {
        label: "Size",
        name: "category",
        type: "text",
    },

    {
        label: "Published",
        name: "published",
        type: "checkbox",
    },


];


export const AppForm = ({ fields = [] }) => {
    return (
        <>{renderForm(formFields)}</>
    )
} 