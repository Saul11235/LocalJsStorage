//Autogenerated file, do not manipulate manually
//LocalJsStorage by Edwin Saul https://edwinsaul.com
const LocalJsStorage = {"blog": {"A001_hola_mundo": {"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__time__": 20240507.190100003, "__timeVars__": [2024, 5, 7, 19, 1], "imagen.png": "./dataExample/blog/A001_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A001_hola_mundo/informe.json", "__json__": true}, "__json__": false}, "proyectos": {"imagenes": {"imagen1.png": "./dataExample/proyectos/imagenes/imagen1.png", "imagen2.svg": "./dataExample/proyectos/imagenes/imagen2.svg", "__json__": false}, "__json__": false}, "__json__": false}
// Ejemplo de libreria para Js Storage
function log() {
  console.log("lolo");
  console.log(LocalJsStorage)
}
// create an put all JSON file on an div
function putLocalJsStorage(){
  let text=JSON.stringify(LocalJsStorage,null,2);
  element=document.getElementById("LocalJsStorage");
  element.textContent=text;
}
putLocalJsStorage();
