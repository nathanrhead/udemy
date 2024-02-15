# Imports Python's random module. (Resource: askpython.com. For randint(): https://www.askpython.com/python-modules/python-randint-method.)
import random

# Generate a random integer.
random_integer = random.randint(1, 10)
print(f"Random intger: {random_integer}")

# Generate a random floating number between 0 and 1.
random_float = random.random()
print(f"Random floating number between 0 and 1: {random_float}")

# Generate a random floating number between 0 and 5.
random_float_zero_to_five = random.uniform(0, 5)
print(f"Random floating number between 0 and 5: {random_float_zero_to_five}")

# Generate a random floating number between 0 and 5 without using uniform().
random_int_zero_to_five = random.randint(0, 5)
random_float_zero_to_five_manual = random_int_zero_to_five * random_float
print(f"Random floating number between 0 and 5 generated without uniform(): {random_float_zero_to_five_manual}")

# Importing modules (can only be done from this folder or as a package, as in the case of random).
import pi
# print(random_integer)
print(f"pi: {pi.pi}")
