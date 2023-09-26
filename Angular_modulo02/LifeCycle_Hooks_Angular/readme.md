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
//Executa quando componente é montado e iniciado
1. ngOnInit()

//executa quando o valor de propriedade é alterada via input()
2. ngOnChanges()

//Executa quando propriedade do componente são verificados
3. ngDoCheck()

Eventos de Check:
//Executa quando Angular realiza qualquer projeção de conteudo em seus componentes
3.1 ngAfterContentInit()

//Executa sempre que conteudo do conteudo do componente é verificado pelo mecanismo de detecção de alteração do Angular
3.2 ngAfterContentChecked()

//Executa depois que um componente é totalmente inicializada(carregou tudo)
3.3 ngAfterViewInit()

//Executa quando a visualização de um componente é verificada pelo algoritmo de detecção de alterações do Angular
3.4 ngAfterViewChecked()

Evento ao destruir:
//Executa assim que o componente sai, é destruido.
4. ngOnDestroy()

```
