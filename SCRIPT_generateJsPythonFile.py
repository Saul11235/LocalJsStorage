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

def readJs(pathFile,read=False):
    jslines=open(pathFile,"r",encoding="utf8").read().split("\n")
    read=read
    allLines=[]
    for line in jslines:
        line=clearLine(line)
        if line.startswith("//--"):read=not(read)
        elif read:
            if line!="": allLines.append(line)
        else: pass
        pass
    return clearLine(" ".join(allLines))

def readJsFile(pathFile):
    jslines=open(pathFile,"r",encoding="utf8").read().split("\n")
    allLines=[]
    for x in jslines:
        line=clearLine(x)
        if line!="" and not(line.startswith("//")): allLines.append(line)
    return "\n".join(allLines)

    

allText=[]
for x in contentjs:
    allText.append(readJs(x))
fullText="\n".join(allText)  # <--- all js functions in text

#---------------------------------------------

textPy="# Autogenerated file\n# by Edwin Saul\ndef getJS():\n\treturn r\"\"\"\n"+fullText+"\"\"\""

#---------------------------------------------

# writing  LocalJsStorage/getJS.py
py=open(currentPY,"w",encoding="utf8")
py.write(textPy)
py.close()

# writin LocalJsStorage/__all.js 
js=open(currtentApp,"w",encoding="utf8")
js.write("//Autogenerated file \n"+fullText)
js.close()

# header for js
header="//Autogenerated header \n"+readJsFile(currentOBJ)+"\n"+readJsFile(currtentApp)


def writeNewJs(path):
    newText=[header[::]]
    lineseparator=False
    for x in open(path,"r",encoding="utf8").read().split("\n"):
        if x.startswith("//---"): lineseparator=True
        if lineseparator: newText.append(x)
    newText="\n".join(newText)
    file=open(path,"w",encoding="utf8")
    file.write(newText)
    file.close()

# write headers in all js files
for x in contentjs:writeNewJs(x)


print("Autogenerated js")

