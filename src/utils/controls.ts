// src/utils/controls.ts
// 🎮 Módulo para controles do player (teclado e mobile)
import Phaser from 'phaser'

export class PlayerControls {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  private leftBtn: HTMLButtonElement | null = null;
  private rightBtn: HTMLButtonElement | null = null;
  private leftPressed = false;
  private rightPressed = false;

  constructor(scene: Phaser.Scene) {
    // Teclado
    this.cursors = scene.input.keyboard?.createCursorKeys();
    // Botões mobile
    this.createMobileButtons();
  }

  /** Cria botões de controle para mobile */
  private createMobileButtons() {
    // Evita duplicar
    if (document.getElementById('btn-left') || document.getElementById('btn-right')) return;
    
    // Botão Esquerda (mobile): mais próximo da margem e fundo semi-transparente
    this.leftBtn = document.createElement('button');
    this.leftBtn.id = 'btn-left';
    this.leftBtn.innerText = '◀️';
    this.leftBtn.style.position = 'fixed';
    this.leftBtn.style.left = '0'; // ⬅️ Agora rente à margem esquerda
    this.leftBtn.style.top = '50%';
    this.leftBtn.style.transform = 'translateY(-50%)';
    this.leftBtn.style.zIndex = '10';
    this.leftBtn.style.fontSize = '2.5rem';
    // Fundo preto semi-transparente para mobile
    this.leftBtn.style.backgroundColor = '#222'; // Cor base
    this.leftBtn.style.opacity = '0.6'; // Opacidade para semi-transparente
    this.leftBtn.style.border = 'none';
    this.leftBtn.style.borderRadius = '50%';
    this.leftBtn.style.width = '60px';
    this.leftBtn.style.height = '60px';
    this.leftBtn.style.touchAction = 'none';
    document.body.appendChild(this.leftBtn);

    // Botão Direita (mobile): mais próximo da margem e fundo semi-transparente
    this.rightBtn = document.createElement('button');
    this.rightBtn.id = 'btn-right';
    this.rightBtn.innerText = '▶️';
    this.rightBtn.style.position = 'fixed';
    this.rightBtn.style.right = '0'; // ⬅️ Agora rente à margem direita
    this.rightBtn.style.top = '50%';
    this.rightBtn.style.transform = 'translateY(-50%)';
    this.rightBtn.style.zIndex = '10';
    this.rightBtn.style.fontSize = '2.5rem';
    // Fundo preto semi-transparente para mobile
    this.rightBtn.style.backgroundColor = '#222'; // Cor base
    this.rightBtn.style.opacity = '0.6'; // Opacidade para semi-transparente
    this.rightBtn.style.border = 'none';
    this.rightBtn.style.borderRadius = '50%';
    this.rightBtn.style.width = '60px';
    this.rightBtn.style.height = '60px';
    this.rightBtn.style.touchAction = 'none';
    document.body.appendChild(this.rightBtn);
    
    // Eventos touch/mouse
    this.leftBtn.addEventListener('pointerdown', () => { this.leftPressed = true; });
    this.leftBtn.addEventListener('pointerup', () => { this.leftPressed = false; });
    this.leftBtn.addEventListener('pointerleave', () => { this.leftPressed = false; });
    this.rightBtn.addEventListener('pointerdown', () => { this.rightPressed = true; });
    this.rightBtn.addEventListener('pointerup', () => { this.rightPressed = false; });
    this.rightBtn.addEventListener('pointerleave', () => { this.rightPressed = false; });
  }

  /** Atualiza movimento do player */
  update(player: Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }) {
    player.body.setVelocity(0);
    // Teclado
    if (this.cursors?.left.isDown) player.body.setVelocityX(-200);
    if (this.cursors?.right.isDown) player.body.setVelocityX(200);
    if (this.cursors?.up.isDown) player.body.setVelocityY(-200);
    if (this.cursors?.down.isDown) player.body.setVelocityY(200);
    // Mobile
    if (this.leftPressed) player.body.setVelocityX(-200);
    if (this.rightPressed) player.body.setVelocityX(200);
  }

  /** Remove botões mobile (opcional, para cenas futuras) */
  destroy() {
    this.leftBtn?.remove();
    this.rightBtn?.remove();
  }
}
