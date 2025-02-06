async function fetchData(){
    try{
        let response = await fetch('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/films')
        if(!response.ok){
            throw new Error('Akparat alu mumkin emes');
        }

        let data = await response.json();

        localStorage.setItem(info, JSON.stringify(data));

        displayFilms()

    }catch(err){
        console.log(err);
    }

displayFilms()

}

function displayFilms() {
    let saqtalganFilms =  JSON.parse(localStorage)

    if(!saqtalganFilms){
        fetchData();
    }

    console.log(saqtalganFilms);

    saqtalganFilms.forEach(film => {

        let div = document.createElement('div');

        

        div.innerHTML = `
        <img src="${film.image}"</img>
        <h2>${film.name}</h2>
        <h3>${film.Genre}</h3>
        <button>Oshir</button>`;

        document.querySelector.appendChild(div);
        
        
})

}