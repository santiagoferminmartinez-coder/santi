// =====================================================
// RULETA EDUCATIVA - CORRENTINAPP
// Laboratorio de Aplicaciones II
// =====================================================


// -----------------------------------------------------
// 1. BANCO DE PREGUNTAS
// -----------------------------------------------------

const preguntas = [

    {
        categoria: "Geografía Física y Relieve",
        tema: "Las Montañas Más Altas",

        pregunta:
        "¿Cuál es la montaña más alta del mundo sobre el nivel del mar?",

        opciones: [
            "1) K2",
            "2) Monte Everest",
            "3) Kangchenjunga",
            "4) Aconcagua"
        ],

        correcta: 1
    },


    {
        categoria: "Hidrografía (Ríos, Lagos y Océanos)",
        tema: "Los Ríos Más Largos",

        pregunta:
        "¿Cuál es el río más caudaloso y largo del mundo?",

        opciones: [
            "1) Río Nilo",
            "2) Río Misisipi",
            "3) Río Amazonas",
            "4) Río Yangtze"
        ],

        correcta: 2
    },


    {
        categoria: "Geografía Política y Capitales",
        tema: "Capitales de Europa",

        pregunta:
        "¿Cuál es la capital de Australia?",

        opciones: [
            "1) Brisbane",
            "2) Canberra",
            "3) Melbourne",
            "4) Sídney"
        ],

        correcta: 1
    },


    {
        categoria: "Clima y Meteorología",
        tema: "Zonas Climáticas",

        pregunta:
        "¿Qué línea imaginaria marca el límite del área donde el sol puede estar directamente en el cenit a mediodía?",

        opciones: [
            "1) Línea del Ecuador únicamente",
            "2) Trópico de Cáncer y Trópico de Capricornio",
            "3) Meridiano de Greenwich",
            "4) Círculo Polar Ártico"
        ],

        correcta: 1
    },


    {
        categoria: "Clima y Meteorología",
        tema: "Zonas Climáticas",

        pregunta:
        "¿Qué línea imaginaria marca el límite del área donde el sol puede estar directamente en el cenit a mediodía?",

        opciones: [
            "1) Círculo Polar Ártico",
            "3) Trópico de Cáncer y Trópico de Capricornio",
            "2) Meridiano de Greenwich",
            "4) Línea del Ecuador únicamente"
        ],

        correcta: 3
    },


    {
        categoria: "Producción",
        tema: "Forestación",

        pregunta:
        "¿Cuál de estas actividades está relacionada directamente con la producción forestal?",

        opciones: [
            "Cultivo y aprovechamiento de árboles",
            "Extracción de petróleo",
            "Pesca marítima",
            "Minería de carbón"
        ],

        correcta: 0
    }

];


// -----------------------------------------------------
// 2. VARIABLES
// -----------------------------------------------------

let puntaje = 0;

let cantidadPreguntas = 0;

let preguntaActual = null;

let rotacionActual = 0;


// -----------------------------------------------------
// 3. OBTENER ELEMENTOS DEL HTML
// -----------------------------------------------------

const ruleta =
    document.getElementById("ruleta");

const botonGirar =
    document.getElementById("botonGirar");

const tarjetaPregunta =
    document.getElementById("tarjetaPregunta");

const categoria =
    document.getElementById("categoria");

const tema =
    document.getElementById("tema");

const pregunta =
    document.getElementById("pregunta");

const opciones =
    document.getElementById("opciones");

const resultado =
    document.getElementById("resultado");

const marcadorPuntaje =
    document.getElementById("puntaje");

const contador =
    document.getElementById("contador");


// -----------------------------------------------------
// 4. EVENTO DEL BOTÓN
// -----------------------------------------------------

botonGirar.addEventListener("click", girarRuleta);


// -----------------------------------------------------
// 5. FUNCIÓN GIRAR RULETA
// -----------------------------------------------------

function girarRuleta() {

    botonGirar.disabled = true;

    tarjetaPregunta.classList.add("oculto");

    resultado.textContent = "";


    // Generamos grados aleatorios

    const gradosAleatorios =
        Math.floor(Math.random() * 360);


    // Agregamos varias vueltas completas

    rotacionActual +=
        1440 + gradosAleatorios;


    // Giramos la ruleta

    ruleta.style.transform =
        `rotate(${rotacionActual}deg)`;


    // Esperamos que termine la animación

    setTimeout(function() {

        seleccionarPregunta();

        botonGirar.disabled = false;

    }, 4000);

}


// -----------------------------------------------------
// 6. SELECCIONAR PREGUNTA ALEATORIA
// -----------------------------------------------------

function seleccionarPregunta() {

    const numeroAleatorio =
        Math.floor(Math.random() * preguntas.length);


    preguntaActual =
        preguntas[numeroAleatorio];


    mostrarPregunta();

}


// -----------------------------------------------------
// 7. MOSTRAR LA PREGUNTA
// -----------------------------------------------------

function mostrarPregunta() {

    tarjetaPregunta.classList.remove("oculto");


    categoria.textContent =
        preguntaActual.categoria;


    tema.textContent =
        preguntaActual.tema;


    pregunta.textContent =
        preguntaActual.pregunta;


    // Limpiamos opciones anteriores

    opciones.innerHTML = "";


    // Creamos los botones

    preguntaActual.opciones.forEach(
        function(opcion, indice) {

            const boton =
                document.createElement("button");


            boton.textContent =
                opcion;


            boton.classList.add("opcion");


            boton.addEventListener(
                "click",
                function() {

                    comprobarRespuesta(indice);

                }
            );


            opciones.appendChild(boton);

        }
    );

}


// -----------------------------------------------------
// 8. COMPROBAR RESPUESTA
// -----------------------------------------------------

function comprobarRespuesta(indiceSeleccionado) {

    cantidadPreguntas++;


    if (
        indiceSeleccionado ===
        preguntaActual.correcta
    ) {

        resultado.textContent =
            "✅ ¡Respuesta correcta! +100 puntos";

        puntaje += 100;

    }

    else {

        resultado.textContent =
            "❌ Respuesta incorrecta";

    }


    actualizarMarcador();


    // Evitamos responder varias veces

    const botones =
        document.querySelectorAll(".opcion");


    botones.forEach(
        function(boton) {

            boton.disabled = true;

        }
    );

}


// -----------------------------------------------------
// 9. ACTUALIZAR MARCADOR
// -----------------------------------------------------

function actualizarMarcador() {

    marcadorPuntaje.textContent =
        puntaje;


    contador.textContent =
        cantidadPreguntas;

}
