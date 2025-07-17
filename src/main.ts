// src/main.ts
import Phaser from 'phaser'

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONFIGURAÇÃO PRINCIPAL DO JOGO (RESPONSIVO)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const GAME_VERSION = '0.1.0'
const BASE_WIDTH = 540
const BASE_HEIGHT = 960

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// VARIÁVEIS GLOBAIS TIPADAS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

let player: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }
let cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined = undefined;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONFIGURANDO O PHASER GAME
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: BASE_WIDTH,
  height: BASE_HEIGHT,
  backgroundColor: '#222',
  parent: 'game', // <div id="game"></div> no index.html
  physics: {
    default: 'arcade',
    arcade: {
      debug: false // Ative para ver hitboxes
    }
  },
  scene: {
    preload,
    create,
    update
  }
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CICLO DE VIDA DO JOGO (SCENE)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function preload(this: Phaser.Scene) {
  // (Futuramente: assets aqui)
}

function create(this: Phaser.Scene) {
  // Cria o player (rect azul) centralizado, próximo ao fundo da tela
  const p = this.add.rectangle(BASE_WIDTH / 2, BASE_HEIGHT - 150, 40, 40, 0x3498db)
  this.physics.add.existing(p)
  player = p as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }
  player.body.setCollideWorldBounds(true)

  // Mostra versão do jogo no canto inferior direito
  this.add.text(BASE_WIDTH - 10, BASE_HEIGHT - 10, "v" + GAME_VERSION, {
    font: "16px Arial",
    color: "#fff"
  }).setOrigin(1, 1)

  // Teclado (setas)
  cursors = this.input.keyboard?.createCursorKeys()

  // Redimensiona o canvas ao abrir a cena
  resizeGame()
}

function update(this: Phaser.Scene) {
  if (!cursors) return; // Garante que só executa quando já inicializou

  // Zera velocidade antes de checar teclas
  player.body.setVelocity(0)

  if (cursors.left.isDown) player.body.setVelocityX(-200)
  if (cursors.right.isDown) player.body.setVelocityX(200)
  if (cursors.up.isDown) player.body.setVelocityY(-200)
  if (cursors.down.isDown) player.body.setVelocityY(200)
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FUNÇÃO DE REDIMENSIONAMENTO RESPONSIVO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

function resizeGame() {
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

// Eventos para responsividade
window.addEventListener('resize', resizeGame)
window.addEventListener('orientationchange', resizeGame)
window.addEventListener('load', resizeGame)
setTimeout(resizeGame, 100) // Garantia extra após carregamento

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INICIALIZA O JOGO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

new Phaser.Game(config)
