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

// Fetch Api
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

    // fetch(
    //     `${api.lyricsApi}${results.data[i].artist.name}/${results.data[i].title_short}`
    //   )
    //   .then((response) => response.json())
    //   .then(Songlyrics=> console.log(Songlyrics))

    resultCard.innerHTML += `<div class="single-result row align-items-center my-3 p-3">
                                    <div class="col-md-9">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src=${
                                                  results.data[i].album.cover
                                                } alt="not-found">
                                            </div>
                                            <div class="col-md-8">
                                                <h3 class="lyrics-name">${
                                                  results.data[i].title
                                                }</h3>
                                                <p class="author lead">Album by <span>${
                                                  results.data[i].artist.name
                                                }</span></p>
                                            </div>
                                        </div>
                                    </div>
              
                                    <div class="col-md-3 text-md-right text-center">
                                       <button onclick=""
                                       class="btn btn-success"> Get Lyrics </button>
                                   </div>

                                  </div> `;
  }
}