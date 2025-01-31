fetch('navbar.html') // Load navbar.html
.then(response => response.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data; // Inject navbar content
})
.catch(error => console.error('Error loading navbar:', error));



fetch('galleryImg.html') // Load galleryImg.html
.then(response => response.text())
.then(data => {
    document.getElementById('galleryImg').innerHTML = data; // Inject navbar content
})
.catch(error => console.error('Error loading navbar:', error));
