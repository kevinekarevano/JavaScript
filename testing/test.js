const login = () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "kevin" && password === "superadmin") {
        window.location.href = "tujuan.html";
    } else {
        alert("Username atau password salah. Silakan coba lagi.");
    }
}

