import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("FFT");
    }

    async getHtml() {
        return `
            <h1>Transformada Rápida de Fourier</h1>
            Wikipedia : <a href="https://pt.wikipedia.org/wiki/Transformada_r%C3%A1pida_de_Fourier">Transformada Rápida de Fourier.</a>
            <br>
            <label>FFT BUFFSIZE</label>
            <input type="number" value="64" min="64" max="16384" step="2" id="SamplingCountButton"></input>
            <label>BAR SIZE</label>
            <input type="number" value="2" min="1" id="SamplingCountButtonWidthBar"></input>
            <div class="audio-visualizer">
                <input type="file" id="thefile" accept="audio/*" />
                <br>
                <canvas id="canvas"></canvas>
                <audio id="audio" controls></audio>
            </div>
        `;
    }
}