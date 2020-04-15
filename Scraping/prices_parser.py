from bs4 import BeautifulSoup
# import the already defined range func from Edmunds_Parser.py
import re
import requests
import time
import csv
import random
import time

def readMyFile(filename):
    names = []

    with open(filename) as csvDataFile:
        csvReader = csv.reader(csvDataFile)
        for row in csvReader:
            names.append(row[1].replace(" ", "+")+"+MSRP")

    return names

def getPrices(html, price):
    soup = BeautifulSoup(html, features="html.parser")
    '''soup = soup.prettify()'''

    # for google
    try:
        price.append(soup.findAll("div", {"class":"BNeawe iBp4i AP7Wnd"})[1].text[6:])
    except IndexError:
        try:
            price.append(soup.findAll("div", {"class":"BNeawe s3v9rd AP7Wnd"})[1].text[6:])
        except IndexError:
            pass

    # for bing
    '''print(soup.findAll("div", class_= ["b_focusTextMedium"]))'''

prices = []
names_list = []
names_list = readMyFile('master.csv')
print(names_list)

p = 0
b = 0

for car in names_list:
    b = random.randint(40, 60)
    time.sleep(b)
    a = requests.get(f"https://www.google.com/search?q={names_list[p]}/").text
    getPrices(a, prices)
    p += 1
    if p%10 == 0:
        print("time check" + str(p))

with open('master.csv', 'r') as read_obj, \
        open('masterwithprices.csv', 'w', newline='') as write_obj:
    # Create a csv.reader object from the input file object
    csv_reader = csv.reader(read_obj)
    # Create a csv.writer object from the output file object
    csv_writer = csv.writer(write_obj)
    # Read each row of the input csv file as list
    i=0
    for row in csv_reader:
        # Append the default text in the row / list
        row.append(prices[i])
        # Add the updated row / list to the output file
        csv_writer.writerow(row)
        i += 1
