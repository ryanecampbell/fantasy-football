function getTeam(teamName) {
    var getUrl = domain + '2018-playoff/roster_players.json?fordate=20180107&team=' + teamName;

    $.ajax({
        url: getUrl,
        method: 'GET',
        dataType: 'json',
        beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Basic ' + encryptedCredentials)},
        success: function(data){
            console.log(data);
        }
    });
}