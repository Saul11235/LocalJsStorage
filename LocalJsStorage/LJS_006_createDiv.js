
// local Js Storage

const LocalJsStorage = {"blog": {"A001_hola_mundo": {"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__time__": 20240508.1746, "__timeVars__": [2024, 5, 8, 17, 46], "__tags__": ["python", "data", "jdjd"], "imagen.png": "./dataExample/blog/A001_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A001_hola_mundo/informe.json", "__json__": true}, "A003_hola_mundo": {"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__time__": 20240508.1746, "__timeVars__": [2024, 5, 8, 17, 46], "__tags__": [], "imagen.png": "./dataExample/blog/A003_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A003_hola_mundo/informe.json", "__json__": true}, "A04_hola_mundo": {"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__time__": 20240508.1746, "__timeVars__": [2024, 5, 8, 17, 46], "__tags__": [], "imagen.png": "./dataExample/blog/A04_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A04_hola_mundo/informe.json", "__json__": true}, "__json__": false}, "proyectos": {"imagenes": {"imagen1.png": "./dataExample/proyectos/imagenes/imagen1.png", "imagen2.svg": "./dataExample/proyectos/imagenes/imagen2.svg", "__json__": false}, "__json__": false}, "__json__": false};

// functions
function LJS_getMain(){ return LocalJsStorage;};

//-----------------------------------------------------------

// LJS_createDiv() --> create an put all JSON file on an div
function LJS_createDiv(){
  let text=JSON.stringify(LJS_getMain(),null,2);
  element=document.getElementById("LocalJsStorage");
  element.textContent=text;
};


//-----------------------------------------------------------

// Test LJS_createDiv

console.log("test LJS_createDiv");
console.log("no aviable on console mode");

