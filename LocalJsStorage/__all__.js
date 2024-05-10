//Autogenerated file 
function LJS_getMain(){ return LocalJsStorage;};
function LJS_formatPath(path){ if(Array.isArray(path)){ let newArray=[]; for(var i=0;i<path.length;i++){newArray.push(path[i].toString());}; return newArray;}else if(typeof path ==="number"){ return[path.toString()];}else if(typeof path ==="string"){ path=path.replace("/\\/g","/").replace(/\s/g,"/").replace(/:/g,"/").replace(/\./g,"/").split("/"); let newArray=[]; for(var i=0;i<path.length;i++){if(path[i]!=""){newArray.push(path[i])}}; return newArray;}else{ return undefined;};};
function LJS_formatPathStr(path){ if(Array.isArray(path)){ let newArray=[]; for(var i=0;i<path.length;i++){newArray.push(path[i].toString());}; return newArray.join("/");}else if(typeof path ==="number"){ return path.toString();}else if(typeof path ==="string"){ return path;}else{ return undefined;};};
function LJS_childs(path){ path=LJS_formatPath(path); if(path.length==0){ return Object.keys(LJS_getMain());}; let localVar=LJS_getMain(); let childs=[]; for(var i=0;i<path.length;i++){ if(localVar!=undefined){ childs=Object.keys(localVar); if(childs.includes(path[i])){ localVar=localVar[path[i]];}else{localVar=undefined;};};}; if(localVar!=undefined){ childs=Object.keys(localVar); return childs;}else{return[];};};
function LJS_get(path){ path=LJS_formatPath(path); if(path.length==0){ return LJS_getMain();}; let localVar=LJS_getMain(); let childs=[]; for(var i=0;i<path.length;i++){ if(localVar!=undefined){ childs=Object.keys(localVar); if(childs.includes(path[i])){ localVar=localVar[path[i]];}else{localVar=undefined;};};}; if(localVar!=undefined){ return localVar;}else{return undefined;};};
function LJS_exists(path){ let value=LJS_get(path); if(value!= undefined){return true;}else{return false};};
function LJS_createDiv(){ let text=JSON.stringify(LJS_getMain(),null,2); element=document.getElementById("LocalJsStorage"); element.textContent=text;};
function LJS_tree(){ function LJS_line_tree(args){ let childs=LJS_childs(args); let space=""; for(var i=0;i<args.length;i++){space+=" "}; for(var i=0;i<childs.length;i++){ if(childs[i]!="__json__"){ console.log(space+childs[i]);}; if(childs.includes("__json__")&& !childs.includes("__time__")){ let newargs=args; newargs.push(childs[i]); LJS_line_tree(newargs);};}; return args;};};