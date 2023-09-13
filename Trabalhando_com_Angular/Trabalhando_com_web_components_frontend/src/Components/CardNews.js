class Cardnews extends HTMLElement{
    constructor() {
        super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML= "<h1>hello word</h1>" //cria sombra(shadow dom)
    shadow.appendChild(this.build()); //adiciona todos os elementos HTML
    shadow.appendChild(this.styles());//adiciona todos os estilos css
    }
    
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot
    }

    styles(){}
}
customElements.define('card-news', Cardnews)