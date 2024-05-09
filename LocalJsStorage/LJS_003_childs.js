
// local Js Storage

const LocalJsStorage = {"blog": {"A001_hola_mundo": {"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__time__": 20240508.1746, "__timeVars__": [2024, 5, 8, 17, 46], "__tags__": ["python", "data", "jdjd"], "imagen.png": "./dataExample/blog/A001_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A001_hola_mundo/informe.json", "__json__": true}, "A003_hola_mundo": {"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__time__": 20240508.1746, "__timeVars__": [2024, 5, 8, 17, 46], "__tags__": [], "imagen.png": "./dataExample/blog/A003_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A003_hola_mundo/informe.json", "__json__": true}, "A04_hola_mundo": {"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__time__": 20240508.1746, "__timeVars__": [2024, 5, 8, 17, 46], "__tags__": [], "imagen.png": "./dataExample/blog/A04_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A04_hola_mundo/informe.json", "__json__": true}, "__json__": false}, "proyectos": {"imagenes": {"imagen1.png": "./dataExample/proyectos/imagenes/imagen1.png", "imagen2.svg": "./dataExample/proyectos/imagenes/imagen2.svg", "__json__": false}, "__json__": false}, "__json__": false};

// add functions

function LJS_formatPath(path){ if(Array.isArray(path)){ let newArray=[]; for(var i=0;i<path.length;i++){newArray.push(path[i].toString());}; return newArray;}else if(typeof path ==="number"){ return[path.toString()];}else if(typeof path ==="string"){ path=path.replace("/\/g","/").replace(/\s/g,"/").replace(/:/g,"/").replace(/\./g,"/").split("/"); let newArray=[]; for(var i=0;i<path.length;i++){if(path[i]!=""){newArray.push(path[i])}}; return newArray;}else{ return undefined;};};
function LJS_getMain(){ return LocalJsStorage;};

//-----------------------------------------------------------

// LJS_childs(path) --> get list of childs of a path
function LJS_childs(path){
  path=LJS_formatPath(path);
  if (path.length==0) {
    return Object.keys(LJS_getMain());
  };
  let localVar=LJS_getMain();
  let childs=[];
  for(var i=0;i<path.length;i++){
    if (localVar!=undefined) {
      childs=Object.keys(localVar);
      if (childs.includes(path[i])) {
	localVar=localVar[path[i]];
      } else { localVar=undefined;
      };
    };
  };
  if (localVar!=undefined) {
    childs=Object.keys(localVar);
    return childs;
  } else { return [];
  };
};

//-----------------------------------------------------------

// test

//console.log("test LJS_childs");
console.log(LJS_childs(""));
console.log(LJS_childs("blog"));
console.log(LJS_childs("blog/A001_hola_mundo"));
console.log(LJS_childs("noExists"));
