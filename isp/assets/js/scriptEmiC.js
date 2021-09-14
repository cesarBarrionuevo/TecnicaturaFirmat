




// ==================== JS EMI C ========================== //

// ------ NOVEDADES Y ULTIMAS NOTICIAS ------- //

let animado = document.querySelectorAll(".animado"); //selecciono todos los elementos que tengan la clase animado

//Detecto la cantidad de scroll y por consecuencia haré que aparezcan los elementos

//@scrollTop
//  es la cantidad de scroll que voy haciendo a medida que voy bajando

//Luego hago un for porque la clase animado tiene varios elementos

//offsetTop
//  detecta la altura que hay desde el inicio de la ventana hasta donde está el elemento

//@alturaAnimado
//  guardo el resultado de offsetTop

function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;   //detecto la altura de cada elemento 
    if (alturaAnimado -550 < scrollTop) {
      animado[i].style.opacity = 1;
      //animado[i].classList.add("mostrarArriba");
      animado[i].classList.add("mostrarDerecha");
    }
  }
}

window.addEventListener('scroll',mostrarScroll);
//Cuando escuche el elemento scroll, se va a ejecutar la función mostrarScroll


// ============= SECCION CONTADOR ============= //

//Este códgio se debería hacer con una lista y un for así evitamos repetir código

const numero1 = document.getElementById('numero1')
let cantidad1 = 0

let tiempo1 = setInterval(() => {
   cantidad1 += 1
   numero1.textContent = cantidad1

   if(cantidad1 === 300) {
       clearInterval(tiempo1)
   }

},40);


const numero2 = document.getElementById('numero2')
let cantidad2 = 0

let tiempo2 = setInterval(() => {
   cantidad2 += 1
   numero2.textContent = cantidad2

   if(cantidad2 === 20) {
       clearInterval(tiempo2)
   }

},40);


const numero3 = document.getElementById('numero3')
let cantidad3 = 0

let tiempo3 = setInterval(() => {
   cantidad3 += 1
   numero3.textContent = cantidad3

   if(cantidad3 === 15) {
       clearInterval(tiempo3)
   }

},40);

const numero4 = document.getElementById('numero4')
let cantidad4 = 0

let tiempo4 = setInterval(() => {
   cantidad4 += 1
   numero4.textContent = cantidad4

   if(cantidad4 === 27) {
       clearInterval(tiempo4)
   }

},40);

