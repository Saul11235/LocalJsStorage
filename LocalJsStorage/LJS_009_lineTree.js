//Autogenerated header 
const LocalJsStorage ={"blog":{"A001_hola_mundo":{"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__tags__":["python", "js"], "__time__": 20240510.1247, "imagen.png": "./dataExample/blog/A001_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A001_hola_mundo/informe.json", "__json__": true}, "A002_hola_mundo":{"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__tags__":["js", "html"], "__time__": 20240510.0047, "imagen.png": "./dataExample/blog/A002_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A002_hola_mundo/informe.json", "__json__": true}, "A003_hola_mundo":{"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__tags__":["js", "css"], "__time__": 20240510.1047, "imagen.png": "./dataExample/blog/A003_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A003_hola_mundo/informe.json", "__json__": true}, "A004_hola_mundo":{"titulo1": "Hola mundo", "titulo2": "Hello World", "body": true, "__tags__":["js", "html"], "__time__": 20240510.0047, "imagen.png": "./dataExample/blog/A004_hola_mundo/imagen.png", "informe.json": "./dataExample/blog/A004_hola_mundo/informe.json", "__json__": true}, "__json__": false}, "proyectos":{"imagenes":{"imagen1.png": "./dataExample/proyectos/imagenes/imagen1.png", "imagen2.svg": "./dataExample/proyectos/imagenes/imagen2.svg", "__json__": false}, "__json__": false}, "__json__": false};
var LocalJsStorage_key = "";
var LocalJsStorage_args = "";
var LocalJsStorageFunctions={};
function LJS_getMain(){return LocalJsStorage;};
function LJS_formatPath(path){if(Array.isArray(path)){let newArray=[];for(var i=0;i<path.length;i++){newArray.push(path[i].toString());};return newArray;}else if(typeof path ==="number"){return[path.toString()];}else if(typeof path ==="string"){path=path.replace("/\\/g","/").replace(/\s/g,"/").replace(/:/g,"/").split("/");let newArray=[];for(var i=0;i<path.length;i++){if(path[i]!=""){newArray.push(path[i])}};return newArray;}else{return undefined;};};
function LJS_formatPathStr(path){if(Array.isArray(path)){let newArray=[];for(var i=0;i<path.length;i++){newArray.push(path[i].toString());};return newArray.join("/");}else if(typeof path ==="number"){return path.toString();}else if(typeof path ==="string"){return path;}else{return undefined;};};
function LJS_childs(path){path=LJS_formatPath(path);if(path.length==0){return Object.keys(LJS_getMain());};let localVar=LJS_getMain();let childs=[];for(var i=0;i<path.length;i++){if(localVar!=undefined){childs=Object.keys(localVar);if(childs.includes(path[i])){localVar=localVar[path[i]];}else{localVar=undefined;};};};if(localVar!=undefined){childs=Object.keys(localVar);return childs;}else{return[];};};
function LJS_childsData(path){let childs=LJS_childs(path);let list=[];for(let i=0;i<childs.length;i++){let current=childs[i];if(current!="__json__" && current!="__tags__" && current!="__time__" && !current.includes(".")){list.push(current);};};return list;};
function LJS_get(path){path=LJS_formatPath(path);if(path.length==0){return LJS_getMain();};let localVar=LJS_getMain();let childs=[];for(var i=0;i<path.length;i++){if(localVar!=undefined){childs=Object.keys(localVar);if(childs.includes(path[i])){localVar=localVar[path[i]];}else{localVar=undefined;};};};if(localVar!=undefined){return localVar;}else{return undefined;};};
function LJS_exists(path){let value=LJS_get(path);if(value!= undefined){return true;}else{return false};};
function LJS_createDiv(){let text=JSON.stringify(LJS_getMain(),null,2);element=document.getElementById("LocalJsStorage");element.textContent=text;};
function LJS_tree(){LJS_lineTree([]);};
function LJS_lineTree(path){let args=LJS_formatPath(path);let childs=LJS_childs(path);let space="";for(var i=0;i<args.length;i++){space+=" "+" "+" "+" "};for(var i=0;i<childs.length;i++){if(childs[i]!="__json__"){};if(childs.includes("__json__")&& !childs.includes("__time__")){let newargs=args;newargs.push(childs[i]);LJS_lineTree(newargs);};};return args;};
function LJS_getJsonChilds(path){let pathF=LJS_formatPath(path);let pathFjson=pathF.concat("__json__");if(LJS_exists(pathFjson)){if(LJS_get(pathFjson)){return[LJS_formatPathStr(pathF)];}else{let jsonChilds=[];let childsContainer=LJS_childs(path);for(let i=0;i<childsContainer.length;i++){let contentSubPath=LJS_getJsonChilds(pathF.concat(childsContainer[i]));for(let ii=0;ii<contentSubPath.length;ii++){let newValue=contentSubPath[ii];jsonChilds.push(newValue);};};return jsonChilds;};};return[];};
function LJS_getTags(path){let tags={};let allChilds=LJS_getJsonChilds(path);for(let i=0;i<allChilds.length;i++){let strCurrentPath=allChilds[i];let currentPath=LJS_formatPath(allChilds[i]);let currentTags=LJS_get(currentPath.concat("__tags__"));for(let ii=0;ii<currentTags.length;ii++){let currentTag=currentTags[ii];if(Object.keys(tags).includes(currentTag)){let contentTag=tags[currentTag];contentTag.push(strCurrentPath);tags[currentTag]=contentTag;}else{tags[currentTag]=[strCurrentPath];};};};return tags;};
function LJS_getSort(path){let obj={};let allChilds=LJS_getJsonChilds(path);for(let i=0;i<allChilds.length;i++){let newpath=allChilds[i];let newpathF=LJS_formatPath(newpath).concat("__time__");let timeVar=LJS_get(newpathF);let stringTime=timeVar.toString();if(Object.keys(obj).includes(stringTime)){let contentDate=obj[stringTime];contentDate.push(newpath);obj[stringTime]=contentDate;}else{obj[stringTime]=[newpath];};};let sort=[];let sortedDates=Object.keys(obj).sort().reverse();for(let i=0;i<sortedDates.length;i++){let paths=obj[sortedDates[i]];for(let ii=0;ii<paths.length;ii++){sort.push(paths[ii]);};};return sort;};
function LJS_getUrlParams(){let raw_data={};try{raw_data= new URLSearchParams(window.location.search);}catch{return["",""];};let key_data= Array.from(raw_data.keys());if(0<key_data.length){var key=key_data[0];var value=raw_data.get(key);try{LocalJsStorage_key=key;LocalJsStorage_args=value;}catch{};return[key,value];}else{return["",""];};};
function LJS_makeUrl(key="",value=""){let skey=key;let svalue=value;if(Array.isArray(key)){skey=key[0];svalue=key[1];};let currentUrl=window.location.href.split("#")[0].split("?")[0];let add="?"+skey+"="+svalue;if(value===""){add="?"+skey};if(add==="?"){add=""};console.log("test LJS_getSort");console.log(LJS_makeUrl("data","lolo"));console.log(LJS_makeUrl(["data","lolo"]));
function LJS_getMainFuncs(){return LocalJsStorageFunctions;};
function LJS_setMainFuncs(key,func){LocalJsStorageFunctions[key]=func;};
function LJS_eval(key,args){var funcs=LJS_getMainFuncs();var fun=funcs[key];if(fun !== undefined){try{LocalJsStorage_key=key;LocalJsStorage_args=args;}catch(e){console.log(e);};fun(args);return true;}else{return false;};};
function LJS_evalMain(){let urlParams=LJS_getUrlParams();let key=urlParams[0];let values=urlParams[1];let first=LJS_eval(key,values);if(!first){LJS_eval("v404",values);}};
//-----------------------------------------------------------


// LJS_tree() --> print tree of elements

function LJS_lineTree(path){
  let args=LJS_formatPath(path);
  let childs=LJS_childs(path);
  let space="";
  for (var i=0;i<args.length;i++) {space+=" "+" "+" "+" "};
  for (var i=0;i<childs.length;i++) {
    if (childs[i]!="__json__") {
       // console.log(space+childs[i]);
      };
    if (childs.includes("__json__") && !childs.includes("__time__")) {
	let newargs=args;
	newargs.push(childs[i]);
      	LJS_lineTree(newargs);
      };
    };
    return args;
};


//-----------------------------------------------------------

// test LJS_tree

LJS_tree();

