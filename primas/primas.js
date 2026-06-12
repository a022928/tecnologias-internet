const primas = {
  beyonce: {
    foto: "fotos/Beyoncé.jpg",
    titulo: "A voz de anjo",
    lista: ["Cantora", "Compositora", "Produtora", "Empresária"],
    texto: "A prima Beyoncé é considerada uma das artistas mais influentes da música contemporânea."
  },

  sandra: {
    foto: "fotos/SandraBullock.jpg",
    titulo: "A estrela do cinema",
    lista: ["Atriz", "Produtora", "Óscar", "Hollywood"],
    texto: "A prima Sandra Bullock é uma atriz e produtora norte-americana."
  },

  cameron: {
    foto: "fotos/CameronDiaz.jpg",
    titulo: "A estrela do cinema",
    lista: ["Atriz", "Produtora", "Óscar", "Hollywood"],
    texto: "A prima Cameron Diaz é uma atriz e produtora norte-americana."
  },
  
  angelina: {
    foto: "fotos/AngelinaJolie.jpg",
    titulo: "A estrela do cinema",
    lista: ["Atriz", "Produtora", "Óscar", "Hollywood"],
    texto: "A prima Cameron Diaz é uma atriz e produtora norte-americana."
  },
  
  katherine: {
    foto: "fotos/KatherineHeigl.jpg",
    titulo: "A estrela do cinema",
    lista: ["Atriz", "Produtora", "Óscar", "Hollywood"],
    texto: "A prima Katherine Heigl é uma atriz e produtora norte-americana."
  },

  lindsay: {
    foto: "fotos/LindsayLohan.jpg",
    titulo: "A estrela do cinema",
    lista: ["Atriz", "Produtora", "Óscar", "Hollywood"],
    texto: "A prima Lindsay Lohan é uma atriz e produtora norte-americana."
  },
  
  lucy: {
    foto: "fotos/LucyLiu.jpg",
    titulo: "A estrela do cinema",
    lista: ["Atriz", "Produtora", "Óscar", "Hollywood"],
    texto: "A prima LucyLiu é uma atriz e produtora norte-americana."
  },
};

const cmbPrimas   = document.getElementById("cmbPrimas");
const fotoPrima   = document.getElementById("fotoPrima");
const tituloPrima = document.getElementById("tituloPrima");
const listaPrima  = document.getElementById("listaPrima");
const textoPrima  = document.getElementById("textoPrima");

function carregarPrima(chave) {
  const prima = primas[chave];

  fotoPrima.src           = prima.foto;
  tituloPrima.textContent = prima.titulo;
  textoPrima.innerHTML    = prima.texto;

  listaPrima.innerHTML = "";

  prima.lista.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    listaPrima.appendChild(li);
  });
}

cmbPrimas.addEventListener("change", function () {
  carregarPrima(cmbPrimas.value);
});

carregarPrima("beyonce");