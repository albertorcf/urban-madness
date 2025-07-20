# urban-madness
A game about urban madness, chaos and routine.

- [Estrutura de pastas e arquivos do projeto](#estrutura-de-pastas-e-arquivos-do-projeto)

# Roadmap

# 📝 Roadmap – Urban Madness (2025-07-17 21:34)

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

3. **Configurar uma Scene básica**  
   - Separar lógica da cena em `src/scenes/`  
   - Player azul movendo  
   - Controles funcionando  
   - Versão do game na tela  
   - Responsividade mantida  
   - Tipagem Typescript sem erros

4. [ ] **Adicionar grupo de obstáculos (rect simples, dois tipos)**  
   - Obstáculos descendo  
   - Colisão faz o player ficar vermelho

5. [ ] **Organizar assets (sprites PNG/SVG)**  
   - Preparar workflow para usar imagens reais nos obstáculos

6. [ ] **Modularizar lógica**  
   - Extrair funções/objetos para arquivos próprios  
   - Facilitar manutenção  
   - Preparar para futuras entidades (player/obstacle/bonus/etc.)

7. [ ] **Responsividade e controles mobile**  
   - Garantir botões móveis (mobile first)  
   - Manter funcionalidade no desktop

8. [ ] **ToDo List**  
   - Manter `README.md` ou `TODO.md` atualizado com pendências e ideias  
   - Facilitar controle do projeto e incrementos futuros



# Estrutura de pastas e arquivos do projeto

```sh
clear && date && tree -a -L 3 -I 'node_modules' -I '.git'

sex 18 jul 2025 19:58:07 -03
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
│   ├── assets
│   ├── counter.ts
│   ├── main.ts
│   ├── scenes
│   ├── style.css
│   ├── typescript.svg
│   ├── utils
│   └── vite-env.d.ts
└── tsconfig.json

6 directories, 13 files

```
