import requests

request = requests.get("https://www.betrybe.com/")

# print(request.status_code)
# print(request.headers)
# print(request.text)
# print(request.content)

response = requests.post("http://httpbin.org/post", data="some content")
# print(response.status_code)
# print(response.text)
