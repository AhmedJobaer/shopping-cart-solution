function getTextElementValueById(elementId) {
    const phoneTotalElemnet = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElemnet.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calclulateSubTotal() {
    //calculate total
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
}
