# You are going to write a program that automatically prints the solution to the FizzBuzz game. These are the rules of the FizzBuzz game:

# Your program should print each number from 1 to 100 in turn and include number 100.
# When the number is divisible by 3, instead of printing the number it should print "Fizz".
# When the number is divisible by 5, instead of printing the number it should print "Buzz".`
# And when the number is divisible by both 3 and 5 (e.g., 15), instead of the number it should print "FizzBuzz".

# Example Output:
# 1
# 2
# Fizz
# 4
# Buzz
# Fizz
# 7
# 8
# Fizz
# Buzz
# 11
# Fizz
# 13
# 14
# FizzBuzz
# ...etc

# Hint: Remember that your answer should start from 1 and go up to 100, inclusive.
# Each number/text should be printed on a separate line.

for n in range(1, 101):
  if n % 3 == 0 and n % 5 == 0: print('FizzBuzz')
  elif n % 3 == 0: print('Fizz')
  elif n % 5 == 0: print('Buzz')
  else: print(n)