
function updateCaseNumber(isIncrease) {
    const caseNumberFiled = document.getElementById('case-number-filed');
    const caseNumberString = caseNumberFiled.value;
    const previousCaseNumber = parseFloat(caseNumberString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFiled.value = newCaseNumber;

    return newCaseNumber;
}

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    document.getElementById('case-total').innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);

    updateCaseTotalPrice(newCaseNumber);
    calclulateSubTotal();
})


document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseNumberFiled = document.getElementById('case-number-filed');
    const newCaseNumber = updateCaseNumber(false, caseNumberFiled);

    updateCaseTotalPrice(newCaseNumber);
    calclulateSubTotal();
})