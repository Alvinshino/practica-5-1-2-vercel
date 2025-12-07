// Variables
let contador = 0;

// Cuando la página cargue
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar fecha actual
    const fecha = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('fecha').textContent = fecha;
    
    console.log("Página cargada correctamente");
    
    // EVENTO 1: Botón Alerta
    document.getElementById('btn-alerta').addEventListener('click', function() {
        alert('¡Evento click funcionando!\nPráctica 5.1 - Despliegue de páginas');
    });
    
    // EVENTO 2: Botón Cambiar Color
    document.getElementById('btn-cambiar').addEventListener('click', function() {
        const colores = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc'];
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        document.body.style.backgroundColor = colorAleatorio;
    });
    
    // EVENTO 3: Botón Contador
    document.getElementById('btn-contar').addEventListener('click', function() {
        contador++;
        document.getElementById('contador').textContent = contador;
        
        // Cambiar color según el número
        if (contador > 10) {
            document.getElementById('contador').style.color = '#dc3545';
        } else if (contador > 5) {
            document.getElementById('contador').style.color = '#fd7e14';
        } else {
            document.getElementById('contador').style.color = '#198754';
        }
    });
    
    // Evento para las cards (click en cualquier card)
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const titulo = this.querySelector('.card-title').textContent;
            alert(`Click en: ${titulo}`);
        });
    });
});