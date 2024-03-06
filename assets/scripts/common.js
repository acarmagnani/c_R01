// COMMON
document.addEventListener("DOMContentLoaded", function() {
    fetch('html/common/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Header').innerHTML = data;
        });
});


document.addEventListener("DOMContentLoaded", function() {
    fetch('html/common/lang.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Lang').innerHTML = data;
        });
});