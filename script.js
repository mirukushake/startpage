var update = function() {
    document.getElementById('date')
    .innerHTML = dayjs().format('dddd, MMMM DD ★ HH:mm');
}
setInterval(update, 1000);


function search(event) {
    var x = event.key;
    if (x == "Enter") {
        event.preventDefault()
        let text = document.getElementById("searchbar").value;
        url = 'https://www.google.com/search?client=firefox-b-d&q=' + text
        window.open(url, '_self');
    }
}