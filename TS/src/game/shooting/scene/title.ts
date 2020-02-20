import * as Phaser from "phaser";
import { ImageObject } from "../objects/imageObject";
import { FirstScene } from "./game/firstScene";
import { KeyManager } from "../../../keyManager";

export class Title extends Phaser.Scene {

  private bk_color: string = '0x22ff88' // 追加
  private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: 'red', fontSize: '70px' } //追加

  private player:ImageObject;
  count:integer=0;

  //後で消す
  //private gameTrigger:Phaser.GameObjects.Text;

  init() {
    console.log("Preloading");
    KeyManager.init();
  }

  preload () {
    console.log("Load things necessary for Game scene");
    this.load.crossOrigin = 'anonymous';
    
    if(this.scene.get("rebirth_first")==null)
      this.scene.add("rebirth_first",FirstScene,false);
    this.load.baseURL='../static/img/';
    this.load.image('player1','rebirth/player1.png');
    this.load.image("bullet1","rebirth/bullet1.png");
    
  }
  // ここから追加
  create() {
    console.log("create");
    this.player=new ImageObject(this,"player1");
    this.player.setPosition(100,100);
    this.player.setSize(64,64);
    this.player.setUpdateMethod(()=>{
        this.player.move(1,0);
    });
    //console.log("width:"+this.game.config.width);
    /*this.gameTrigger=this.add.text(400,300,"　",( { color: 'white', fontSize: '800px' }));
    this.gameTrigger.setOrigin(0.5);
    this.gameTrigger.setInteractive();
    this.gameTrigger.on('pointerdown',()=>{
      this.scene.start("rebirth_first");
    });*/

    this.cameras.main.setBackgroundColor(this.bk_color)

  }
  update(){
      KeyManager.update();
      this.player.update();
      if(KeyManager.mouseDown()&&this.count++>=10){
        this.scene.start("rebirth_first");
      }
  }
  // ここまで
}