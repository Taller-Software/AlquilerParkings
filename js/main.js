// Lista de vehículos
const vehiculos = [
    'Aixam City (microcoche)',
    'Aixam Crossover',
    'ATV',
    'Citroën C1',
    'Citroën C3',
    'Cuadriciclo',
    'Dacia Spring',
    'Fiat 500',
    'Fiat Panda',
    'Honda Jazz',
    'Hyundai i10',
    'Kia Picanto',
    'Ligier JS50',
    'Ligier JS60',
    'Mazda 2',
    'Microcar M.Go',
    'Mini 3 puertas',
    'Mitsubishi Space Star (Mirage)',
    'Moto',
    'Nissan Micra',
    'Opel Corsa',
    'Peugeot 108',
    'Peugeot 208',
    'Quad',
    'Renault Clio',
    'Renault Twingo',
    'Renault Twingo E-Tech',
    'Seat Ibiza',
    'Skoda Fabia',
    'Smart Forfour',
    'Smart Fortwo',
    'Suzuki Ignis',
    'Suzuki Swift',
    'Toyota Aygo X',
    'Toyota Yaris',
    'VW Polo',
    'VW Up',
    'Scooter'
].sort();

// Cargar vehículos en el select
window.onload = function() {
    const vehiculoSelect = document.getElementById('vehiculo');
    vehiculos.forEach(vehiculo => {
        const option = document.createElement('option');
        option.value = vehiculo;
        option.textContent = vehiculo;
        vehiculoSelect.appendChild(option);
    });

    // Establecer la fecha mínima como hoy y establecer el valor por defecto
    const fechaInput = document.getElementById('fecha');
    const hoy = new Date().toISOString().split('T')[0];
    fechaInput.min = hoy;
    fechaInput.value = hoy; // Establecer el valor por defecto como hoy
};

// Contador de caracteres para el textarea
document.getElementById('consulta').addEventListener('input', function() {
    const maxLength = 300;
    const currentLength = this.value.length;
    document.getElementById('charCount').textContent = currentLength;
    
    if (currentLength > maxLength) {
        this.value = this.value.substring(0, maxLength);
    }
});

// Función para enviar mensaje por WhatsApp
function sendWhatsApp(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const plaza = document.getElementById('plaza').value;
    const vehiculo = document.getElementById('vehiculo').value;
    const consulta = document.getElementById('consulta').value;

    // Formatear la fecha
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES');
    
    // Construir el mensaje
    let mensaje = `¡Hola Daniel! Me interesa el parking.\n\n`;
    mensaje += `Me llamo *${nombre}* `;
    mensaje += `y me gustaría disponer de la plaza para el día *${fechaFormateada}*. `;
    mensaje += `La opción de plaza que me interesa es *${plaza}* y `;
    mensaje += `el vehículo que aparcaría sería *${vehiculo}*.`;
    if (consulta) {
        mensaje += `\n*Tengo las siguientes dudas o consultas:*\n${consulta}`;
    }
    mensaje += `\n\nQuedo a la espera de tu respuesta. \n¡Gracias!`;

    // Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    
    // Abrir WhatsApp con el mensaje
    //window.open(`https://wa.me/34623750438?text=${mensajeCodificado}`);
    window.open(`https://wa.me/34623750438?text=${mensajeCodificado}`);
    
    return false;
}

// Funciones para el modal de imágenes
function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Funciones para el modal de vehículos
function openVehicleModal(type) {
    const modal = document.getElementById('vehicleModal');
    modal.style.display = "block";
}

function closeVehicleModal() {
    const modal = document.getElementById('vehicleModal');
    modal.style.display = "none";
}

// Cerrar modales al hacer clic fuera
window.onclick = function(event) {
    const imageModal = document.getElementById('imageModal');
    const vehicleModal = document.getElementById('vehicleModal');
    
    if (event.target == imageModal) {
        closeModal();
    }
    if (event.target == vehicleModal) {
        closeVehicleModal();
    }
}
