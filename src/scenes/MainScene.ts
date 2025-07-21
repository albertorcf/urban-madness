// src/scenes/MainScene.ts
import Phaser from 'phaser'
import { GAME_VERSION, BASE_WIDTH, BASE_HEIGHT } from '../config/config'
import { PlayerControls } from '../utils/controls'
import { resizeGame } from '../utils/responsive'

// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCENE PRINCIPAL DO JOGO (MainScene)
// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export class MainScene extends Phaser.Scene {
  // Tipos para player e controles
  private player!: Phaser.Physics.Arcade.Sprite
  private controls!: PlayerControls

  constructor() {
    super('MainScene')
  }

  // 🎨 Pré-carregamento de assets
  preload() {
    // Carrega o sprite PNG do personagem
    this.load.image('player', 'src/assets/player/person.png')
  }

  // 🚀 Criação dos elementos da cena
  create() {
    // Cria o player como sprite centralizado, próximo ao fundo
    const p = this.physics.add.sprite(BASE_WIDTH / 2, BASE_HEIGHT - 150, 'player')
    p.setOrigin(0.5, 0.5)
    p.setScale(1.8) // 🔎 Aumenta o tamanho do player para melhor visualização
    p.setCollideWorldBounds(true)
    this.player = p

    // 🏷️ Mostra versão do game no canto inferior direito
    this.add.text(BASE_WIDTH - 10, BASE_HEIGHT - 10, 'v' + GAME_VERSION, {
      font: '16px Arial',
      color: '#fff'
    }).setOrigin(1, 1)


    // 🎮 Inicializa controles (teclado e mobile)
    this.controls = new PlayerControls(this)

    // 📱 Redimensiona o canvas ao abrir a cena
    resizeGame()
  }

  // 🔄 Atualização contínua da cena
  update() {
    // Atualiza controles (teclado e mobile)
    this.controls.update(this.player)
  }
}

// (Responsividade agora está em src/utils/responsive.ts)
