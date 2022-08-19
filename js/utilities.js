function getTextElementValueById(elementId) {
    const phoneTotalElemnet = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElemnet.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calclulateSubTotal() {
    //calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calcluate tax
    const taxAmountString = (currentSubTotal * .01).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalSubTotal = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalSubTotal)
}
