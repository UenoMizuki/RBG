import * as Phaser from "phaser";
import { SpriteObject } from "./spriteObject";

export class Bullet extends SpriteObject{
    public counter:integer=0;
    constructor(scene?:Phaser.Scene,src?:string){
        super(scene,src);
        this.counter=0;
    }
    superUpdate(rew?:boolean){
        super.update(rew);
    }
    
}