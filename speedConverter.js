document.querySelector('#but').addEventListener('click',but)


function but(){
   const alfa = document.querySelector('#mph').value

   let bravo= alfa * 1.60934

   document.querySelector('#placeToSee').innerText = bravo
   

}

document.querySelector('#echo').addEventListener('click', run)

function run(){
    const charlie = document.querySelector('#kph').value

    let delta = charlie / 1.60934

    document.querySelector('#placeToSee').innerText = delta
}