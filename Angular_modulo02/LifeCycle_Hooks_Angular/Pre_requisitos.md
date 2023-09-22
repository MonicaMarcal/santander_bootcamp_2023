## INSTALAÇÕES:

- Node & NPM (nodejs.org) - versão atual LTS e veja a compatibilidade do node e angular, para fazer as instalações:</br>
https://angular.io/guide/versions

```bash
PARA LINUX: 

sudo apt-get install wget
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v18.10.0/install.sh | bash
nvm install 18.10.0

node -v
nvm -v
npm -v
```

- Visual Studio code https://code.visualstudio.com/ + extenções:
  - Angular Language Service
  - Auto Close Tag
  - Auto Rename Tag
  - Tema (*opcional)
  - Icones (*opcional)
  - editorConfig, Prettier, eslint(*opcional)

- Para usar Angular: https://angular.io/guide/setup-local
```bash
npm install -g @angular/cli
```

## EM CASO DE ERRO

1. Desinstale a ferramenta
Get-ExecutionPolicy -List

```bash
npm uninstall -g @angular/cli
```

```bash
npm cache clean --force
npm cache verify
```

```bash
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Limpeza
https://bobbyhadz.com/blog/ng-cannot-be-loaded-running-scripts-disabled