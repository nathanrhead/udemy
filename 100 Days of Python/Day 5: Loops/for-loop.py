fruits = ['apple', 'peach', 'pair']

# Basic for loop.
for fruit in fruits:
  print(fruit)

# For loop with indices.
for idx, fruit in enumerate(fruits):
  print(f'{idx}: {fruit}')

# The range function: from 1 to 10, exclusive.
for number in range(1, 10):
  print(number) # -> 1, 2, 3, 4, 5, 6, 7, 8, 9

# The range function with a step variable.
for number in range(1, 10, 3):
  print(number) # -> 1, 4, 7

# Carl Gaus's problem: add all the numbers between 1 and 100. (50 X 101 = 5050)
total = 0
for n in range(1,101):
  total += n

print(total)
