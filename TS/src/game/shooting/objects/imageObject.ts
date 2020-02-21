import * as Phaser from "phaser";
import { RootObject } from "./rootObject";

export class ImageObject extends RootObject{
    protected image:Phaser.GameObjects.Image;
    constructor(scene?:Phaser.Scene,src?:string){
        super();
        if(scene!=null&&src!=null){
            this.image=scene.add.image(0,0,src);
            this.image.setOrigin(0.5);
        }
    }
    public setImageObject(image:Phaser.GameObjects.Image){
        this.image=image;
    }
    public getImageObject():Phaser.GameObjects.Image{
        return this.image;
    }
    setPosition(x:integer,y:integer){
        super.setPosition(x,y);
        this.image.setPosition(x,y);
    }
    setSize(w:integer,h:integer){
        super.setSize(w,h);
        this.image.setDisplaySize(w,h);
    }
    move(x:integer,y:integer){
        this.image.setPosition(this.image.x+x,this.image.y+y);
    }
    update(rew?:boolean){
        super.update(rew);
    }
    remove(){
        this.image.destroy();
    }

    setActive(isActive:boolean){
        this.image.active=isActive;
    }
}