document.addEventListener('DOMContentLoaded', function() {
    const lookupBtn = document.getElementById('lookup');
    const searchInput = document.getElementById('country'); // Changed to match your HTML
    const resultDiv = document.getElementById('result');

    lookupBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Stop page from refreshing

        
        const country = searchInput.value.trim();
        
        
        let url = 'world.php';
        if (country !== '') {
            url += '?country=' + encodeURIComponent(country);
        }

        
        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('Error:', error);
                resultDiv.innerHTML = "<p>Error loading data.</p>";
            });
    });
});