#Password Generator Project
import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

print("Welcome to the PyPassword Generator!")
nr_letters= int(input("How many letters would you like in your password?\n"))
nr_symbols = int(input(f"How many symbols would you like?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))

#Easy Level: Order not randomised:
#e.g. 4 letters, 2 symbols, 2 numbers => JduE&!91
password = ""
for n in range(0, nr_letters):
  password += random.choice(letters)

for n in range(0, nr_symbols):
  password += random.choice(symbols)

for n in range(0, nr_numbers):
  password += random.choice(numbers)

print(password)

#Hard Level - Order of characters randomised => using a list.
#e.g. 4 letters, 2 symbols, 2 numbers => g^2jk8&P
password_list = []
password = ''

for n in range(0, nr_letters):
  password_list += random.choice(letters)

for n in range(0, nr_symbols):
  password_list += random.choice(symbols)

for n in range(0, nr_numbers):
  password_list += random.choice(numbers)

random.choice(password_list)

for char in password_list:
  password += char

print(password)

#Hard Level: Order of characters randomized => using a built-in method.
password = list(password)
random.shuffle(password)
password = ''.join(password)

print(password)
