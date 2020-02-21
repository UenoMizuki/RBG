import * as Phaser from "phaser";
import { RootObject } from "./rootObject";

export class SpriteObject extends RootObject{
    protected sprite:Phaser.GameObjects.Sprite;
    constructor(scene?:Phaser.Scene,src?:string){
        super();
        if(scene!=null&&src!=null){
            this.sprite=scene.add.sprite(0,0,src,0);
        }
    }
    public setImageObject(sp:Phaser.GameObjects.Sprite){
        this.sprite=sp;
    }
    setPosition(x:integer,y:integer){
        super.setPosition(x,y);
        this.sprite.setPosition(x,y);
    }
    setSize(w:integer,h:integer){
        super.setSize(w,h);
        this.sprite.setDisplaySize(w,h);
    }
    move(x:integer,y:integer){
        this.sprite.x=this.sprite.x+x;
        this.sprite.y=this.sprite.y+y;
    }
    update(rew?:boolean){
        super.update(rew);
    }
    remove(){
        this.sprite.destroy();
    }
    getX():integer{
        return this.sprite.x;
    }
    getY():integer{
        return this.sprite.y;
    }
    setActive(isActive?:boolean){
        this.sprite.active=isActive;
    }

}