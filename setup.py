from setuptools import setup, find_packages

f=open("README.md","r")
readme_file=f.read()
f.close()

setup(
    name='LocalJsStorage',         
    version='0.1', 
    description='package for local file js generation files',
    author='Edwin Saul',
    author_email='edwinsaulpm@gmail.com',
    url="https://edwinsaul.com",
    packages=find_packages(),  # Automatically discover and include all packages
    keywords='DEV debug flask',
    install_requires=[
    ],
    long_description=readme_file,
    long_description_content_type="text/markdown",
)
