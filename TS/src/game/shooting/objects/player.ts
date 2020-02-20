import * as Phaser from "phaser";
import { SpriteObject } from "./spriteObject";
import { Bullet } from "./bullet";
import { Scene } from "../scene/scene";
import { RootObject } from "./rootObject";

export class Player extends SpriteObject{
    counter:integer=0;
    speed:integer=5;
    shiftSpeed:integer=3;
    scene:Scene;
    constructor(scene?:Scene,src?:string,posx?:integer,posy?:integer){
        super(scene,src);
        this.scene=scene;
        this.sprite.setSize(32,32);
        if(posx!=null&&posy!=null)
            this.sprite.setPosition(posx,posy);
    }
    setScene(scene:Scene){
        this.scene=scene;
    }
    setSpeed(speed:integer){
        this.speed=speed;
    }
    movePlayer(dirx:integer,diry:integer,isShiftPressed?:boolean){
        if(isShiftPressed==null||!isShiftPressed)
            if(dirx==1&&diry==1){
                this.move(Math.SQRT1_2*this.speed*dirx,Math.SQRT1_2*this.speed*diry);
            }else{
                this.move(this.speed*dirx,this.speed*diry);
            }
        else{
            if(dirx==1&&diry==1){
                this.move(Math.SQRT1_2*this.shiftSpeed*dirx,Math.SQRT1_2*this.shiftSpeed*diry);
            }else{
                this.move(this.shiftSpeed*dirx,this.shiftSpeed*diry);
            }
        }
    }
    update(rew?:boolean){
        super.update(rew);
        if(this.scene!=null&&this.counter%3==-1){
            let b=new Bullet(this.scene,"bullet1");
            b.setPosition(this.sprite.x+10,this.sprite.y);
            b.setSize(8,8);
            b.setUpdateMethod((rew?:boolean)=>{
                
                b.superUpdate(rew);
                if(b.counter==-1){
                    b.remove();
                }
                b.move(0,b.rewind*-6);
                b.counter+=b.rewind;
            });
            this.scene.addObject(b);
            let c=new Bullet(this.scene,"bullet1");
            c.setPosition(this.sprite.x-10,this.sprite.y);
            c.setSize(8,8);
            c.setUpdateMethod((rew?:boolean)=>{
                
                c.superUpdate(rew);
                if(c.counter==-1){
                    c.remove();
                }
                c.move(0,c.rewind*-6);
                c.counter+=c.rewind;
            });
            this.scene.addObject(c);
        }
        this.counter++;
    }
}
