const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "kevin" && password === "superadmin") {
        window.location.href = "tujuan.html";
    } else {
        alert("Username atau password salah. Silakan coba lagi.");
    }
}

