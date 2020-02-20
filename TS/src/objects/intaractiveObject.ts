import * as Phaser from "phaser";
import { Main } from "src/main";
export class IntaractiveObject{
    
    static makeIntaractiveImage(x:integer,y:integer,w:integer,h:integer,name:string,scene:Phaser.Scene):Phaser.GameObjects.Image{
        let img=scene.add.image(x,y,name);
        img.setDisplaySize(w,h);
        img.setSize(w,h);
        img.setOrigin(0.5);
        return img;
    }
    static makeIntaractiveImageWithURL(x:integer,y:integer,w:integer,h:integer,name:string,url:string,scene:Phaser.Scene):Phaser.GameObjects.Image{
        let img=scene.add.image(x,y,name);
        img.setDisplaySize(w,h);
        img.setOrigin(0.5);
        img.setInteractive();
        img.on('pointerdown', () => {
            window.open(url);
        })
        return img;
    }
    static makeIntaractiveImageWithScene(x:integer,y:integer,w:integer,h:integer,name:string,scenename:string,scene:Phaser.Scene):Phaser.GameObjects.Image{
        let img=scene.add.image(x,y,name);
        img.setDisplaySize(w,h);
        img.setOrigin(0.5);
        img.setInteractive();
        img.on('pointerdown', () => {
            scene.scene.start(scenename);
        })
        return img;
    }

    //ここから動作未確認
    static makeIntaractiveText(x:integer,y:integer,w:integer,h:integer,cont:string,scene:Phaser.Scene):Phaser.GameObjects.Text{
        let text=scene.add.text(x,y,cont);
        text.setDisplaySize(w,h);
        text.setSize(w,h);
        text.setOrigin(0.5);
        return text;
    }
    static makeIntaractiveTextWithURL(x:integer,y:integer,w:integer,h:integer,cont:string,url:string,scene:Phaser.Scene):Phaser.GameObjects.Text{
        let text=scene.add.text(x,y,cont);
        text.setDisplaySize(w,h);
        text.setOrigin(0.5);
        text.setInteractive();
        text.on('pointerdown', () => {
            window.open(url);
        })
        return text;
    }
    static makeIntaractiveTextWithScene(x:integer,y:integer,font:Phaser.Types.GameObjects.Text.TextStyle,cont:string,scenename:string,scene:Phaser.Scene):Phaser.GameObjects.Text{
        let text=scene.add.text(x,y,cont,font);
        text.setOrigin(0.5);
        text.setInteractive();
        text.on('pointerdown', () => {
            scene.scene.start(scenename);
        })
        return text;
    }
}
