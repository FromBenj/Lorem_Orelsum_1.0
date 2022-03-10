export function getSentences(song) {
    let cleanSong = song
                    .replace(/<h2>[^]*<\/h2>(.*?)/g,"")
                    .replace(/<\/div>/g,"")
                    .replace(/<\s*div[^>]*>(.*?)\s*>/g,"")
                    .replace(/<br>/g,".")

    return cleanSong.split(".")
}

export function getFinalText(startSentence, endSentence, song) {
    let text = song.slice(startSentence,endSentence + 1)
    return text.join(". ").trim()
}
