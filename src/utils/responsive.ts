// src/utils/responsive.ts
// 🖥️━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FUNÇÃO DE REDIMENSIONAMENTO RESPONSIVO
// 🖥️━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import { BASE_WIDTH, BASE_HEIGHT } from '../config/config'

/**
 * ======================================
 * FUNÇÃO DE REDIMENSIONAMENTO RESPONSIVO
 * ======================================
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
  canvas.style.position = 'fixed';
  canvas.style.left = '50%';
  canvas.style.top = '50%';
  canvas.style.transform = `translate(-50%, -50%)`;
}
