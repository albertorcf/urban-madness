# urban-madness
A game about urban madness, chaos and routine.

- 📝 [Roadmap](#-roadmap)
- 🗂️ [Estrutura de pastas e arquivos do projeto](#️-estrutura-de-pastas-e-arquivos-do-projeto)
- [Diretrizes para desenvolvimento - Workflow de trabalho](#diretrizes-para-desenvolvimento---workflow-de-trabalho)


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

4. [ ] **Responsividade e controles mobile**  
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


# Diretrizes para desenvolvimento - Workflow de trabalho

## Instruções para ChatBot de IA - Copilot, ChatGPT, Gemini, etc.

- Manter os comentários existentes e acrescente novos comentários onde achar relevante. Separe os blocos de código que implementem funcionalidades diferentes com comentários bem descritivos no início de cada um. Pode usar emojis a vontade para destacar comentários e emojis de separadores para separar blocos.