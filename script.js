function encryptText() {
    const inputText = document.getElementById('inputText').value;

    if (!inputText) {
        resetCuadroEncriptado();
        return;
    }

    const vowelMap = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    let encryptedText = '';
    for (let char of inputText) {
        encryptedText += vowelMap[char] || char;
    }

    const cuadroEncriptado = document.getElementById('cuadroEncriptado');
    cuadroEncriptado.innerHTML = `
        <p id="outputText">${encryptedText}</p>
        <button id="copyButton" class="botonCopiar botones" onclick="copyText()">Copiar</button>
    `;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;

    if (!inputText) {
        resetCuadroEncriptado();
        return;
    }

    const reverseVowelMap = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    let decryptedText = inputText;

    for (let [encoded, decoded] of Object.entries(reverseVowelMap)) {
        const regex = new RegExp(encoded, 'g');
        decryptedText = decryptedText.replace(regex, decoded);
    }

    const cuadroEncriptado = document.getElementById('cuadroEncriptado');
    cuadroEncriptado.innerHTML = `
        <p id="outputText">${decryptedText}</p>
        <button id="copyButton" class="botonCopiar botones" onclick="copyText()">Copiar</button>
    `;
}

function copyText() {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        alert('Error al copiar el texto: ', err);
    });
}

function resetCuadroEncriptado() {
    const cuadroEncriptado = document.getElementById('cuadroEncriptado');
    cuadroEncriptado.innerHTML = `
        <img class="imagenBuscando" src="./accets/Muñeco.png" alt="ilustración persona examinando">
        <h2 class="altText">Ningún mensaje fue encontrado</h2>
        <p class="altText2">ingresa el texto que desees encriptar o desencriptar</p>
    `;
}

// Ocultar el botón de copiar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    resetCuadroEncriptado();
});
