import os
directory = './Parsed_Data/'

a = open("master.csv", "w")
a.write("Type, Name, Rating, MPG, Horsepower, Price\n")

for fil in os.listdir(directory):
    f = open(directory + fil)
    f.readline()
    for j in f:
        a.write(fil[:-4] + "," + j[:-2] + ",\n")

a.close()
    


