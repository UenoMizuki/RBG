import * as Phaser from "phaser";
import { ImageObject } from "../../objects/imageObject";
import { RootObject } from "../../objects/rootObject";
import { KeyManager } from "../../../../keyManager";
import { Player } from "../../objects/player";
import { Scene } from "../scene";
import { Bullet } from "../../objects/bullet";
import { BulletFunction } from "../../function/bulletFunction";

export class FirstScene extends Scene{
    counter:integer=0;
    //private player :ImageObject;
    private player:Player;

    private cursors?: Phaser.Types.Input.Keyboard.CursorKeys // 追加

    objects:RootObject[];

    init(){
        this.cursors = this.input.keyboard.createCursorKeys();
        this.objects=new Array();
    }
    preload(){

        //this.load.spritesheet('hero', 'hero.png', { frameWidth: 32, frameHeight: 32 });
    }
    create(){
        this.player=new Player(this,"player1",<integer>(this.game.config.width)/2,<integer>(this.game.config.height)*3/4);
        this.player.setSize(64,64);
        this.objects.push(this.player);
        this.cameras.main.setBackgroundColor("0x000033");
    }
    update(){
        KeyManager.update();
        console.log(this.objects.length);
        let rew:boolean=false;
        if (KeyManager.isPressed(KeyManager.key["x"])){
            rew=true;
        }
        let objects2:RootObject[]=new Array();
        for(let i=0;i<this.objects.length;i++){
            this.objects[i].update(rew);
            
            if(this.objects[i].removable){
                this.objects[i].remove();
            }else{
                objects2.push(this.objects[i]);
            }
        }
        this.objects=objects2;
        if(this.counter%200==0){
            for(let i=0;i<60;i++){
                
                let b=new Bullet(this,"bullet1");
                b.setPosition(<integer>(this.game.config.width)/2,50);
                b.setSize(8,8);
                b.setUpdateMethod((rew?:boolean)=>{

                    b.removable=BulletFunction.outFrameUpdate(<integer>(this.game.config.width),<integer>(this.game.config.height),b.getX(),b.getY(),8,8);
                    b.superUpdate(rew);
                    if(b.counter==-1){
                        //b.remove();
                    }/*
                    if(b.removable){
                        console.log(b.getX()+","+b.getY());
                    }*/
                    if(i%4==0){
                        b.move(b.rewind*6*Math.cos(i*6*Math.PI/180),b.rewind*6*Math.sin(i*6*Math.PI/180));
                    }else if(i%4==1){
                        b.move(b.rewind*6*Math.cos(i*6*Math.PI/180),6*Math.sin(i*6*Math.PI/180));
                    }else if(i%4==2){
                        b.move(6*Math.cos(i*6*Math.PI/180),b.rewind*6*Math.sin(i*6*Math.PI/180));
                    }else{
                        b.move(6*Math.cos(i*6*Math.PI/180),6*Math.sin(i*6*Math.PI/180));
                    }
                    b.counter+=b.rewind;
                });
                b.setActive(true);
                this.addObject(b);
                
            }
        }
        if(this.counter%200==0){
            for(let i=0;i<40;i++){
                
                let b=new Bullet(this,"bullet1");
                b.setPosition(<integer>(this.game.config.width)/2,50);
                b.setSize(16,16);
                b.setUpdateMethod((rew?:boolean)=>{

                    b.removable=BulletFunction.outFrameUpdate(<integer>(this.game.config.width),<integer>(this.game.config.height),b.getX(),b.getY(),16,16);
                    b.superUpdate(rew);
                    if(b.counter==-1){
                        //b.remove();
                    }
                    if(i%2==0){
                        b.move(b.rewind*8*Math.cos(i*4.5*Math.PI/180),8*Math.sin(i*4.5*Math.PI/180));
                    }else{
                        b.move(8*Math.cos(i*4.5*Math.PI/180),8*b.rewind*Math.sin(i*4.5*Math.PI/180));
                    }
                    b.counter+=b.rewind;
                });
                b.setActive(true);
                this.addObject(b);
                
            }
        }
        /*
        if(KeyManager.isPress(32)){
            console.log("space is pressed.");
        }if(KeyManager.isPress(KeyManager.key["9"])){
            console.log("9 is pressed.");
        }*/
        this.player.movePlayer(((this.cursors.left.isDown)?-1:0)+((this.cursors.right.isDown)?1:0),((this.cursors.up.isDown)?-1:0)+((this.cursors.down.isDown)?1:0),KeyManager.isPressed(KeyManager.key["shift"]));
        this.counter++;
        if(this.counter%10==0)
        console.log("size:"+this.objects.length);
    }
    addObject(obj:RootObject){
        this.objects.push(obj);
    }


}
