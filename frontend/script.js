document.querySelector('#searchButton').addEventListener('click', function() {
    const departure = document.querySelector("#departure").value;
    const arrival = document.querySelector('#arrival').value;
    const date = document.querySelector('#day').value;

    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
})