
// local Js Storage


//-----------------------------------------------------------

// LJS_formatPath(path) --> format path to list

function LJS_formatPath(path){
  if (Array.isArray(path)){
    let newArray=[];
    for(var i=0;i<path.length;i++){newArray.push(path[i].toString());};
    return newArray;
  } else if (typeof path ==="number") {
    return [path.toString()];
  } else if (typeof path ==="string"){
    path=path.replace("/\\/g","/").replace(/\s/g,"/").replace(/:/g,"/").replace(/\./g,"/").split("/");
    let newArray=[];
    for(var i=0;i<path.length;i++){if(path[i]!=""){newArray.push(path[i])}};
    return newArray;
  } else {
    return undefined;
  };
};

//-----------------------------------------------------------

// test LJS_formatPath

console.log("test LJS_formatPath");
console.log(LJS_formatPath("child1/child2"));

