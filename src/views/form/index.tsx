import { renderForm } from "../../features/forms"
const formFields: Array<FormFieldDF> = [
    // Section 1: Personal Information
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
        name: "product_name",
    },
    {
        label: "Brand",
        type: "text",
        name: "product_name",
    },

    {
        label: "Color",
        type: "text",
        name: "product_name",
    },
    {
        label: "Maintain Stock",
        name: "category",
        type: "text",
    },
    {
        label: "Current Stock",
        name: "category",
        type: "text",
    },
    {
        label: "Disabled",
        name: "category",
        type: "text",
    },

    {
        // 
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
        name: "category",
        type: "text",
    },


];


export const AppForm = ({ fields = [] }) => {
    return (
        <>{renderForm(formFields)}</>
    )
} 