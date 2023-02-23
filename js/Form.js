class Form {

  constructor() {
   // this.input = createInput("Name");
    this.button1 = createButton('Eevee');
    this.button2 = createButton('Jolteon');
    this.button3 = createButton('Umbreon');
    this.button4 = createButton('Vaporeon');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button1.hide();
    this.button2.hide();
    this.button3.hide();
    this.button4.hide();
   // this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.button1.class("playButton");
    this.button2.class("playButton");
    this.button3.class("playButton");
    this.button4.class("playButton");
  //  this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button1.position(displayWidth/2 + 30, displayHeight/2 - 130);
    this.button2.position(displayWidth/2 + 30, displayHeight/2 - 70);
    this.button3.position(displayWidth/2 + 30, displayHeight/2 - 10);
    this.button4.position(displayWidth/2 + 30, displayHeight/2 + 50);
    
    this.reset.position(displayWidth-100,20);
    
    this.button1.mousePressed(()=>{

     // this.input.hide();
      this.button1.hide();
      this.button2.hide();
      this.button3.hide();
      this.title.hide();
      this.greeting.hide();
      this.button4.hide();
      player.name = "Eevee";
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      gameState = 1;
    });
    this.button2.mousePressed(()=>{

      // this.input.hide();
       this.button1.hide();
       this.button2.hide();
       this.button3.hide();
       this.button4.hide();
       this.title.hide();
       this.greeting.hide();
       player.name = "Jolteon";
       playerCount+=1;
       player.index = playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("Hello " + player.name)
       this.greeting.position(displayWidth/2 - 70, displayHeight/4);
       //gameState = 1;
     });
     this.button3.mousePressed(()=>{

      // this.input.hide();
       this.button1.hide();
       this.button2.hide();
       this.button3.hide();
       this.button4.hide();
       this.title.hide();
       this.greeting.hide();
       player.name = "Umbreon";
       playerCount+=1;
       player.index = playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("Hello " + player.name)
       this.greeting.position(displayWidth/2 - 70, displayHeight/4);
       //gameState = 1;
     });
     this.button4.mousePressed(()=>{

      // this.input.hide();
       this.button1.hide();
       this.button2.hide();
       this.button3.hide();
       this.button4.hide();
       this.title.hide();
       this.greeting.hide();
       player.name = "Vaporeon";
       playerCount+=1;
       player.index = playerCount;
       player.update();
       player.updateCount(playerCount);
       this.greeting.html("Hello " + player.name)
       this.greeting.position(displayWidth/2 - 70, displayHeight/4);
       //gameState = 1;
     });
    this.reset.mousePressed(()=>{
   player.updateCount(0);
   game.update(0);
  Player.updateCarsAtEnd(0); 
  });
    
  }
}
