

# LocalJsStorage - by EdwinSaul

[![view on github](https://img.shields.io/badge/-view_on_github-blue)](https://github.com/Saul11235/LocalJsStorage)
[![view on PyPI](https://img.shields.io/badge/-view_on_PyPI-red)](https://pypi.org/project/LocalJsStorage/)

simple python Package for autogeneration for js scripts 
for local Js storage, 


![Logo](./img/logo.svg)

python package for manage a "backend" utiliy for  static pages
in repositories, like github pages, 

![graph](./img/picture.svg)

## How to install 
recomended:

    pip install LocalJsStorage

## python Package
python package for creation of js files, example script:

    # import package                                                
    from LocalJsStorage import LocalJsStorage                       
                                                                    
    # add path of data files                                        
    # add path js generated                                         
    # add prefix for links files (optional)                         
    # LocalJsStorage(pathDatafiles,pathJsGenerated,prefixLink)      
                                                                    
    LocalJsStorage("./dataExample","./customJs.js","./dataExample/")

## js generated
js generated contains:

- *LocalJsStorage file*: json autogenerated with data from pathDatafiles
- *js functions* js functions for get and sort data from LocalJsStorage, and anothers functions.

## custom functions

These functions are at the core of creating simple web applications using LJS
They have a single input argument, which should ideally be a string.

    function MyFun(entry) {             
        // code of MyFun                
    };                                  

By default, the way to configure this function is by using another 
function called *LJS_setMainFuncs(key, value)*
By default, when an application starts, 
it will call the key "" and if it is not found, it will call another key "404".

    LJS_setMainFuncs("key",function1);          
    LJS_setMainFuncs("",functionDefault);       
    LJS_setMainFuncs("404",function2);          
                                                
    // run app                                  
    LJS_evalMain();                             


### list of all js functions

- **LJS_getMain()**         get main object.
- **LJS_formatPath(path)**  format path to list.
- **LJS_formatPathStr(path)** format path to str.
- **LJS_childs(path)**      get childs from an path.
- **LJS_get(path)**         get content from a path.
- **LJS_exists(path)**      return true or false if path exists.
- **LJS_createDiv()**       add data on div id="LocalJsStorage" on DOM.
- **LJS_tree()**            print tree structure on console.
- **LJS_lineTree(path)**    print tree from an path.
- **LJS_getJsonChilds(path)** get subdirs of Json childs on an path.
- **LJS_getTags(path)**     get object sorted by tags from an path,
- **LJS_getSort(path)**     get object sorted by date from an path,
- **LJS_getUrlParams**      get params from URL.
- **LJS_makeURL(key,value)** make url with key and value,
- **LJS_getMainFuncs()**    get all user funcs
- **LJS_setMainFuncs(key,func)** setup user function by key,
- **LJS_eval(key,args)**    eval custom function and set args.
- **LJS_evalMain()**        eval main from URL


[![writed by Edwin Saul](https://img.shields.io/badge/-writed_by_Edwin_Saul-blue)](https://edwinsaul.com)


