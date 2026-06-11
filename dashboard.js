let username =
localStorage.getItem("username");

if(username){

    document
    .getElementById("greeting")
    .innerHTML =
    "Welcome, " + username;

}

function toggleBalance(){

    let balance =
    document.getElementById("balance");

    if(balance.innerHTML === "₹1,25,000"){

        balance.innerHTML = "XXXXXX";

    }else{

        balance.innerHTML = "₹1,25,000";

    }

}

new Chart(

document.getElementById("pieChart"),

{
    type:"doughnut",

    data:{

        labels:[
            "Spent",
            "Received"
        ],

        datasets:[{

            data:[
                45000,
                80000
            ]

        }]
    }
}

);

new Chart(

document.getElementById("barChart"),

{
    type:"bar",

    data:{

        labels:[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun"
        ],

        datasets:[{

            label:"Spending",

            data:[
                12000,
                18000,
                15000,
                22000,
                19000,
                25000
            ]

        }]
    }
}

);