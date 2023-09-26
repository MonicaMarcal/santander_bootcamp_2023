### VERSÃO: Angular CLI: 16.2.3

### INSTRUTOR DO MODULO: 

#### COMANDOS BÁSICOS:

Verifica a versão do angular
```
ng -version
```

Cria um novo projeto, ([nome do projeto])
```
ng new [name]
```

Adicionar bibliotecas externas ao projeto.
```
ng add <collection>
``` 

Compilar e criar servidor, toda vez que modificar o codigo ele vai buildar e executar novamente, ([nome do projeto]).
```
ng serve [project]
```

Executar testes ([nome do projeto])
```
ng tests [project]
```

Procura uma palavra especifica na documentação(<adicione a palavra aqui>).
```
ng doc <keyword>
```
Esquema para gerar estruturas de código
```
ng generate
ng generate --help
```

#### EVENTOS DO CICLO DE VIDA: https://angular.io/guide/lifecycle-hooks

```
Life Cycle Hooks:
1. ngOnInit()
2. ngOnChanges()
3. ngDoCheck()

Eventos de Check:
3.1 ngAfterContentInit()
3.2 ngAfterContentChecked()
3.3 ngAfterViewInit()
3.4 ngAfterViewChecked()

Evento ao destruir:
4. ngOnDestroy()

```
