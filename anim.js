// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Hola princesa Azu👸🏽", time: 12 },
  { text: "Te hice esto con mucho amor, espero te guste", time: 14 },
  { text: "Solo quiero recordarte quee.......", time: 16 },
  { text: "Amor eres una niña increible", time: 18 },
  { text: "Eres muy especial para mi", time: 22 },
  { text: "Jamas olvides que eres una niña que vales oro", time: 26 },
  { text: "Tienes el corazon mas lindo de este mundo", time: 30 },
  { text: "Y no tienes porque ser espectadora este dia", time: 35 },
  { text: "No tienes porque desear que te amen", time: 39 },
  { text: "No tienes porque ver como a las demas les dan algo y tu no recibir nada", time: 43 },
  { text: "No te mereces un amor a medias, te mereces un amor completo y Exclusivo para ti", time: 47 },
  { text: "Te mereces todo lo lindo de este mundo", time: 52 },
  { text: "Te mereces todo el amor del mundo", time: 56 },
  { text: "Se que eres una niña con un corazon muy fragil y bastante sentimental", time: 60 },
  { text: "A pesar que me demuestras que eres muy fuerte y muy valiente", time: 65 },
  { text: "Se que dentro de ti, tienes el corazon mas lindo y mas sensible, que la mas minima cosa te afecta", time: 70 },
  { text: "Porque te conozco muy bien, y yo se que eres una niña bastante tierna y solo necesitas ser amada", time: 75 },
  { text: "Te conozco tan bien, que se lo mucho que te pueden afectar las cosas", time: 80 },
  { text: "Te conozco tan bien, que se que muchas veces te sientes mal, pero no se lo dices a nadie", time: 85 },
  { text: "Y eso no es posible, eso no debe de pasar, tu no estas sola, porque yo no te dejare sola", time: 90 },
  { text: "Y a pesar que eres una niña grande de edad", time: 95 },
  { text: "Para mi sigues siendo una niña pequeña, y siempre seras mi niña pequeña", time: 98 },
  { text: "Solo quiero, que no tengas nada que envidiarle a nadie mas", time: 103 },
  { text: "Que no sientas en ningun momento, que no eres amada en esta vida", time: 108 },
  { text: "Porque yo muero de amor por ti", time: 112 },
  { text: "Y mas que decirtelo, quiero mostrartelo cada dia", time: 117 },
  { text: "Porque las acciones son las que muestran el porque las palabras no valen nada, verdad?", time: 120 },
  { text: "No te mereces un amor de palabras, te mereces un amor de hechos", time: 125 },
  { text: "Algo que sea meramente tuyo, que nadie mas pueda tener", time: 130 },
  { text: "Si te soy sincero, paso mucho tiempo pensando en ti, Sabes sobre que?", time: 135 },
  { text: "Sobre el hecho que tu me dices que a tu hermanito lo amaban mas, y se notaba la diferencia con las personas que te amaban a ti", time: 140 },
  { text: "No tenes la menor idea de como me hizo sentir escuchar ese audio, me senti horrible", time: 148 },
  { text: "Porque tu no tienes porque sentirte asi, tu tienes que sentirte amada, yo quiero que te sientas amada por mi", time: 152 },
  { text: "Tu vida no tiene porque ser triste, eso no lo voy a permitir", time: 157 },
  { text: "Creeme que no tenes la menor idea, de todas las cosas que quiero hacer, o mejor dicho que voy a hacer", time: 160 },
  { text: "Pero comprendo que tu pasas bastante ocupada y no tienes el tiempo, todo eso yo lo entiendo", time: 165 },
  { text: "Yo ya te dije que soy tu fan #1, y que te admiro por todo lo que haces, eres una niña fuerte y muy trabajadora, te admiro mucho mi amor", time: 170 },
  { text: "Y como trabajas, hay muchas cosas que no puedo hacer, pero eso no sera una excusa, te lo prometo", time: 176 },
  { text: "No me queda nada mas que recordarte lo especial que eres, me tome el tiempo de hacerte esto", time: 180 },
  { text: "A pesar que seria mas lindo regalarte las flores en persona, el hecho que hoy no se haya podido, no quiere decir que mas adelante no se pueda", time: 185 },
  { text: "Pero te hice este detallito, para que aun sin poder verte sepas que eres muy amada por mi", time: 190 },
  { text: "Eres amada por mi familia, mi mamá a ti te ama y tu lo sabes muy bien", time: 195 },
  { text: "Te admiro amor y te amo con todo mi corazon", time: 199 },
  { text: "Solo quiero que cambies ese pensamiento que nadie te ama", time: 203 },
  { text: "Porque no es asi, tu eres una niña increible y jamas me cansare de decirtelo", time: 208 },
  { text: "Te amo con todo mi corazon, y te dare la mejor version de mi para que tu te sientas muy amada por mi ❤️", time: 214 },
  { text: "Love.", time: 240 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 9990);