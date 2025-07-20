// src/main.ts
import Phaser from 'phaser'
// 🟦 Importa a Scene modularizada
import { MainScene, resizeGame } from './scenes/MainScene'


// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONFIGURAÇÃO PRINCIPAL DO JOGO (RESPONSIVO)
// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const BASE_WIDTH = 540
const BASE_HEIGHT = 960

// 🟪━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONFIGURANDO O PHASER GAME
// 🟪━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
  scene: MainScene
}

// 🟨━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EVENTOS DE RESPONSIVIDADE GLOBAL
// 🟨━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

window.addEventListener('resize', resizeGame)
window.addEventListener('orientationchange', resizeGame)
window.addEventListener('load', resizeGame)
setTimeout(resizeGame, 100) // Garantia extra após carregamento

// 🟩━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INICIALIZA O JOGO
// 🟩━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

new Phaser.Game(config)
