// JavaScript for Matrix Animation
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Insert canvas at the top of the body
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1'; // Send canvas behind other elements

let topArray = Array(Math.ceil(canvas.width / 10)).fill(0);

function matrixEffect() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "#00ff99";
    ctx.font = "15px monospace";

    topArray.forEach((y, index) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        const x = index * 10;
        ctx.fillText(text, x, y);

        if (y > canvas.height + Math.random() * 10000) {
            topArray[index] = 0;
        } else {
            topArray[index] += 10;
        }
    });
}

setInterval(matrixEffect, 50);

// Handle resizing window
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    topArray = Array(Math.ceil(canvas.width / 10)).fill(0);
});

let whatsappButton = document.querySelector('.whatsapp-button');

// Guardamos la posición anterior del cursor
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // El usuario está bajando, ocultamos el botón
        whatsappButton.classList.add('hidden');
    } else {
        // El usuario está subiendo, mostramos el botón
        whatsappButton.classList.remove('hidden');
    }
    // Actualizamos la posición actual del scroll
    lastScrollY = window.scrollY;
});

