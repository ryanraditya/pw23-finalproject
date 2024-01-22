function checkLogin(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        window.location.href = 'ds/dashboardx.html';
    } else if (username === "User 6" && password === "user12345") {
        window.location.href = 'home.html';
    } else {
        alert("Username dan password yang Anda masukkan tidak valid");
    }   
}
