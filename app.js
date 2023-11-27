document.addEventListener("DOMContentLoaded", function () {
console.log("Page successfully loaded");
  
var form = document.querySelector('form');
form.addEventListener("submit", function (event) {
    // Prevent the form from submitting and causing a page reload
    event.preventDefault();
  
    // Get the value from the input field
      var searchInt = document.getElementById("searchInput").value.trim();
      var resultDisplay = document.getElementById('result');

      form.reset();
  
    // Fetch request to the superheroes.php script
    fetch(`http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(searchInt)}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Oh no! There seems to be an error!");
        }
        return response.text();
    })
    .then(data => {
        // Display the list of superheroes from the superheroes.php file
        resultDisplay.innerHTML = '';
        resultDisplay.style.backgroundColor = 'white';

        var heading = document.createElement('h2');//  adds a H2 tag to title the results display
        heading.textContent = 'RESULT';
        resultDisplay.appendChild(heading);

        resultDisplay.insertAdjacentHTML('beforeend', '<hr>'); //inserts a hr line between the result heading and the heroes data display

        // Append the result content
        resultDisplay.insertAdjacentHTML('beforeend', data);
    })
    .catch(error => {
        console.error(error.message);
    });
});
});
  