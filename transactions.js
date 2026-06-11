function showAll(){

    let rows =
    document.querySelectorAll(
        "#transactionTable tbody tr"
    );

    rows.forEach(function(row){

        row.style.display = "";

    });

}

function showSpent(){

    let rows =
    document.querySelectorAll(
        "#transactionTable tbody tr"
    );

    rows.forEach(function(row){

        if(row.dataset.type === "spent"){

            row.style.display = "";

        }else{

            row.style.display = "none";

        }

    });

}

function showReceived(){

    let rows =
    document.querySelectorAll(
        "#transactionTable tbody tr"
    );

    rows.forEach(function(row){

        if(row.dataset.type === "received"){

            row.style.display = "";

        }else{

            row.style.display = "none";

        }

    });

}

function searchTransaction(){

    let search =
    document.getElementById(
        "searchBox"
    ).value.toUpperCase();

    let rows =
    document.querySelectorAll(
        "#transactionTable tbody tr"
    );

    rows.forEach(function(row){

        let id =
        row.cells[0].innerText;

        if(id.indexOf(search) > -1){

            row.style.display = "";

        }else{

            row.style.display = "none";

        }

    });

}

function downloadStatement(){

    alert(
        "Statement Download Started (Demo)"
    );

}