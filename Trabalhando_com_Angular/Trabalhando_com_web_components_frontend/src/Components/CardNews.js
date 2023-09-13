class Cardnews extends HTMLElement{
    constructor() {
        super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML= "<h1>hello word</h1>"
    }
    
    build(){}

    styles(){}
}
customElements.define('card-news', Cardnews)