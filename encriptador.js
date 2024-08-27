// encriptador.js

// Declaración de variables
const inputText = document.getElementById('inputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');
const output = document.getElementById('output');
const validationMessage = document.getElementById('validationMessage');

// Función de encriptar
function encrypt() {
    const text = inputText.value;

    // Validación de entrada
    if (!isValid(text)) {
        validationMessage.style.display = 'block';
        validationMessage.innerText = "No se aceptan mayúsculas ni caracteres especiales.";
        return;
    } else {
        validationMessage.style.display = 'none';
    }

    // Proceso de encriptado
    let encryptedText = text.replace(/e/g, 'enter')
                            .replace(/i/g, 'imes')
                            .replace(/a/g, 'ai')
                            .replace(/o/g, 'ober')
                            .replace(/u/g, 'ufat');

    // Mostrar el resultado en el área de presentación
    output.style.display = 'block';
    output.innerText = encryptedText;
}

// Función de descifrar
function decrypt() {
    const text = inputText.value;

    // Validación de entrada
    if (!isValid(text)) {
        validationMessage.style.display = 'block';
        validationMessage.innerText = "No se aceptan mayúsculas ni caracteres especiales.";
        return;
    } else {
        validationMessage.style.display = 'none';
    }

    // Proceso de descifrado
    let decryptedText = text.replace(/enter/g, 'e')
                            .replace(/imes/g, 'i')
                            .replace(/ai/g, 'a')
                            .replace(/ober/g, 'o')
                            .replace(/ufat/g, 'u');

    // Mostrar el resultado en el área de presentación
    output.style.display = 'block';
    output.innerText = decryptedText;
}

// Validación (no se aceptan mayúsculas ni caracteres especiales)
function isValid(text) {
    return /^[a-z\s]+$/.test(text); // Solo acepta letras minúsculas y espacios
}

// Función para copiar el texto del área de presentación al portapapeles
function copyText() {
    const text = output.innerText;
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Texto copiado al portapapeles");
        });
    }
}

// Conexión de funciones a elementos HTML
encryptBtn.addEventListener('click', encrypt);
decryptBtn.addEventListener('click', decrypt);
copyBtn.addEventListener('click', copyText);
