# You are going to write a program that calculates the average student height from a List of heights.
# e.g. student_heights = [180, 124, 165, 173, 189, 169, 146].

# The average height can be calculated by adding all the heights together and dividing by the total number of heights.
# The average height should be rounded to the nearest whole number = 164.

# Important: You should not use the sum() or len() functions in your answer. You should try to replicate their functionality using what you have learnt about for loops.

# Example Input 1

# 156 178 165 171 187
# In this case, student_heights would be a list that looks like: [156, 178, 165, 171, 187]

# Example Output 1

# total height = 857
# number of students = 5
# average height = 171

#-----------------------------------------------------------------------------------------#

# Input students' heights, each separated by a space, and create a Python list out of it.
print("Input students' heights, each separated by a space.")
student_heights = input().split()

# Change the heights from strings to integers.
for n in range(0, len(student_heights)):
  student_heights[n] = int(student_heights[n])
# 🚨 Don't change the code above 👆
total_height = 0
average_height = 0
num_of_students = 0

for height in student_heights:
  total_height += height
  num_of_students += 1

if num_of_students: average_height = round(total_height / num_of_students)
else: print('No heights were entered.')

print(f"total height = {total_height}")
print(f"number of students = {num_of_students}")
print(f'average height = {average_height}')

