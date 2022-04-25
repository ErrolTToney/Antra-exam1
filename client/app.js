function getAlbumList(e) {
    const artist = document.querySelector("#searchBox").value;
    document.querySelector("#searchBox").value = "";
    fetch(
    `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`
  )
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".albumBox").innerHTML = `
      <div class="albumName">${data.results["0"].artistName}</div>
        <img src="${data.results["0"].artworkUrl100}" alt= "${data.artistName}"/>
        <ul>
        <li class="songs">${data.results["0"].collectionName}</li>
        </ul>
        `;
    })
    .catch((error) => {
        console.log("Album not found", error);
    });
    e.preventDefault();
}

// getAlbumList();
document.querySelector(".searchBox").addEventListener("click", getAlbumList);
