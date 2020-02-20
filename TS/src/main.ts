import * as Phaser from "phaser";
import { Title } from "./test/title";
import { Game } from "./test/game";
import { Home } from "./home";
import { KeyManager } from "./keyManager";
export class Main extends Phaser.Game {
    constructor() {
  
      // Phaser.Gameのコンフィグ
      const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        width: 800, // ゲーム横幅
        height: 600, // ゲーム縦幅
      };
      super(config); // Phaser.Gameクラスにコンフィグを渡す
  
      // シーンにキーを割り振って登録
      this.scene.add("title", Title, false);
      this.scene.add("game", Game, false);
      this.scene.add("home",Home,false);
  
      // シーンをスタート
      //this.scene.start("title");
      KeyManager.init();
      this.scene.start("home");
    }
}
  
  // ブラウザでDOM描写終了直後に呼び出される
window.onload = () => {
  
    // Mainクラスのインスタンスを生成（ここで初めてゲームが生成）
    const GameApp: Phaser.Game = new Main();
};