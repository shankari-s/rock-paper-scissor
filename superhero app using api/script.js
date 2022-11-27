console.log("helloworld")
const base_url = "https://superheroapi.com/api.php/1358455661381446"

const heroButton = document.getElementById('heroButton')
const heroImageDiv = document.getElementById('heroImage')
const searchButton =document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')
  
const getSuperHero =(id) => {


  fetch( `${base_url}/${id}`)
  .then(response  => response.json())
  .then(json => {
    
    console.log(json)
    const superhero = json
    showHeroInfo(superhero)    
    // const intelligence = `<p>Intelligence: ${json.powerstats.intelligence}<p/>`
    // const strength = `<p>Strength: ${json.powerstats.strength}<p/>`
   } )
}
 const getSuperHeroByName = (name) =>{
    fetch(`${base_url}/search/${name}`)
    .then(response => response.json())
    .then(json =>{
      
        const hero = json.results[0]
        console.log(hero)
        showHeroInfo(hero)

    } )
 }
 
 const showHeroInfo =(character) =>{
  const name= `<h3>${character.name}<h3/>`
   const img =`<img src=${character.image.url} width=100 height= 100/>`
  const stats = Object.keys(character.powerstats).map(stat =>{
    return `<p>${stat.toUpperCase()}:${character.powerstats[stat]}</p>`
  }).join('')
  
  heroImageDiv.innerHTML =`${name}${img}${stats}` 

 }
 
function getRandomhero(){
    
    return Math.floor(Math.random() * 731) +1
}

 heroButton.onclick =() => getSuperHero(getRandomhero())
 searchButton.onclick =() => getSuperHeroByName(searchInput.value) 
  
 