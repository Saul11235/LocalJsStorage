# script for local install

import SCRIPT_generateJsPythonFile
from os import system

system("pip uninstall LocalJsStorage")
system("python setup.py sdist bdist_wheel")
system("pip install .")
 
