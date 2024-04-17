document.querySelector('#searchButton').addEventListener('click', function() {
    const departure = document.querySelector("#departure").value;
    const arrival = document.querySelector('#arrival').value;
    const date = document.querySelector('#day').value;

    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
    .then((res)=>res.json())
    .then((data)=>{ 
        if(data.result === false){
            document.querySelector('#tripList').innerHTML = ``;
            document.querySelector('#tripList').innerHTML += `
        <img src="./images/notfound.png" alt="Une image de loupe" id="trainImg">
        <hr>
        <p>No trip found</p>`
    } else {
        document.querySelector('#tripList').innerHTML = ``;
        const myTrip = data.Trip;
        const pattern = /(\d{2}:\d{2})/;
        for(let trip of myTrip){
            document.querySelector('#tripList').innerHTML += `
            <div id="listTrip">
            <p>${trip.departure} > ${trip.arrival} ${trip.date.match(pattern)[0]} ${trip.price} € </p>
            <button class="bookButton">Book</button>
            </div>`
        }
    }
    })

})

