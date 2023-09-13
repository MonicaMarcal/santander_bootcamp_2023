class Cardnews extends HTMLElement{
    constructor() {
        super();

    const shadow = this.attachShadow({ mode: "open" });//cria sombra(shadow dom)
    shadow.appendChild(this.build()); //adiciona todos os elementos HTML
    shadow.appendChild(this.styles());//adiciona todos os estilos css
    }
    
    build(){ //construindo os HTML
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");//pegando a propriedade do elemento <span>

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");//pegando a propriedade do elemento <a>
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content"); //pegando a propriedade do elemento <p>

        //filhos de card__left
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";//pegando a propriedade img, se não tiver uma foto coloque a default
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage); //filha de card__right

        //filhos do componente root(card)
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot
    }

    styles(){//construindo a estilização
    const style = document.createElement("style");

    style.textContent = `
        .card {
          width: 80%;
          box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        
        .card__left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
        }
        
        .card__left > span {
          font-weight: 400;
        }
        
        .card__left > a {
          margin-top: 15px;
          font-size: 25px;
          color: black;
          text-decoration: none;
          font-weight: bold;
        }
        
        .card__left > p {
          color: rgb(70, 70, 70);
        }
    `;

    return style;

    }
}
customElements.define('card-news', Cardnews)