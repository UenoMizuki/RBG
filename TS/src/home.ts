import * as Phaser from "phaser";
import {IntaractiveObject} from "./objects/intaractiveObject";
import { RootObject } from "./game/shooting/objects/rootObject";
import { ImageObject } from "./game/shooting/objects/imageObject";
import { Title } from "./game/shooting/scene/title";

export class Home extends Phaser.Scene {
  private twitterImage?:Phaser.GameObjects.Image
  private pixivImage?:Phaser.GameObjects.Image
  private rbgImage?:Phaser.GameObjects.Image;
  private reBirthImage?:Phaser.GameObjects.Image;

  //private startText?: Phaser.GameObjects.Text // 追加
  //private linkTexts?:Phaser.GameObjects.Text[];

  private bk_color: string = '0xffffff' // 追加
  private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: 'red', fontSize: '70px' } //追加
  private links:string[]=["https://www.pixiv.net/users/18133505","https://twitter.com/t1tSigma1023"];


  private test:ImageObject;

  init() {
    if(this.scene.get("rebirth_title")==null)
      this.scene.add("rebirth_title",Title,false);
    console.log("Preloading");/*
    this.linkTexts= new Array(0);
    this.linkTexts.push(this.add.text(400, 200, 'Pixiv', this.fontStyle));
    this.linkTexts.push(this.add.text(400, 100, 'Twitter', this.fontStyle));*/
  }

  preload () {
    
    console.log("Load things necessary for Game scene");
    this.load.crossOrigin = 'anonymous';
    this.load.baseURL='../static/img/';
    this.load.image('twitter', 'Twitter_Logo_Blue.png')
    this.load.image('pixiv','logo_icon_r.png');
    this.load.image('rbg','RBG.png');
    this.load.image('rebirth','ReBirth.png');
    // this.scene.start('game') // 削除
  }
  // ここから追加
  create() {
    
    this.cameras.main.setBackgroundColor(this.bk_color)
    //twitterIcon
    this.twitterImage=IntaractiveObject.makeIntaractiveImageWithURL(400,100,160,160,"twitter","https://twitter.com/t1tSigma1023",this);
    //PixivIcon
    this.pixivImage=IntaractiveObject.makeIntaractiveImageWithURL(400,200,100,100,"pixiv","https://www.pixiv.net/users/18133505",this);
    
    this.rbgImage=IntaractiveObject.makeIntaractiveImageWithScene(400,300,100,100,"rbg","game",this);

    this.reBirthImage=IntaractiveObject.makeIntaractiveImageWithScene(400,400,100,100,"rebirth","rebirth_title",this);
/*
    this.test=new ImageObject(this,"pixiv");

    this.test.setUpdateMethod(()=>{
      console.log("this is test");
    });

    /*
    this.startText=IntaractiveObject.makeIntaractiveTextWithScene(400,300,this.fontStyle,"Game","game",this);
    this.startText.setOrigin(0.5);
    /*this.startText = this.add.text(400, 300, 'Game', this.fontStyle)

    this.startText.setOrigin(0.5)

    this.startText.setInteractive()
    this.startText.on('pointerdown', () => {
      this.scene.start('game')
    })
    this.startText.on('pointerover',()=>{
      this.startText.setColor("green");
    });
    this.startText.on('pointerout',()=>{
        this.startText.setColor("red");
    });
    /*
    for(let i=0;i<this.linkTexts.length;i++){
        this.linkTexts[i].setOrigin(0.5)
    
        this.linkTexts[i].setInteractive()
        this.linkTexts[i].on('pointerdown', () => {
            //document.location.href = "https://www.pixiv.net/users/18133505";
            window.open(this.links[i]);
        })
        this.linkTexts[i].on('pointerover',()=>{
            this.linkTexts[i].setColor("green");
        });
        this.linkTexts[i].on('pointerout',()=>{
            this.linkTexts[i].setColor("red");
        });
    }*/


  }
  update() {
    //this.test.update();
    //this.twitterImage.setDisplaySize(this.twitterImage.displayWidth+1,this.twitterImage.displayHeight+1);
  }
}