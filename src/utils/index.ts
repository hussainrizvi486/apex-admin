function covertToFloat(value: any): GLfloat {
    return isNaN(parseFloat(value)) ? 0 : value;

}
export function formatCurrency(value: number | GLfloat | string) {
    value = covertToFloat(value);
    const [integerPart, decimalPart] = Math.abs(value).toFixed(2).split('.');
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formatted = `${formattedInteger}.${decimalPart}`;
    return value < 0 ? `-${formatted}` : formatted;
}
