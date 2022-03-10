import {songs} from "./songs.js";
import {getFinalText, getSentences} from "./functions.js";

const max = 40;

window.addEventListener("DOMContentLoaded", () => {
    let song = songs[Math.floor(Math.random()*songs.length)];
    let rapClass;
    let randomStart;
    for (let i = 1; i <= max; i++) {
        rapClass = document.getElementsByClassName('orel-' + i)
        if (rapClass.length > 0) {
            for (let j = 0; j < rapClass.length; j++) {
                randomStart = Math.floor(Math.random() * (getSentences(song).length - i));
                rapClass[j].innerHTML = getFinalText(randomStart,randomStart + i, getSentences(song))
            }
        }
    }

    const signature = document.createElement('h6')
    signature.innerHTML = "by Orelsan"
    signature.style.width = "100 vw"
    signature.style.textAlign = "right"
    signature.style.margin = "2rem 1rem"
    signature.style.fontStyle = "italic"
    signature.style.opacity = "0.3"
    document.body.appendChild(signature)
});
