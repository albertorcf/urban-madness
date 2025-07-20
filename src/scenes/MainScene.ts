// src/scenes/MainScene.ts
import Phaser from 'phaser'
import { GAME_VERSION, BASE_WIDTH, BASE_HEIGHT } from '../config/config'

// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SCENE PRINCIPAL DO JOGO (MainScene)
// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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

/**
 * =====================================
 * FUNÇÃO DE REDIMENSIONAMENTO RESPONSIVO
 * =====================================
 * Faz o canvas ocupar a maior área possível da tela do usuário, SEM distorcer.
 * Centraliza o canvas, inclusive em browsers mobile bugados.
 */
export function resizeGame(): void {
  const canvas = document.querySelector('canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  // 🧮 Calcula proporção da janela e do jogo
  const windowRatio = window.innerWidth / window.innerHeight;
  const gameRatio = BASE_WIDTH / BASE_HEIGHT;
  let width: number, height: number;

  if (windowRatio < gameRatio) {
    // Janela mais "alta" (ou mais estreita) que o jogo
    width = window.innerWidth;
    height = width / gameRatio;
  } else {
    // Janela mais "larga" que o jogo
    height = window.innerHeight;
    width = height * gameRatio;
  }

  // 📏 Aplica o tamanho visualmente, mantendo as coordenadas base no jogo
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';

  // 🎯 Centralização extra: ajusta posição para centrar mesmo em browsers mobile bugados
  canvas.style.position = 'absolute';
  canvas.style.left = `calc(50% - ${width / 2}px)`;
  canvas.style.top = `calc(50% - ${height / 2}px)`;
}
