let url = "https://api.jikan.moe/v4/recommendations/anime";
const tbody = document.querySelector("#datos");
// fetch(url).then((response) => {
//     response.json().then((recomendaciones) => {
//         for (let i = 0; i < recomendaciones.data.length; i++) {
//             let fila = tbody.insertRow();
//             let recomm = recomendaciones.data[i]
//             for(let j=0;j<recomendaciones.data[i].length; j++){
//                 let recomen = recomendaciones.data[i][j]
//                 fila.insertCell().innerHTML = recomm['mal_id'];
//                 fila.insertCell().innerHTML = recomen['entry']["title"];
//                 fila.insertCell().innerHTML = recomm['content'];
//                 fila.insertCell().innerHTML = recomm['user'];
//             }
//         }

//     })
//     console.log(response)

// },
//     (error) => {
//         console.log(error)
//     });

const show_recom = async () => {
  try {
    const response = await fetch(url);
    const recomendaciones = await response.json();
    for (let i = 0; i < recomendaciones.data.length; i++) {
        let fila = tbody.insertRow();
        recom = recomendaciones.data[i];
        fila.insertCell().innerHTML = recom["mal_id"];
        for (let j = 0; j < recomendaciones.data[i].length; j++ ){
            recomen = recomendaciones.data[i][j];
            fila.insertCell().innerHTML = recomen["entry"]["title"]
        }
        
        
    } 
    console.log(recomendaciones);

  } catch (error) {
    console.log(error);
  }
};
show_recom();
