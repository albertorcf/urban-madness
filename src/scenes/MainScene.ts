// src/scenes/MainScene.ts
import Phaser from 'phaser'
import { GAME_VERSION, BASE_WIDTH, BASE_HEIGHT } from '../config/config'
import { PlayerControls } from '../utils/controls'
import { resizeGame } from '../utils/responsive'

// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCENE PRINCIPAL DO JOGO (MainScene)
// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export class MainScene extends Phaser.Scene {
  private obstacles!: Phaser.Physics.Arcade.Group
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
    // Instancia controles e registra callbacks de pause/resume
    this.controls = new PlayerControls(this)
    this.controls.onPauseResume(
      () => this.scene.pause(),
      () => this.scene.resume()
    )
    // 🟥━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // CRIA GRUPO DE OBSTÁCULOS
    // 🟥━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    this.obstacles = this.physics.add.group()

    // Função para criar obstáculos aleatórios
    const spawnObstacle = () => {
      const width = Phaser.Math.Between(40, 120)
      const height = Phaser.Math.Between(30, 60)
      const x = Phaser.Math.Between(width / 2, BASE_WIDTH - width / 2)
      const y = -height
      const color = 0xe74c3c // vermelho
      const rect = this.add.rectangle(x, y, width, height, color)
      this.physics.add.existing(rect)
      this.obstacles.add(rect)
      const body = rect.body as Phaser.Physics.Arcade.Body | null
      if (body) {
        body.setVelocityY(Phaser.Math.Between(180, 320))
      }
    }

    // Cria o player como sprite centralizado, próximo ao fundo
    const p = this.physics.add.sprite(BASE_WIDTH / 2, BASE_HEIGHT - 150, 'player')
    p.setOrigin(0.5, 0.5)
    p.setScale(1.8) // 🔎 Aumenta o tamanho do player para melhor visualização
    p.setCollideWorldBounds(true)
    this.player = p

    // Colisão entre player e obstáculos
    this.physics.add.overlap(this.player, this.obstacles, () => {
      // Muda o background do player para vermelho
      this.player.setTint(0xe74c3c)
      // Remove o tint após 300ms
      this.time.delayedCall(300, () => {
        this.player.clearTint()
      })
    })

    // Cria obstáculos periodicamente
    this.time.addEvent({
      delay: 900,
      callback: spawnObstacle,
      callbackScope: this,
      loop: true
    })

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
    // Remove obstáculos que saíram da tela
    this.obstacles.getChildren().forEach((obstacle: any) => {
      if (obstacle.y > BASE_HEIGHT + 60) {
        obstacle.destroy()
      }
    })
    // Atualiza controles (teclado e mobile)
    this.controls.update(this.player)
  }
}

// (Responsividade agora está em src/utils/responsive.ts)
