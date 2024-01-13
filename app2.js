
document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()";

    let chars = "";
    chars += uppercase ? uppercaseChars : "";
    chars += lowercase ? lowercaseChars : "";
    chars += numbers ? numbersChars : "";
    chars += symbols ? symbolsChars : "";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }

    document.getElementById("password").value = password;
}
function updatePasswordLength(value) {
    document.getElementById("rangeVal").textContent = value;
}
