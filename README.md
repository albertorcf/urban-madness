# urban-madness
A game about urban madness, chaos and routine.

- 📝 [Roadmap](#-roadmap)
- 📝 [ToDo List](#-todo-list)
- 🗂️ [Estrutura de pastas e arquivos do projeto](#️-estrutura-de-pastas-e-arquivos-do-projeto)
- ⚠️ [Diretrizes para desenvolvimento - Workflow de trabalho](#️-diretrizes-para-desenvolvimento---workflow-de-trabalho)
- Notas
  - 🖼️ [Workflow de Assets: SVG → PNG](#️-workflow-de-assets-svg--png)



# 📝 Roadmap

2025-07-17 21:34

1. ✅ **Hello Phaser!**  
   - Projeto Vite + TypeScript + Phaser criado  
   - Tela básica rodando  
   - Player azul controlado pelas setas  
   - Responsivo  
   - Versão do game exibida no canto

2. ✅ **Organizar estrutura de pastas**  
   - Criar pastas:  
     - `/src/scenes`  
     - `/src/assets`  
     - `/src/utils`  
     - `/src/components` (opcional/futuro)

3. ✅ **Configurar uma Scene básica**  
   - Separar lógica da cena em `src/scenes/`  
   - Player azul movendo  
   - Controles funcionando  
   - Versão do game na tela  
   - Responsividade mantida  
   - Tipagem Typescript sem erros
   - Arquivo de configurações globais criado em `src/config/config`.ts

4. ✅ **Responsividade e controles mobile**  
   - Ajustar o viewport conforme a tela do usuário, mantendo a proporção  
   - Garantir botões móveis (mobile first)  
   - Manter funcionalidade no desktop

5. [ ] **Adicionar grupo de obstáculos (dois tipos)**  
   - Obstáculos descendo  
   - Colisão faz o player ficar vermelho

6. [ ] **Organizar assets (sprites PNG/SVG)**  
   - Preparar workflow para usar imagens reais nos obstáculos

7. [ ] **Modularizar lógica**  
   - Extrair funções/objetos para arquivos próprios  
   - Facilitar manutenção  
   - Preparar para futuras entidades (player/obstacle/bonus/etc.)


8. [ ] **ToDo List**  
   - Manter `README.md` ou `TODO.md` atualizado com pendências e ideias  
   - Facilitar controle do projeto e incrementos futuros


# 📝 ToDo List

- Customização dos controles mobile
  - Permitir que o usuário escolha a posição/layout dos botões de controle na tela (ex: D-pad, dois polegares, etc.)
  - Salvar preferências do usuário para controles mobile
  - Interface intuitiva para arrastar/posicionar botões
  - Opção de resetar para layout padrão
  - Melhorar centralização vertical dos ícones Unicode nos botões mobile (alguns símbolos podem parecer "deslocados" dependendo do navegador/fonte)



# 🗂️ Estrutura de pastas e arquivos do projeto

```sh
clear && date && tree -a -L 3 -I 'node_modules' -I '.git'

dom 20 jul 2025 19:36:26 -03
.
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── config
│   │   └── config.ts
│   ├── counter.ts
│   ├── main.ts
│   ├── scenes
│   │   └── MainScene.ts
│   ├── style.css
│   ├── typescript.svg
│   └── vite-env.d.ts
└── tsconfig.json

4 directories, 15 files

```


# ⚠️ Diretrizes para desenvolvimento - Workflow de trabalho

## Instruções para ChatBot de IA - Copilot, ChatGPT, Gemini, etc.

- Manter os comentários existentes e acrescente novos comentários onde achar relevante. Separe os blocos de código que implementem funcionalidades diferentes com comentários bem descritivos no início de cada um. Pode usar emojis a vontade para destacar comentários e emojis de separadores para separar blocos.


# Notas

---
## 🖼️ Workflow de Assets: SVG → PNG

Para facilitar a criação, variação e manutenção dos sprites do jogo, adotamos o seguinte workflow para assets gráficos:

- **Crie os sprites e imagens em formato SVG** e salve-os em `src/assets/`. O SVG é ideal para edição, variações e geração de spritesheets.
- **Não versionamos arquivos binários** (PNG, JPG, etc.) no repositório. O `.gitignore` já está configurado para ignorar esses formatos em `src/assets/`.
- **Conversão automática:** Use o script `scripts/svg-to-png.js` para converter todos os SVGs em PNGs compatíveis com Phaser. Basta rodar:
  ```sh
  node scripts/svg-to-png.js
  ```
  Os PNGs gerados ficam prontos para uso no game, mas não são versionados.
- **Variações e spritesheets:** Como o SVG é editável, é fácil criar novas versões, animações ou spritesheets. Basta editar o SVG e rodar o script novamente.
- **Vantagens:**
  - Evita poluir o repositório com binários pesados
  - Facilita colaboração e controle de versões
  - Permite automação e geração de múltiplos formatos

> 💡 Recomenda-se manter os SVGs organizados e nomeados de forma clara para facilitar a automação e futuras expansões do projeto.

---

