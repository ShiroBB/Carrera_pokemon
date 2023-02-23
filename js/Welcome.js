class Welcome{
    constructor(){
        this.logoImage= "https://cdn.vox-cdn.com/thumbor/e4KRzS--UsuixA2G8TOCwJ-O024=/1400x1050/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6839749/pokemon.0.png"
        this.logo = createImg(this.logoImage);
        this.playButton = createButton("Play");
        this.title2 = createElement ('h2')
        this.story = createElement ('h3')
        this.story2 = createElement ('h3')
    }
    hideElements(){
        this.playButton.hide();       
        this.logo.hide();
        this.title2.hide();
        this.story.hide();
      }
      onPress(){
          this.playButton.mousePressed(()=>{
              this.hideElements();
              form = new Form();
              form.display();
          })
      }
      setPosition(){
       this.title2.html("Carreras Pikachu");
        this.story.html("En un lugar sin sentido hay 4 pokemones que logran escapar de ahí y encuentran una calle con 4 carriles los cuales se ve un final cada vez que uno gana se repite una y otra vez hasta que uno complete las 9 restantes será el que salvara de estar en la interface de un mundo sin sentido al que normalmente conocen ");
        this.title2.position(displayWidth/2 - 50, 0);
        this.story.position(displayWidth/4 -100,50);
        this.playButton.position(displayWidth/2 + 150, displayHeight/2);
        this.playButton.class("playButton");
        this.logo.position(0,10);
      }
      display(){
        this.setPosition();
        this.onPress();
      }
}