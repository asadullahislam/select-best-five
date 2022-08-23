function getValueOfFieldById(fieldId) {
    const fieldValue = parseFloat(document.getElementById(fieldId).value);
    return fieldValue;
}

function getValueOfElementById(elementId) {
    const elementValue = parseFloat(document.getElementById(elementId).innerText);
    return elementValue;
}