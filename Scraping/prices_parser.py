from bs4 import BeautifulSoup
# import the already defined range func from Edmunds_Parser.py
import re
import requests
import time
import csv

def readMyFile(filename):
    names = []

    with open(filename) as csvDataFile:
        csvReader = csv.reader(csvDataFile)
        for row in csvReader:
            names.append(row[1].replace(" ", "+")+"+MSRP")

    return names

def getPrices(html, price):
    soup = BeautifulSoup(html, features="html.parser")
    print(soup)
    '''soup = soup.prettify()'''
    print(soup.findAll("div", {"class":"BNeawe iBp4i AP7Wnd"}))

    ''' Try using div class = "title" '''

prices = []
names_list = []
names_list = readMyFile('master.csv')
print(names_list)

for car in names_list:
    a = requests.get(f"https://www.google.com/search?q={car}/").text
    getPrices(a, prices)

