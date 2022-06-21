let url = "https://api.jikan.moe/v4/genres/anime";
const tbody = document.querySelector("#datos");
const show_genre = async () => {
  try {
    const response = await fetch(url);
    const genres = await response.json();
    for (let i = 0; i < genres.data.length; i++) {
      let fila = tbody.insertRow();
      let genero = genres.data[i];
      fila.insertCell().innerHTML = genero["mal_id"];
      fila.insertCell().innerHTML = genero["name"];
      fila.insertCell().innerHTML = genero["url"];
      fila.insertCell().innerHTML = genero["count"];
    }
  } catch (error) {
    console.log(error);
  }
};
show_genre();
