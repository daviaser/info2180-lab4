document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('searchButton').addEventListener('click', function() {
    // Make an AJAX request using the Fetch API
    fetch('superheroes.php')
      .then(response => response.text())
      .then(data => {
        // Display the HTML content in a JavaScript alert
        alert('Superheroes:\n' + data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  });
});

