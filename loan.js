function calculateEMI(){

    let P =
    parseFloat(
        document.getElementById("amount").value
    );

    let annualRate =
    parseFloat(
        document.getElementById("rate").value
    );

    let years =
    parseFloat(
        document.getElementById("years").value
    );

    let R =
    annualRate / 12 / 100;

    let N =
    years * 12;

    let EMI =
    (P * R * Math.pow(1 + R, N))
    /
    (Math.pow(1 + R, N) - 1);

    let totalPayment =
    EMI * N;

    let totalInterest =
    totalPayment - P;

    document.getElementById("emi")
    .innerHTML =
    "Monthly EMI : ₹" +
    EMI.toFixed(2);

    document.getElementById("interest")
    .innerHTML =
    "Total Interest : ₹" +
    totalInterest.toFixed(2);

    document.getElementById("payment")
    .innerHTML =
    "Total Payment : ₹" +
    totalPayment.toFixed(2);

}