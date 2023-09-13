class Cardnews extends HTMLElement{
    constructor() {
        super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML= "<h1>hello word</h1>" //cria sombra(shadow dom)
    shadow.appendChild(this.build()); //adiciona todos os elementos HTML
    shadow.appendChild(this.styles());//adiciona todos os estilos css
    }
    
    build(){ //construindo os HTML
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        //filhos de card__left
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        cardRight.appendChild(newsImage); //filha de card__right

        //filhos do componente root(card)
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot
    }

    styles(){//construindo a estilização

    }
}
customElements.define('card-news', Cardnews)