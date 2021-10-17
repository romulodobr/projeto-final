import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Página Inicial");
    }

    async getHtml() {
        return `
            <h1>Bem vindo!</h1>
            <p>
                Aqui você irá encontrar alguns filmes para você poder baixar para assistir.
            </p>
            <p>
                <a href="/filmes" data-link>Ver conteúdo</a>.
            </p>
        `;
    }
}