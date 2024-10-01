const calculate = document.querySelector('.calculate');
calculate.addEventListener('click', (e) => {
    e.preventDefault();

    // Get the values from the input fields
    const billAmt = document.getElementById('amount').value;
    const percentage = document.getElementById('discount-percentage').value;
    const discountAmt = document.getElementById('discount-amount');
    const FinalPay = document.getElementById('pay');

    // Check if fields are empty
    if (!billAmt || !percentage) {
        alert('Please fill in both the Bill Amount and Discount Percentage fields.');
        return; // Stop further execution if fields are missing
    }

    // Calculate the discount amount and final payment
    discountAmt.value = billAmt * (percentage / 100);
    FinalPay.value = billAmt - discountAmt.value;
});
