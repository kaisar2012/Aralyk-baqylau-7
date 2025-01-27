async function fetchData() {
    let response = await fetch('https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7')
    try{
        let data = await response.json()
        return data.record
    }catch (error)
    {
        console.log(error);
        
    }
}
let container = document.querySelector('.container')
let h3 = document.createElement('h3')
h3.innerHTML = ''
<h3>${data.record.tasks.title}</h3>

container.appendChild(h3)
console.log(data.record.tasks.title);

Mathfloor(Math.random()*10)
// agay = 10ballk berenishi  
