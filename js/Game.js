class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   async start(){
    if(gameState === 0){
      player = new Player();
      var playercountref = await database.ref('playerCount').once("value");
      if(playercountref.exists()){

        playerCount = playercountref.val();
        player.getCount();

      }
     
      form = new Form()
      form.display();
    }
  }
  play(){

    form.hide();
    textSize(25);
    text("Start Game", 120, 100);
    Player.getPlayerInfo();

    if (allPlayers !== undefined){

         var displayPos = 130;

        for(var plr in allPlayers){

          if(plr === "player" + player.index){

            fill("red");

          }

          else{

                fill("black")

          }

        }

         displayPos = displayPos+20;
         textSize(15);
         text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, display_position);


    }

      if(keyIsDown(UP_ARROW) && player.index !== null){

        player.distance = player.distance + 50;
        player.update();
      }

        

      }


  }

