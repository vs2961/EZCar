from bs4 import BeautifulSoup
import re

# Get the html of the website (Download it for now so you don't get banned)
with open("./Test_Data/edmunds.html") as fp:
    soup = BeautifulSoup(fp, features="html.parser")

# For the mpg range combining


def combine_range(arr):
    lower = min(list(i[0] for i in arr))
    higher = max(list(i[1] for i in arr))
    return [lower, higher]


# Find price based on specific class name
price = soup.find_all(class_="d-flex justify-content-between heading-3")[0].string.split(" - ")
price = [int(i.lstrip("$").replace(",", "")) for i in price]

# Get mpg by class and text
mpg = soup.find_all(string=re.compile("city / "), class_="field")
mpg_ranges = []

# Filter the parsed mpg into usable format
for i in mpg:
    a = [int(i) for i in i.string.rstrip(" hwy").split(" city / ")]
    mpg_ranges.append(a)
mpg = combine_range(mpg_ranges)


print(price)
print(mpg)


