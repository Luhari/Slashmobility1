var username = '';
var pw = '';

function buy() {
    document.getElementById('myModal').style.display = "block";
}

function close() {
    document.getElementById('myModal').style.display = "none";
}

function confirm() {
    username = document.getElementById('Username').value;
    pw = document.getElementById('Password').value;
}

window.onclick = funtion(event) {
    if (event.target == modal) document.getElementById('myModal').style.display = "none";
}
