function calculatePremium(){

    let coverage =
    Number(
        document.getElementById(
            "coverage"
        ).value
    );

    let age =
    Number(
        document.getElementById(
            "age"
        ).value
    );

    let term =
    Number(
        document.getElementById(
            "term"
        ).value
    );

    let premium =
    ((coverage * 0.002) +
    (age * 100))
    * term;

    document.getElementById(
        "premiumResult"
    ).innerHTML =
    "Estimated Premium : ₹" +
    premium.toFixed(2);

}