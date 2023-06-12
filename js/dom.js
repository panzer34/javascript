
/* **********     Curso 60 de JavaScript- WEB APIs      ********** */

/* console.log(window);
console.log(document);

let texto = "hola como estas yo soy";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
hablar(texto); */



/* **********     Curso 61 de JavaScript - DOM: Introducción - #jonmircha     ********** */

/*console.log("************** Elementos del Documento ****************");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.iamages);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);

document.write("<h2>Hola Mundo</h2>"); */


//--------------------------------------------------------------------------------------------------------------------------------------

/* **********     Curso 62 de JavaScript - DOM: Nodos, Elementos y Selectores - #jonmircha     ********** */

/* console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));
 */



//-------------------------------------------------------------------------------------------------------------------------------------

/* **********     Curso 63 de JavaScript - DOM: Atributos y Data-Attributes - #jonmircha     ********** */

/* console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));


document.documentElement.lang = "es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-PY");
console.log(document.documentElement.lang);


const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete a";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));
*/


//--------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------ Curso 64 de Javascript -DOM: Estilos y Variables CSS ---------------------------------------


/* const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));


$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = "0.5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));


//Variables CSS - Custom Properties CSS

const $html = document.documentElement,
 $body = document.body;

 let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

  console.log(varDarkColor, varYellowColor);

  $body.style.backgroundColor = varDarkColor;
  $body.style.color = varYellowColor;

  $html.style.setProperty("--dark-color", "red");
  varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

  $body.style.setProperty("background-color", varDarkColor);
 */
  




  //-----------------------------------------------------------------------------------------------------------------------------------

  //---------------------------------------------- Curso 65 de Javascript - DOM: Clases CSS -------------------------------------------


 /*  const $card = document.querySelector(".card");

  console.log($card);
  console.log($card.className);
  console.log($card.classList);
  console.log($card.classList.contains("rotate-45"));
  $card.classList.add("rotate-45");
  console.log($card.classList.contains("rotate-45"));
  console.log($card.className);
  console.log($card.classList);
  $card.classList.remove("rotate-45");
  console.log($card.classList.contains("rotate-45"));
  $card.classList.toggle("rotate-45");
  $card.classList.toggle("rotate-45");
  console.log($card.classList.contains("rotate-45"));
  $card.classList.toggle("rotate-45");
  $card.classList.replace("rotate-45", "rotate-135");
  $card.classList.add("opacity-80", "sepia");
  $card.classList.remove("opacity-80", "sepia");
  $card.classList.toggle("opacity-80", "sepia");
 */




//--------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------- Curso 66 de Javascript - DOM: Texto y HTML ---------------------------------------------


/* const $whatIsDOM = document.getElementById("que-es");
let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

// $whatIsDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text; */




//-------------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------- Curso 67 de Javascript - DOM: Traversing: Recorriendo el DOM -------------------------------


/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
 */



//-------------------------------------------------------------------------------------------------------------------------------------


//-------------------------------------- Curso 68 de Javascript - DOM: Crando Elementos y Fragmentos ------------------------------------

/* const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");



$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");    
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;


$figure2.classList.add("card");
$cards.appendChild($figure2);


const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
 $ul = document.createElement("ul");

 document.write("<h3>Estaciones del Año</h3>");
 document.body.appendChild($ul);

 estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
 });

 const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul");

  document.write("<h3>Continentes del Mundo</h3>");
  document.body.appendChild($ul2);
  $ul2.innerHTML= "";
  continentes.forEach((el) => $ul2.innerHTML += `<li>${el}</li>`);

const meses =[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],

$ul3 = document.createElement("ul"),
$fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);
 */




//--------------------------------------------------------------------------------------------------------------------------------------


//----------------------------------------- Curso 69 de Javascript - DOM: Templates HTML -----------------------------------------------


/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnologia",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

  cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
  });

  $cards.appendChild($fragment);
 */



  //------------------------------------------------------------------------------------------------------------------------------------


  //-------------------------------------- Curso 70 de Javascript - DOM: Modificando Elementos (Old Style)------------------------------


  /* const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");
    $cloneCards = $cards.cloneNode(true);

    $newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
    `;

    $newCard.classList.add("card");

    // $cards.replaceChild($newCard, $cards.children[2]);
    // $cards.insertBefore($newCard, $cards.firstElementChild);
    // $cards.removeChild($cards.lastElementChild);
    document.body.appendChild($cloneCards);
 */


