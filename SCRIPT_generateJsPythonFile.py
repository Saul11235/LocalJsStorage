from os.path import isfile,isdir,join,dirname,abspath
from os import listdir

current= dirname(abspath(__file__)) 
currentJS=join(current,"LocalJsStorage/LocalJsStorage.js")
currentOBJ=join(current,"LocalJsStorage/__obj__.js")
currtentApp=join(current,"LocalJsStorage/__all__.js")
currentPY=join(current,"LocalJsStorage/getJS.py")
codePath=join(current,"LocalJsStorage")
contentCode=listdir(codePath)
contentjs=[]
for x in contentCode: 
    if x.endswith(".js") and x!="__all__.js" and x!="__obj__.js":
        contentjs.append(join(current,"LocalJsStorage",x))

def clearLine(line):
    otherline=line.replace(" ","").replace("\t","")
    if otherline.startswith("//---"):return "//------------"
    nline=""
    if "//" in line: nLine=line.split("//")[0][::]
    else           : nline=line[::]
    nline=nline.replace("\t"," ").replace("\n"," ").replace("; ",";").replace(" ;",";").replace(") ",")").replace(" )",")").replace(" (","(").replace("( ","(").replace("] ","]").replace(" ]","]").replace("[ ","[").replace(" [","[").replace("} ","}").replace(" }","}").replace("{ ","{").replace(" {","{")
    while "  " in nline:
        nline=nline.replace("  "," ")[::]
    return nline

def readJs(pathFile):
    jslines=open(pathFile,"r",encoding="utf8").read().split("\n")
    read=False
    allLines=[]
    for line in jslines:
        line=clearLine(line)
        if line.startswith("//--"):read=not(read)
        elif read:
            if line!="": allLines.append(line)
        else: pass
        pass
    return clearLine(" ".join(allLines))

allText=[]
for x in contentjs:
    allText.append(readJs(x))
fullText="\n".join(allText)  # <--- all js functions in text

#---------------------------------------------

textPy="# Autogenerated file\n# by Edwin Saul\ndef getJS():\n\treturn \"\"\"\n"+fullText+"\"\"\""

#---------------------------------------------

# writing  LocalJsStorage/getJS.py
py=open(currentPY,"w",encoding="utf8")
py.write(textPy)
py.close()

js=open(currtentApp,"w",encoding="utf8")
js.write("//Autogenerated file \n"+fullText)
js.close()
print("Autogenerated js")

