from bs4 import BeautifulSoup
import re

# Get the html of the website (Download it for now so you don't get banned)
with open("./Test_Data/edmunds.html") as fp:
    soup = BeautifulSoup(fp, features="html.parser")

# For the mpg range combining
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


# Find price based on specific class name
price = soup.find_all(class_="d-flex justify-content-between heading-3")[0].string.split(" - ")

# Get mpg by class and text
mpg = soup.find_all(string=re.compile("city / "), class_="field")
mpg_ranges = []

# Filter the parsed mpg into usable format
for i in mpg:
    a = list(map(int, i.string.rstrip(" hwy").split(" city / ")))
    mpg_ranges.append(a)
mpg = combine_range(mpg_ranges)


print(price)
print(mpg)


