window.onload = init;

function init() {
    // on va chercher le lecteur audio
    let player = document.querySelector("#player");
    let playlist = document.querySelector("#playlist");
    
    player.setPlaylist(playlist);
}