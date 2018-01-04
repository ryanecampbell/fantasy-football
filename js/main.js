var domain = "https://api.mysportsfeeds.com/v1.1/pull/nfl/";
var encryptedCredentials = "Y2FtcHJ5YW46VW5lYXJ0aDA="; //user:pass
var divIDs = ["home", "teams", "players", "standings", "schedule"];

function showDiv(divID){
    //Hides all of the divs
    divIDs.forEach(element => {
        document.getElementById(element).style.display = "none";
    });

    //Displays the one we want
    document.getElementById(divID).style.display = "";
}