# writed by: Edwin Saul
import datetime
from json import dumps ,load
from os.path import isdir, isfile, join
from os import listdir

try   : from  getJS import getJS
except: from .getJS import getJS

class LocalJsStorage:

    def __init__(self,pathFiles="./",pathJs="data.js",prelink="./"):
        self.pathFiles=pathFiles   #path for explore files and json data
        self.pathJs=pathJs         #path for js file atugenerates
        self.prelink=prelink       #object for add in link objects
        self.dataDicc={}
        self.textGenerated=""
        # creating idata info
        self.createDataDicc()
        self.writeJs()

    def createDataDicc(self): # OK
        if isdir(self.pathFiles):
            self.dataDicc=self.__cicleDataDicc([])

    def __cicleDataDicc(self,listPath):
        ciclePath=join(self.pathFiles,"/".join(listPath))
        isContainer=self.__isContainer(ciclePath)
        if isContainer==True:  # is dir-container, no is a jason
            dic={}
            for x in self.__getDirectories(ciclePath):
                ndic=self.__cicleDataDicc(listPath+[x])
                if len(ndic)>0: dic[x]=ndic
            for x in self.__getFiles(ciclePath):
                dic[x]=self.__makeLocalLink(listPath,x)
            dic["__json__"]=False
            return dic
        elif isContainer==False: # no is a container, is a json
            dic= self.__getDicc(ciclePath,listPath)
            dic["__json__"]=True
            return dic
        else: return {} # no data

    def __makeLocalLink(self,listPath,name): #ok
        fullPath=listPath+[name]
        return str(self.prelink)+"/".join(fullPath)
        

    def __getDirectories(self,path): # OK
        allDirs=[]
        for x in listdir(path): 
            fullPath=join(path,x)
            if isdir(fullPath) and not(x.startswith("__")):allDirs.append(x)
        return allDirs

    def __getFiles(self,path): # OK
        allFiles=[]
        for x in listdir(path): 
            fullPath=join(path,x)
            if isfile(fullPath) and not(x.startswith("__")):allFiles.append(x)
        return allFiles

    def __getDicc(self,path,listPath): 
        allJson=[];Dicc={}
        #-----------------------------
        for x in listdir(path):  # create Data Dicc
            fullPath=join(path,x)
            if isfile(fullPath) and x.endswith(".json"):
                try:
                    data={}
                    with open(fullPath,"r") as jsonFile:
                        data=load(jsonFile)
                    Dicc.update(data)
                except: pass
        #-----------------------------
        for x in self.__getFiles(path): 
            Dicc[x]=x
        #-----------------------------
        keys=list(Dicc.keys())
        if "__time__" in keys and "__tags__" in keys:
            Dicc=self.__addLinksObject(path,listPath,Dicc)
            return Dicc
        else:
            self.__addTimeJSON(path)
            return self.__getDicc(path,listPath)

    def __addLinksObject(self,path,listPath,obj):
        files=self.__getFiles(path)
        typeObj=type(obj)
        #-----------------------
        if typeObj==str:
            if obj in files:
                return self.__makeLocalLink(listPath,obj)
            else: return obj
        #-----------------------
        elif typeObj==list:
            newobj=[]
            for x in obj:
                newobj.append(self.__addLinksObject(path,listPath,x))
            return newobj
        elif typeObj==dict:
            newobj={}
            for x in obj.keys():
                newobj[x]=self.__addLinksObject(path,listPath,obj[x])
            return newobj
        #-----------------------
        else: 
            return obj
        #-----------------------

    def __getJSON(self,path): #Ok
        jsonList=[]
        for x in self.__getFiles(path):
            if x.endswith(".json"):jsonList.append(x)
        return jsonList

    def __isContainer(self,path):   #Ok
        files=self.__getFiles(path)
        dirs=self.__getDirectories(path)
        json=self.__getJSON(path)
        if len(files)==0 and len(dirs)==0: return None  # No data
        elif len(json)>0: return False # have content json
        else: return True # container

    def __addTimeJSON(self,path):  # OK
        # create __time__.json   
        pathTime=join(path,"__time__.json")
        pathTags=join(path,"__tags__.json")
        now=str(datetime.datetime.now()).replace(" ",":").replace(",",":").replace(".",":").replace("/",":").replace("\\",":").replace("-",":").split(":")[0:5]
        nowint=[]
        for x in now: nowint.append(int(x))
        nownum=int(now[0])*10000+int(now[1])*100+int(now[2])+int(now[3])*0.01+int(now[4])*0.0001
        dicTime=dumps({"__time__":nownum})
        file=open(pathTime,"w",encoding="utf8")
        file.write(dicTime); file.close()
        file=open(pathTags,"w",encoding="utf8")
        file.write(dumps({"__tags__":[]})); file.close()
 
        
    def writeJs(self):  # OK
        self.textGenerated="//Autogenerated file, do not manipulate manually\n//LocalJsStorage by Edwin Saul https://edwinsaul.com\nconst LocalJsStorage = "+dumps(self.dataDicc)+";\nvar LocalJsStorage_key  = \"\";\nvar LocalJsStorage_args = \"\";\nvar LocalJsStorageFunctions={};"+str(getJS())
        file=open(self.pathJs,"w",encoding="utf8")
        file.write(self.textGenerated)
        file.close()

if __name__=="__main__":
    print("begin")
    a=LocalJsStorage("../test/dataExample","../test/customJs.js","./dataExample/")
    print("end")


