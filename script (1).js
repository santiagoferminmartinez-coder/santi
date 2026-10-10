// =====================================================
// RULETA EDUCATIVA - CORRENTINAPP
// Laboratorio de Aplicaciones II
// =====================================================


// -----------------------------------------------------
// 1. BANCO DE PREGUNTAS
// -----------------------------------------------------

const preguntas = [

    {
        categoria: "Producción",
        tema: "Yerba Mate",

        pregunta:
        "¿Qué producto tradicional se obtiene de la planta Ilex paraguariensis?",

        opciones: [
            "Yerba mate",
            "Arroz",
            "Algodón",
            "Trigo"
        ],

        correcta: 0
    },


    {
        categoria: "Producción",
        tema: "Arroz",

        pregunta:
        "¿Qué condición favorece especialmente el cultivo de arroz?",

        opciones: [
            "La disponibilidad de agua",
            "Las grandes nevadas",
            "El clima desértico",
            "Los suelos congelados"
        ],

        correcta: 0
    },


    {
        categoria: "Naturaleza",
        tema: "Esteros del Iberá",

        pregunta:
        "¿Qué tipo de ambiente caracteriza principalmente a los Esteros del Iberá?",

        opciones: [
            "Humedales",
            "Desiertos",
            "Alta montaña",
            "Glaciares"
        ],

        correcta: 0
    },


    {
        categoria: "Geografía",
        tema: "Río Paraná",

        pregunta:
        "¿Qué importante río limita parte del territorio correntino?",

        opciones: [
            "Río Paraná",
            "Río Colorado",
            "Río Negro",
            "Río Chubut"
        ],

        correcta: 0
    },


    {
        categoria: "Producción",
        tema: "Cítricos",

        pregunta:
        "¿Cuál de estos productos pertenece a la producción citrícola?",

        opciones: [
            "Naranja",
            "Trigo",
            "Soja",
            "Girasol"
        ],

        correcta: 0
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