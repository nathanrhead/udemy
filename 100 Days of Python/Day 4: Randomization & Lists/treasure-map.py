# You are going to write a program that will mark a spot on a map with an X.
# In the starting code, you will find a variable called map.
# This map contains a nested list. When map is printed this is what it looks like, notice the nesting:

# [
#   ['⬜️', '⬜️', '⬜️'],
#   ['⬜️', '⬜️', '⬜️'],
#   ['⬜️', '⬜️', '⬜️']
# ]

# Your job is to write a program that allows you to mark a square on the map using a letter-number system, with letters indicating columns and numberes indicating rows. 

# So an input of A3 should place an X at the position shown below:

# [
#   ['⬜️', '⬜️', '⬜️'],
#   ['⬜️', '⬜️', '⬜️'],
#   ['X', '⬜️', '⬜️']
# ]

# First, your program must take the user input and convert it to a usable format.
# Next, you need to use that input to update your nested list with an "X".

line1 = ["⬜️","️⬜️","️⬜️"]
line2 = ["⬜️","⬜️","️⬜️"]
line3 = ["⬜️","⬜️️","⬜️️"]
map = [line1, line2, line3]
print("Hiding your treasure! X marks the spot.")
position = input() # Where do you want to put the treasure?
# 🚨 Don't change the code above 👆
# Write your code below this row 👇
row = int(position[1]) - 1;
column = 0 if position[0].upper() == 'A' else 1 if position[0].upper() == 'B' else 2;
# Alternately, use the index() method:
# abc = ['a','b','c']
# column = map.index(position[0].lower())
map[row][column] = 'X'
# Write your code above this row 👆
# 🚨 Don't change the code below 👇
print(f"{line1}\n{line2}\n{line3}")