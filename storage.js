// localStorage.removeItem('name','Asadbek');
// localStorage.clear();
// localStorage.setItem('name', 'Chris');
// localStorage.getItem('name');

let age = localStorage.getItem('age');
let esimi = localStorage.getItem('esimi');
let familia = localStorage.getItem('familia');

// alert('familia + /n' + esimi + '\n + jasy');

// localStorage.setItem('name', 'Asadbek');
// localStorage.setItem('age', '20');
// localStorage.setItem('surname', 'Palenshiev');

// let div = document.createElement('div');
// div.innerHTML = `
// <h1>${familia}</h1>;
// <h1>${esimi}</h1>
// <p>${age}</p>`


// alert(age + '\n' + esimi + '\n' + familia);

// let ainymaly = document.querySelector('.container');
// ainymaly.appendChild(div)


// let ainymaly = document.querySelector('.ainymaly');
// ainymaly.appendChild()

// document.getElementById('korsetu').addEventListener('click', function(){
    
// });
// document.getElementById('sahtau').addEventListener('click', function(){ 
// localStorage.sahtau()
// });
// document.getElementById('clear').addEventListener('click', function(){
// localStorage.clear();
// });

let sahtau = document.getElementById('sahtau');

sahtau.addEventListener('click', function(event){
    event.preventDefault();
    let input1 = document.getElementById('name').value;
    let input2 = document.getElementById('age').value;
    console.log(input1, input2);    
    if (input1 && input2) {
        localStorage.setItem('esimi', input1);
        localStorage.setItem('age', input2);
    }else{
        alert('Please fill in the fields');
    }
});

let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    localStorage.clear();
});

let korsetu = document.getElementById('korsetu');
let listDiv = document.querySelector('.list');

korsetu.addEventListener('click', function(){
    let name = localStorage.getItem('esimi');
    let age = localStorage.getItem('age');

    let div = document.createElement('div');
    div.innerHTML = `<h1>${name}</h1>
    <p>${age}</p>`

    
    listDiv.appendChild(div)
});
