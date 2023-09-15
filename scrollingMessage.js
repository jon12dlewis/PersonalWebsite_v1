document.addEventListener("DOMContentLoaded", function () {
    const messages = ["Message 1", "Message 2", "Message 3"];
    let currentIndex = 0;
    const messageElements = document.querySelectorAll(".message");

    function displayMessage(index) {
        // Hide all messages
        messageElements.forEach((message) => {
            message.style.display = "none";
        });

        // Display the message at the specified index
        messageElements[index].style.display = "block";
    }

    function cycleMessages() {
        displayMessage(currentIndex);
        currentIndex = (currentIndex + 1) % messages.length;
    }

    // Initial display
    displayMessage(currentIndex);

    // Set an interval to cycle through messages every 3 seconds (3000 milliseconds)
    setInterval(cycleMessages, 5000);
});