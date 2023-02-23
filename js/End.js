class End {
    constructor(){
        this.logoImage= "https://img.freepik.com/vector-gratis/fondo-game-over-distorision_23-2148087864.jpg?size=338&ext=jpg"
        this.logo = createImg(this.logoImage);
        this.place = createElement ('h1')
 
    }
    display(){
        this.place.position(displayWidth/2 - 50, height/2 - 100);
        this.place.html("Place" + player.rank);
        this.logo.position(0,10);
    }
}
