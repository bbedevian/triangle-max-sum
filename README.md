Program can be run by calling 'node .' in the command line (assuming node is installed) from within the directory and will log the final sum in the console. 

The program utilizes the filesystem package 'fs' to give us access to the readFile function and the contents of our .txt file. Since this is an asynchronus function I passed the actual calculation as a callback to readFile. 



