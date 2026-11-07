document.addEventListener('DOMContentLoaded', function() {
    const lookupBtn = document.getElementById('lookup');
    const lookupCitiesBtn = document.getElementById('lookup-cities');
    const searchInput = document.getElementById('country'); 
    const resultDiv = document.getElementById('result');

    function fetchData(isCityLookup) {
        const country = searchInput.value.trim();
        let url = 'world.php?';
        
        if (country !== '') {
            url += 'country=' + encodeURIComponent(country);
        }

        if (isCityLookup) {
            url += (country !== '' ? '&' : '') + 'lookup=cities';
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
    }

    lookupBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        fetchData(false); 
    });

    
    lookupCitiesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        fetchData(true); 
    });
});