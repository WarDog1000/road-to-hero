const obj = {
  form : document.getElementById("song-search"),
  loader: document.querySelector(".loader"),
  error: document.querySelector(".error"),
  main: document.querySelector("main"),
  artist: document.querySelector(".artist"),
  song: document.querySelector(".song"),
  log: arg => console.log(arg)
}

obj.form.addEventListener('submit', async e => {
  e.preventDefault()
  try {
    obj.loader.style.display = "block"

    let artist = e.target.artist.value.toLowerCase(),
        song = e.target.song.value.toLowerCase(),
        artistTemplate = "",
        songTemplate = "",
        artistAPI = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`,
        songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,
        artistFetch = fetch(artistAPI),
        songFetch = fetch(songAPI),
        [artistRes, songRes] = await Promise.all([artistFetch, songFetch]),
        artistData = await artistRes.json(),
        songData = await songRes.json()

        // obj.log(artistRes, songRes)
        obj.log(artistData, songData)

        if(artistData === null) {
          artistTemplate = `<h2>No existe el interprete<mark>${artist}</mark></h2>`
        } else {
          let artist = artistData.artists[0]
          artistTemplate = `
          <h2>${artist.strArtist}</h2>
          <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
          <p>${artist.intBornYear} - ${artist.intDieYear || "Presente"}</p>
          <p>${artist.strCountry}</p>
          <p>${artist.strGenre} - ${artist.strStyle}</p>
          <a href="https://${artist.strWebsite}" target="_blank">Sitio Web</a>
          <p>${artist.strBiographyEN}</P>`
        }

        if(songData.error) {
          songTemplate = `<h2>No existe la cancion <mark>${song}</mark></h2>`
        } else {
          songTemplate = `
          <h2>${song.toUpperCase()}</h2>
          <blockquote>${songData.lyrics}</blockquote>`
        }

        obj.loader.style.display = 'none'
        obj.artist.innerHTML = artistTemplate
        obj.song.innerHTML = songTemplate

  } catch (err) {
    obj.log(err)
    let message = err.statusText || "Ocurrio un errror!"
    obj.error.innerHTML = `<p>Error ${err.status}: ${message}</p>`
    obj.loader.style.display = "none"
  }
})