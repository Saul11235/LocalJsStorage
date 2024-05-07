# writed by: Edwin Saul
from json import dumps 
from os.path import isdir

try   : from  getJS import getJS
except: from .getJS import getJS

class LocalJsStorage:

    def __init__(self,pathFiles="./",pathJs="data.js"):
        self.pathFiles=pathFiles
        self.pathJs=pathJs
        self.dataDicc={}
        self.textGenerated=""
        # creating idata info
        self.createDataDicc()
        self.writeJs()
        pass


    def createDataDicc(self):
        if isdir(self.pathFiles):
            self.dataDicc=self.__cicleDataDicc(self.pathFiles)

    def __cicleDataDicc(self,path):
        return {"lolo":222}


    def writeJs(self):
        self.textGenerated="//Autogenerated file, do not manipulate manually\n//LocalJsStorage by Edwin Saul https://edwinsaul.com\nconst LocalJsStorage = "+dumps(self.dataDicc,indent=0)+str(getJS())
        file=open(self.pathJs,"w",encoding="utf8")
        file.write(self.textGenerated)
        file.close()



if __name__=="__main__":
    a=LocalJsStorage("../test/dataExample","../test/customJs.js")


