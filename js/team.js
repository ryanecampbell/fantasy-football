function getTeam(teamName) {
    var getUrl = domain + '=2017-regular/game_boxscore.json?gameid=20171029-HOU-SEA&teamstats=W,L,T,PF,PA&playerstats=Att,Comp,Yds,TD';
    
    $.get(getUrl, function(data) {
        console.log(data);
    });  
}