import * as Phaser from "phaser";
import { Preload } from "./src/scenes/preload";
import { Game } from "./src/scenes/game";


// Phaser3のゲームクラスの記述（Phaser.Gameクラスを継承したMainクラスの記述）
class Main extends Phaser.Game {
  constructor() {

    // Phaser.Gameのコンフィグ
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800, // ゲーム横幅
      height: 600, // ゲーム縦幅
    };
    super(config); // Phaser.Gameクラスにコンフィグを渡す

    // シーンにキーを割り振って登録
    this.scene.add("preload", Preload, false);
    this.scene.add("game", Game, false);

    // シーンをスタート
    this.scene.start("preload");
  }
}

// ブラウザでDOM描写終了直後に呼び出される
window.onload = () => {

  // Mainクラスのインスタンスを生成（ここで初めてゲームが生成）
  const GameApp: Phaser.Game = new Main();
};