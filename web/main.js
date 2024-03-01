function convert() {
    const kgInput = document.getElementById('kgInput');
    const resultElement = document.getElementById('result');

    const kgValue = parseFloat(kgInput.value);

    if (isNaN(kgValue)) {
        alert('Please enter a valid number for KG.');
        return;
    }

    fetch('/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'kg': kgValue })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.error) {
            alert('An error occurred: ' + data.error);
        } else {
            resultElement.textContent = `Result in LBS: ${data.lbs.toFixed(2)}`;
        }
    })
    .catch(error => console.error('Fetch Error:', error));
    
}
