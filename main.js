// Get Api
const api = {
  songApi: "https://api.lyrics.ovh/suggest/",
  lyricsApi: "https://api.lyrics.ovh/v1/",
};

//Search Button
const searchbox = document
  .getElementById("searchBtn")
  .addEventListener("click", function () {
    const searchValue = document.getElementById("searchValue").value;
    getResult(searchValue);
  });

// Fetch Api for songlist
function getResult(songName) {
  fetch(`${api.songApi}${songName}`)
    .then((results) => results.json())
    .then(DisplayResult);
}

// Display Results
function DisplayResult(results) {
  const resultCard = document.getElementById("resultCard");
  resultCard.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    resultCard.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src=${results.data[i].album.cover} alt="not-found">
                                            </div>
                                            <div class="col-md-8">
                                                <h3 class="lyrics-name">${results.data[i].title}</h3>
                                                <p class="author lead">Album by <span>${results.data[i].artist.name}</span></p>
                                            </div>
                                        </div>
                                    </div>
              
                                    <div class="col-md-3 text-md-right text-center">
                                       <button onclick="allLyrics('${results.data[i].artist.name}', '${results.data[i].title}')" class="btn btn-success"> GetLyrics
                                       </button>
                                   </div>

                                  </div> `;
  }
}

// Fetch Api for All lyrics
function allLyrics(name, title) {
  fetch(`${api.lyricsApi}${name}/${title}`)
    .then((response) => response.json())
    .then(SingleSonglyrics);
}

// Dynamic single Lyrics
function SingleSonglyrics(response) {
  const resultCard = document.getElementById("resultCard");
  resultCard.innerHTML = "";
  resultCard.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                <div class="row">
                                            <div class="col-md-12">
                                                <pre style="color: yellow">${response.lyrics ? response.lyrics :'Lyrics Not Found'}</pre>
                                            </div>
                                      </div>
                            </div>
                         `;
}
