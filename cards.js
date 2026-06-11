let active = true;

function toggleCard(){

    let status =
    document.getElementById(
        "statusText"
    );

    if(active){

        status.innerHTML =
        "Frozen";

        active = false;

    }else{

        status.innerHTML =
        "Active";

        active = true;
    }

}

function replaceCard(){

    alert(
        "Card Replacement Request Submitted"
    );

}