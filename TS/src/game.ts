import * as Phaser from "phaser";

export class Game extends Phaser.Scene {
  init() {
    console.log('Initializing.') // クラスのメンバ変数の初期化
  }

  preload() {
    console.log('Load assets.') // アセットのロード
  }

  create() {
    console.log('Draw objects to canvas.') // ゲームオブジェクトの描写
  }

  update() {
    console.log('Call at every frames.') // ゲームの各フレーム更新毎に呼びだされる
  }
}