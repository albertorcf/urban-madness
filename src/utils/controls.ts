// src/utils/controls.ts
// 🎮 Módulo para controles do player (teclado e mobile)
import Phaser from 'phaser'

export class PlayerControls {
  private stopBtn: HTMLButtonElement | null = null;
  private pauseCallback: (() => void) | null = null;
  private resumeCallback: (() => void) | null = null;
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
    this.createStopStartButton();
  }

  /** Cria botões de controle para mobile */
  private createMobileButtons() {
    // Evita duplicar
    if (document.getElementById('btn-left') || document.getElementById('btn-right') || document.getElementById('btn-up') || document.getElementById('btn-down')) return;
    
    // Design padrão para todos os botões
    const btnStyle = {
      position: 'fixed',
      zIndex: '10',
      fontSize: '2.2rem',
      backgroundColor: 'rgba(255,255,255,0.15)', // círculo mais claro e transparente
      border: 'none',
      borderRadius: '50%',
      width: '54px',
      height: '54px',
      touchAction: 'none',
      userSelect: 'none',
      boxShadow: '0 0 8px 2px rgba(255,255,255,0.10)',
      color: '#222',
      outline: 'none',
      transition: 'background 0.2s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
    };

    // ▲ Botão Cima (lado esquerdo, acima do botão esquerda)
    this.upBtn = document.createElement('button');
    this.upBtn.id = 'btn-up';
    this.upBtn.innerText = '▲';
    Object.assign(this.upBtn.style, btnStyle);
    this.upBtn.style.left = '10px';
    this.upBtn.style.top = '40%';
    document.body.appendChild(this.upBtn);

    // ◀️ Botão Esquerda (mobile): mais próximo da margem e fundo semi-transparente, mais acima
    this.leftBtn = document.createElement('button');
    this.leftBtn.id = 'btn-left';
    this.leftBtn.innerText = '◀';
    Object.assign(this.leftBtn.style, btnStyle);
    this.leftBtn.style.left = '10px';
    this.leftBtn.style.top = '54%'; // mais próximo do botão cima
    this.leftBtn.style.backgroundColor = btnStyle.backgroundColor;
    document.body.appendChild(this.leftBtn);

    // ▼ Botão Baixo (lado direito, acima do botão direita)
    this.downBtn = document.createElement('button');
    this.downBtn.id = 'btn-down';
    this.downBtn.innerText = '▼';
    Object.assign(this.downBtn.style, btnStyle);
    this.downBtn.style.right = '10px';
    this.downBtn.style.top = '40%';
    document.body.appendChild(this.downBtn);

    // ▶️ Botão Direita (mobile): mais próximo da margem e fundo semi-transparente, mais acima
    this.rightBtn = document.createElement('button');
    this.rightBtn.id = 'btn-right';
    this.rightBtn.innerText = '▶';
    Object.assign(this.rightBtn.style, btnStyle);
    this.rightBtn.style.right = '10px';
    this.rightBtn.style.top = '54%'; // mais próximo do botão baixo
    this.rightBtn.style.backgroundColor = btnStyle.backgroundColor;
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

  /** Atualiza movimento do player (Rectangle ou Sprite) */
  update(player: Phaser.Physics.Arcade.Sprite) {
    const body = player.body as Phaser.Physics.Arcade.Body | null;
    if (!body) return;
    body.setVelocity(0);
    // Teclado
    if (this.cursors?.left.isDown) body.setVelocityX(-200);
    if (this.cursors?.right.isDown) body.setVelocityX(200);
    if (this.cursors?.up.isDown) body.setVelocityY(-200);
    if (this.cursors?.down.isDown) body.setVelocityY(200);
    // Mobile
    if (this.leftPressed) body.setVelocityX(-200);
    if (this.rightPressed) body.setVelocityX(200);
    if (this.upPressed) body.setVelocityY(-200);
    if (this.downPressed) body.setVelocityY(200);
  }

  /** Remove botões mobile (opcional, para cenas futuras) */
  destroy() {
    this.leftBtn?.remove();
    this.rightBtn?.remove();
    this.upBtn?.remove();
    this.downBtn?.remove();
    this.stopBtn?.remove();
  }

  /** Cria botão STOP/START no topo/direita */
  /** Cria botão STOP/START no topo/direita */
  private createStopStartButton() {
    if (document.getElementById('btn-stop-start')) return;
    this.stopBtn = document.createElement('button');
    this.stopBtn.id = 'btn-stop-start';
    this.stopBtn.innerText = 'STOP';
    Object.assign(this.stopBtn.style, {
      position: 'fixed',
      top: '28px',  // ⚠️
      right: '12px',
      zIndex: '20',
      fontSize: '1.05rem',
      fontWeight: 'bold',
      backgroundColor: 'rgba(220, 53, 69, 0.18)', // vermelho suave transparente
      color: '#c82333',
      border: 'none',
      borderRadius: '12px',
      width: '70px',
      height: '32px',
      boxShadow: '0 0 8px 2px rgba(255,255,255,0.10)',
      outline: 'none',
      cursor: 'pointer',
      transition: 'background 0.2s',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0',
      letterSpacing: '1px',
    });
    document.body.appendChild(this.stopBtn);

    let isPaused = false;
    this.stopBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      if (isPaused) {
        this.stopBtn!.innerText = 'START';
        this.stopBtn!.style.backgroundColor = 'rgba(40, 167, 69, 0.18)'; // verde suave transparente
        this.stopBtn!.style.color = '#28a745';
        if (this.pauseCallback) this.pauseCallback();
      } else {
        this.stopBtn!.innerText = 'STOP';
        this.stopBtn!.style.backgroundColor = 'rgba(220, 53, 69, 0.18)'; // vermelho suave transparente
        this.stopBtn!.style.color = '#c82333';
        if (this.resumeCallback) this.resumeCallback();
      }
    });
  }

  /** Permite registrar callbacks para pause/resume */
  onPauseResume(pauseCb: () => void, resumeCb: () => void) {
    this.pauseCallback = pauseCb;
    this.resumeCallback = resumeCb;
  }
}
