// src/utils/controls.ts
// 🎮 Módulo para controles do player (teclado e mobile)
import Phaser from 'phaser'

export class PlayerControls {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  private leftBtn: HTMLButtonElement | null = null;
  private rightBtn: HTMLButtonElement | null = null;
  private upBtn: HTMLButtonElement | null = null;
  private downBtn: HTMLButtonElement | null = null;
  private leftPressed = false;
  private rightPressed = false;
  private upPressed = false;
  private downPressed = false;

  constructor(scene: Phaser.Scene) {
    // Teclado
    this.cursors = scene.input.keyboard?.createCursorKeys();
    // Botões mobile
    this.createMobileButtons();
  }

  /** Cria botões de controle para mobile */
  private createMobileButtons() {
    // Evita duplicar
    if (document.getElementById('btn-left') || document.getElementById('btn-right') || document.getElementById('btn-up') || document.getElementById('btn-down')) return;
    
    // ▲ Botão Cima (lado esquerdo, acima do botão esquerda)
    this.upBtn = document.createElement('button');
    this.upBtn.id = 'btn-up';
    this.upBtn.innerText = '▲';
    this.upBtn.style.position = 'fixed';
    this.upBtn.style.left = '10px';
    this.upBtn.style.top = '40%';
    this.upBtn.style.transform = 'translateY(-50%)';
    this.upBtn.style.zIndex = '10';
    this.upBtn.style.fontSize = '2.2rem';
    this.upBtn.style.backgroundColor = '#222';
    this.upBtn.style.opacity = '0.6';
    this.upBtn.style.border = 'none';
    this.upBtn.style.borderRadius = '50%';
    this.upBtn.style.width = '50px';
    this.upBtn.style.height = '50px';
    this.upBtn.style.touchAction = 'none';
    this.upBtn.style.userSelect = 'none';
    this.upBtn.style.webkitUserSelect = 'none';
    document.body.appendChild(this.upBtn);

    // ◀️ Botão Esquerda (mobile): mais próximo da margem e fundo semi-transparente, mais abaixo
    this.leftBtn = document.createElement('button');
    this.leftBtn.id = 'btn-left';
    this.leftBtn.innerText = '◀️';
    this.leftBtn.style.position = 'fixed';
    this.leftBtn.style.left = '10px';
    this.leftBtn.style.top = '60%';
    this.leftBtn.style.transform = 'translateY(-50%)';
    this.leftBtn.style.zIndex = '10';
    this.leftBtn.style.fontSize = '2.5rem';
    this.leftBtn.style.backgroundColor = '#222';
    this.leftBtn.style.opacity = '0.6';
    this.leftBtn.style.border = 'none';
    this.leftBtn.style.borderRadius = '50%';
    this.leftBtn.style.width = '60px';
    this.leftBtn.style.height = '60px';
    this.leftBtn.style.touchAction = 'none';
    this.leftBtn.style.userSelect = 'none';
    this.leftBtn.style.webkitUserSelect = 'none';
    document.body.appendChild(this.leftBtn);

    // ▼ Botão Baixo (lado direito, acima do botão direita)
    this.downBtn = document.createElement('button');
    this.downBtn.id = 'btn-down';
    this.downBtn.innerText = '▼';
    this.downBtn.style.position = 'fixed';
    this.downBtn.style.right = '10px';
    this.downBtn.style.top = '40%';
    this.downBtn.style.transform = 'translateY(-50%)';
    this.downBtn.style.zIndex = '10';
    this.downBtn.style.fontSize = '2.2rem';
    this.downBtn.style.backgroundColor = '#222';
    this.downBtn.style.opacity = '0.6';
    this.downBtn.style.border = 'none';
    this.downBtn.style.borderRadius = '50%';
    this.downBtn.style.width = '50px';
    this.downBtn.style.height = '50px';
    this.downBtn.style.touchAction = 'none';
    this.downBtn.style.userSelect = 'none';
    this.downBtn.style.webkitUserSelect = 'none';
    document.body.appendChild(this.downBtn);

    // ▶️ Botão Direita (mobile): mais próximo da margem e fundo semi-transparente, mais abaixo
    this.rightBtn = document.createElement('button');
    this.rightBtn.id = 'btn-right';
    this.rightBtn.innerText = '▶️';
    this.rightBtn.style.position = 'fixed';
    this.rightBtn.style.right = '10px';
    this.rightBtn.style.top = '60%';
    this.rightBtn.style.transform = 'translateY(-50%)';
    this.rightBtn.style.zIndex = '10';
    this.rightBtn.style.fontSize = '2.5rem';
    this.rightBtn.style.backgroundColor = '#222';
    this.rightBtn.style.opacity = '0.6';
    this.rightBtn.style.border = 'none';
    this.rightBtn.style.borderRadius = '50%';
    this.rightBtn.style.width = '60px';
    this.rightBtn.style.height = '60px';
    this.rightBtn.style.touchAction = 'none';
    this.rightBtn.style.userSelect = 'none';
    this.rightBtn.style.webkitUserSelect = 'none';
    document.body.appendChild(this.rightBtn);
    
    // Eventos touch/mouse
    this.leftBtn.addEventListener('pointerdown', () => { this.leftPressed = true; });
    this.leftBtn.addEventListener('pointerup', () => { this.leftPressed = false; });
    this.leftBtn.addEventListener('pointerleave', () => { this.leftPressed = false; });
    this.rightBtn.addEventListener('pointerdown', () => { this.rightPressed = true; });
    this.rightBtn.addEventListener('pointerup', () => { this.rightPressed = false; });
    this.rightBtn.addEventListener('pointerleave', () => { this.rightPressed = false; });
    this.upBtn.addEventListener('pointerdown', () => { this.upPressed = true; });
    this.upBtn.addEventListener('pointerup', () => { this.upPressed = false; });
    this.upBtn.addEventListener('pointerleave', () => { this.upPressed = false; });
    this.downBtn.addEventListener('pointerdown', () => { this.downPressed = true; });
    this.downBtn.addEventListener('pointerup', () => { this.downPressed = false; });
    this.downBtn.addEventListener('pointerleave', () => { this.downPressed = false; });
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
    if (this.upPressed) player.body.setVelocityY(-200);
    if (this.downPressed) player.body.setVelocityY(200);
  }

  /** Remove botões mobile (opcional, para cenas futuras) */
  destroy() {
    this.leftBtn?.remove();
    this.rightBtn?.remove();
    this.upBtn?.remove();
    this.downBtn?.remove();
  }
}
