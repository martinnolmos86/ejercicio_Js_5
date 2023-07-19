let listaCompra = ["Pan", "Leche", "Huevos", "Arroz", "Frutas"];

listaCompra.push("Aceite de Girasol");

listaCompra = listaCompra.filter((item) => item !== "Aceite de Girasol");

let peliculasFavoritas = [
  {
    titulo: "Interestelar",
    director: "Christopher Nolan",
    fecha: "2014",
  },
  {
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    fecha: "1972",
  },
  {
    titulo: "El Señor de los Anillos: El Retorno del Rey",
    director: "Peter Jackson",
    fecha: "2003",
  },
];

let peliculasPosteriores2010 = peliculasFavoritas.filter(
  (pelicula) => parseInt(pelicula.fecha) > 2010
);

let directores = peliculasFavoritas.map((pelicula) => pelicula.director);

let titulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);

let directoresYTItulos = directores.concat(titulos);

let directoresYTItulosSpread = [...directores, ...titulos];

console.log("Lista de la compra:", listaCompra);
console.log("Películas favoritas:", peliculasFavoritas);
console.log("Películas posteriores a 2010:", peliculasPosteriores2010);
console.log("Directores:", directores);
console.log("Títulos:", titulos);
console.log("Directores y Títulos (concat):", directoresYTItulos);
console.log("Directores y Títulos (spread):", directoresYTItulosSpread);
