document.addEventListener("DOMContentLoaded", function () {
console.log("Page successfully loaded");
  
var form = document.querySelector('form');
form.addEventListener("submit", function (event) {
    // Prevent the form from submitting and causing a page reload
    event.preventDefault();
  
    // Get the value from the input field
      var searchInt = document.getElementById("searchInput").value;
  
    // Fetch request to the superheroes.php script
    fetch(`http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(searchInt)}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Oh no! There seems to be an error!");
        }
        return response.text();
    })
    .then(data => {
        // Display the list of superheroes in a JavaScript alert
        alert(data);
    })
    .catch(error => {
        console.error(error.message);
    });
});
});
  