from bs4 import BeautifulSoup
import re

with open("./Test_Data/edmunds.html") as fp:
    soup = BeautifulSoup(fp, features="html.parser")


def combine_range(arr):
    lower = None
    higher = None
    for i in arr:
        if not lower:
            lower = i[0]
        if not higher:
            higher = i[1]
        elif i[0] < lower:
            lower = i[0]
        elif i[1] > higher:
            higher = i[1]
    return [lower, higher]

price = soup.find_all(class_="d-flex justify-content-between heading-3")[0].string.split(" - ")
mpg = soup.find_all(string=re.compile("city / "), class_="field")
mpg_ranges = []
for i in mpg:
    a = list(map(int, i.string.rstrip(" hwy").split(" city / ")))
    mpg_ranges.append(a)
mpg = combine_range(mpg_ranges)
print(price)
print(mpg)


