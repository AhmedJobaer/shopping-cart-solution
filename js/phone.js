
function updatePhoneNumber(isIncrease) {
    const phoneNumberFiled = document.getElementById('phone-number-filed');
    const phoneNumberString = phoneNumberFiled.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberFiled.value = newPhoneNumber;

    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    document.getElementById('phone-total').innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber)

    //calulate total
    calclulateSubTotal();

})


document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calclulateSubTotal();
})