import requests

a = requests.get("https://www.cars.com/for-sale/searchresults.action/?bsId=20217&dealerType=all&page=3&perPage=20&rd=30&searchSource=PAGINATION&sort=relevance&stkTypId=28881&zc=11204")

print(a.text)
