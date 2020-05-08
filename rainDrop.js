class RainDrop{
    constructor(x,y,width,height){
        this.body=createSprite(x,y,width,height);
        this.width=width
        this.height=height
        this.polp=randomNumber(1,8);
        switch(this.polp){
            case 1: this.image=loadImage("1Up.jpg")
                  break;
            case 2: this.image=loadImage("BeeMush.jpg")
                  break;
            case 3: this.image=loadImage("BooMush.jpg")
                   break;
            case 4: this.image=loadImage("lifeMush.jpg")
                   break;
            case 5: this.image=loadImage("megaMush.jpg")
                   break;
            case 6: this.image=loadImage("miniMush.jpg")
                   break;
            case 7: this.image=loadImage("mushroom.jpg")
                   break;
            case 8:  this.image=loadImage("SpringMush.jpg")
                   break;
            default:break;
        }
    }
    display(){
        push()
        var pos=this.body.position
        image(this.image,pos.x,pos.y,this.width,this.height)   
        drawSprites();
        pop()
    }
}