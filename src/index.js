
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener('DOMContentLoaded', ()=>{
    loadDogImages()
    loadBreed()
});
    
function loadDogImages(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(image =>{
        image.message.forEach(function(im){
            const dog = document.createElement('img')
            dog.src = im;
            document.querySelector('#dog-image-container').appendChild(dog)
        })
    })
}


function loadBreed(){
    
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds =>{
        const dog_breed = Object.keys(breeds.message)
        dog_breed.forEach(function(breed){
            addBreed(breed)
            filterBreed(breed)

        })
    })
}
function filterBreed(breed) {
    const ul = document.querySelector('#dog-breeds')
    const element = document.createElement('li')

    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
       event.preventDefault()
       let child = ul.lastElementChild;
       while(child){
            ul.removeChild(child);
            child = ul.lastElementChild;

       }
       if(breed.slice(0,1)===event.target.value){
            addBreed(breed)
       }


    });
}
function addBreed(breed){
    const ul = document.querySelector('#dog-breeds')
    const li = document.createElement('li')
    li.innerText = breed;
    ul.appendChild(li);
    li.style.cursor = 'pointer'
    li.addEventListener('click', ()=>{
        li.style.color  = 'green'
    })
}