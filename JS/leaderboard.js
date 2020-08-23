class Rank{
   constructor(){
       this.leaderboards = createElement('h2');

   }
   display(){
    this.leaderboards.html(player.name+","+" You've Placed "+player.rank);
    this.leaderboards.position((displayWidth-5)/2, (displayHeight-150)/2);

   }
}