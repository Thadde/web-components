export class MyPlaylist extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
        </style>
        <div id="playlistinterne">
           <h3>Playlist</h3>
            <ul>
                <li id="./assets/audio/CleanGuitarRiff.mp3">Morceau 1</li>
                <li id="morceau2.mp3">Morceau 2</li>
                <li id="morceau3.mp3">Morceau 3</li>
            </ul>
        </div>
        `;

        // on definit les ecouteurs de click sur les li
        this.definitEcouteurs();
    }

    definitEcouteurs() {
        // on recupere les li de la playlist
        let liste = this.shadowRoot.querySelectorAll("#playlist li");
        // on va mettre un ecouteur de click sur chaque li
        liste.forEach(li => {
            li.onclick = (evt) => {
                console.log("click sur " + evt.target.innerHTML);
                // on recupere dans l'id du li le chemin du fichier audio
                let chemin = evt.target.id;
                // on previent un lecteur audio qu'il doit jouer ce 
                // fichier
                this.dispatchEvent(
                    new CustomEvent("playsong", {
                        detail: chemin,
                        bubbles: true,
                        composed: true
                    })
                )
            }
        })
    }
}
customElements.define("my-playlist", MyPlaylist);