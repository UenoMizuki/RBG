import * as Phaser from "phaser";

export class Title extends Phaser.Scene {
  private startText?: Phaser.GameObjects.Text // 追加

  private bk_color: string = '0x22ff88' // 追加
  private fontStyle: Phaser.Types.GameObjects.Text.TextStyle = { color: 'red', fontSize: '70px' } //追加


  init() {
    console.log("Preloading");
  }

  preload () {
    console.log("Load things necessary for Game scene");
    this.load.crossOrigin = 'anonymous';
    
    // this.scene.start('game') // 削除
  }
  // ここから追加
  create() {
    this.cameras.main.setBackgroundColor(this.bk_color)

    this.startText = this.add.text(400, 300, 'START', this.fontStyle)

    this.startText.setOrigin(0.5)
    
    this.startText.setInteractive()
    this.startText.on('pointerdown', () => {
      this.scene.start('game')
    })
  }
  // ここまで
}