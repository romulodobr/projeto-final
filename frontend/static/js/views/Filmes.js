import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Filmes");
    }

    async getHtml() {
        return `
            <h1>Filmes</h1>
            <div class="filmes-title">
                <p>Aqui estão os populares da semana!</p>
            </div>
            <br>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/venom-tempo-de-carnificina-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/kz7xJLowO4x0BpcB1IJb9uIXgrq.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/free-guy-assumindo-o-controle-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/jXlGeLOg2RKHmV9CinVaIB4ijKU.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/a-guerra-do-amanha-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/lWQ3hI78Az2RHfzDpEuvougqUz7.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/g-i-joe-origens-snake-eyes-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/6IxMW3939dOCjzenwzkWEjgICVq.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/venom-2018-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/qZK4LSj7crL6RNGUfD1LSJioA4u.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/narco-sub-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/h1f0vkdP48E8MybhglZsEWho7DR.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/jungle-cruise-a-maldicao-nos-confins-da-selva-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/9E76j2DcQv8LdbX1Wa9jpbDBfw1.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/o-esquadrao-suicida-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/wTS3dS2DJiMFFgqKDz5fxMTri.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/justica-em-familia-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/cygRJp2OQKsiGbJxKq5TbvzW9QR.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/bac-nord-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/r2NnRp4mi4G3e0x9zINQIcnGNd8.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/tempo-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/czVBkHRaZu8rOnCNTd0t7EHYj97.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/viuva-negra-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/rKq1Vlw0Bqe2EEvdmIkkkgPQAGf.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/pegue-a-bala-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/m3DUe1cpiBsLg0caIO2JDr7HK5Z.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/a-familia-addams-2-pe-na-estrada-2021-torrent-dublado-e-legendado/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/ujWOI68vGkfLOgEDmcrjIS6il7B.jpg"></a>
            </div>
            <div class="filmes-content">
                <a href="https://www.comandotorrents.ninja/loki-1a-temporada-completa-torrent-dublada-e-legendada/"><img class="grayscale" src="https://image.tmdb.org/t/p/w154/8uVqe9ThcuYVNdh4O0kuijIWMLL.jpg"></a>
            </div>
        `;
    }
}