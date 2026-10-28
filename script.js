const startButton = document.getElemnentById('startButton');
cosnt message = document.getElementById("message");

startButton.addEventListener('click', function() {
    message.textContent = "Welcome to your Real Estate Investing Portal";
});


