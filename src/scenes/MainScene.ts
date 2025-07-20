// src/scenes/MainScene.ts
import Phaser from 'phaser'

// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCENE PRINCIPAL DO JOGO (MainScene)
// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const GAME_VERSION = '0.1.0'
const BASE_WIDTH = 540
const BASE_HEIGHT = 960

export class MainScene extends Phaser.Scene {
  // Tipos para player e controles
  private player!: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys

  constructor() {
    super('MainScene')
  }

  // 🎨 Pré-carregamento de assets (futuro)
  preload() {
    // (Futuramente: carregar assets aqui)
  }

  // 🚀 Criação dos elementos da cena
  create() {
    // Cria o player (retângulo azul) centralizado, próximo ao fundo
    const p = this.add.rectangle(BASE_WIDTH / 2, BASE_HEIGHT - 150, 40, 40, 0x3498db)
    this.physics.add.existing(p)
    this.player = p as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }
    this.player.body.setCollideWorldBounds(true)

    // 🏷️ Mostra versão do game no canto inferior direito
    this.add.text(BASE_WIDTH - 10, BASE_HEIGHT - 10, 'v' + GAME_VERSION, {
      font: '16px Arial',
      color: '#fff'
    }).setOrigin(1, 1)

    // 🎮 Configura controles do teclado (setas)
    this.cursors = this.input.keyboard?.createCursorKeys()

    // 📱 Redimensiona o canvas ao abrir a cena
    resizeGame()
  }

  // 🔄 Atualização contínua da cena
  update() {
    if (!this.cursors) return

    // Zera velocidade antes de checar teclas
    this.player.body.setVelocity(0)

    if (this.cursors.left.isDown) this.player.body.setVelocityX(-200)
    if (this.cursors.right.isDown) this.player.body.setVelocityX(200)
    if (this.cursors.up.isDown) this.player.body.setVelocityY(-200)
    if (this.cursors.down.isDown) this.player.body.setVelocityY(200)
  }
}

// 🖥️━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FUNÇÃO DE REDIMENSIONAMENTO RESPONSIVO
// 🖥️━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export function resizeGame() {
  const canvas = document.querySelector('canvas')
  if (!canvas) return
  const windowRatio = window.innerWidth / window.innerHeight
  const gameRatio = BASE_WIDTH / BASE_HEIGHT
  let width, height
  if (windowRatio < gameRatio) {
    width = window.innerWidth
    height = width / gameRatio
  } else {
    height = window.innerHeight
    width = height * gameRatio
  }
  canvas.style.width = width + 'px'
  canvas.style.height = height + 'px'
  canvas.style.position = 'absolute'
  canvas.style.left = `calc(50% - ${width / 2}px)`
  canvas.style.top = `calc(50% - ${height / 2}px)`
}
