// Filter services in real-time
function filterServices() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(input) ? "block" : "none";
    }
}

// Booking popup functionality
function bookService(serviceName) {
    alert("You selected: " + serviceName + "\nBooking page coming soon!");
}