//-------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------- Curso 71 de Javascript - DOM: Modificando Elementos (Cool Style)------------------------------

/*
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
*/


 /* const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

  let $contenCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
    `;

    $newCard.classList.add("card");
    
   
    $newCard.insertAdjacentHTML("beforeend", $contenCard);
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
    $cards.insertAdjacentElement("afterbegin", $newCard);


    // $cards.prepend($newCard);
    // $cards.before($newCard);
    // $cards.append($newCard);
    // $cards.after($newCard);
 */




//--------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------------ Curso 72 de Jvascript - DOM: Manejadores de Eventos ---------------------------------------


/* function holaMundo() {
  alert("hola mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`);
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico");
      $eventoMultiple = document.getElementById("evento-multiple");
      $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola Mundo Manejador de Eventos Semantico");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);

$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola Mundo Manejador de Eventos Multiple");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("jon");
});

const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);

  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
  };

  $eventoRemover.addEventListener("dblclick", removerDobleClick);
 */



//--------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------- Curso 73 de Javascript - DOM: Eventos con Parametros Y Remover Evntos-------------------------------


 












//--------------------------------------------------------------------------------------------------------------------------------------


  
//--------------------------------- Curso 74 de Javascript - DOM: Flujo de Eventos (Burbuja y Captura)----------------------------------


/*
Si no se especifica el parámetro boolean, el valor por defecto es false.
  Si el boolean es falso se ejecuta la fase de burbuja (ir del elemento más interno al más externo <body>)
  Si el boolean es verdadero se ejecuta la fase de captura (ir del elemento más externo <body> al más interno)
*/

/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  //div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true,
  });
}); */


//-------------------------------------------------------------------------------------------------------------------------------------



//-------------------------------------- Curso 75 de Javascript - DOM: stopPropagation & preventDefault -------------------------------




/* const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach((div) => {
  //Fase de burbuja
  div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de captura
  //div.addEventListener("click", flujoEventos, true);
  //div.addEventListener("click", flujoEventos, {
    //capture: false,
    //once: true,
  //});
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola soy tu amigo y docente digital... Jonathan MirCha");
  e.preventDefault();
  e.stopPropagation();
}); */









//-------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------- Curso 76 de Javascript - DOM: Delegacion de Eventos --------------------------------------



/* const $divsEventos = document.querySelectorAll(".eventos-flujo div");
      $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

  
}

document.addEventListener("click", (e) => {
  console.log("click en", e.target);
  
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola soy");
     e.preventDefault();
  }

});
 */



//-------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------- Curso 77 de Javascript - BOM: Propiedades y Eventos --------------------------------------


/* window.addEventListener("resize", (e) => {
  console.clear();
  console.log("***********Evento Resize ***************");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(e);
});


window.addEventListener("scroll", (e) => {
  console.clear();
  console.log("***********Evento Scroll************");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e);
  
});

window.addEventListener("load", (e) => {
  console.log("********** Evento Load **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", (e) => {
  console.log("********** Evento DOMContentLoaded **********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});
 */


//-------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------------------ Curso 78 de Javascript - BOM: Metodos ----------------------------------------------


/* // window.alert("Hola");
// window.confirm("confirmacion");
// window.prompt("Aviso");
// alert("jon");

const $btnAbrir = document.getElementById("abrir-ventana");
      $btnCerrar = document.getElementById("cerrar-ventana");
      $btnImprimir = document.getElementById("imprimir-ventana");


let ventana;


$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://youtube.com");
});

$btnCerrar.addEventListener("click", (e) => {
  ventana = window.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
});
 */




//-------------------------------------------------------------------------------------------------------------------------------------



//------------------------------------- Curso 79 de Javascript - BOM: Objetos: URL, Historial y Navegador -----------------------------


/* console.log("************ Objeto URL (location) *************");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
// location.reload();


console.log("*********** Objeto Historial (history) ***********");
console.log(history);
console.log(history.length);
history.forward(-3);
history.go(-3);
history.back(2);
 

console.log("********** Objeto Navigator (Navegador) **********")

console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); 

*/








