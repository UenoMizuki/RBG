import * as Phaser from "phaser";
import { SpriteObject } from "./spriteObject";

export class Bullet extends SpriteObject{
    //当たり判定の矛先
    static PLAYER:integer=1;
    static ENEMY:integer=2;

    public counter:integer=0;
    public tag:integer=Bullet.PLAYER;
    constructor(scene?:Phaser.Scene,src?:string){
        super(scene,src);
        this.counter=0;
    }
    superUpdate(rew?:boolean){
        super.update(rew);
    }
    
}