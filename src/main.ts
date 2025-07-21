// src/main.ts
import Phaser from 'phaser'
// 🟦 Importa a Scene modularizada

import { BASE_WIDTH, BASE_HEIGHT } from './config/config'
import { MainScene } from './scenes/MainScene'
import { resizeGame } from './utils/responsive'


// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONFIGURAÇÃO PRINCIPAL DO JOGO (RESPONSIVO)
// 🟦━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


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

// 📱 Garante que o canvas do jogo sempre ocupe a maior área possível da tela,
// mantendo a proporção correta e centralização, inclusive em mobile.
//
// - resize: sempre que a janela for redimensionada
// - orientationchange: quando o dispositivo gira (mobile/tablet)
// - load: ao carregar a página
// - setTimeout: chamada extra após 100ms para corrigir bugs de renderização em alguns browsers

window.addEventListener('resize', resizeGame)
window.addEventListener('orientationchange', resizeGame)
window.addEventListener('load', resizeGame)
setTimeout(resizeGame, 100) // Extra: corrige possíveis atrasos de layout

// 🟩━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INICIALIZA O JOGO
// 🟩━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

new Phaser.Game(config)
