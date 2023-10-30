# Write a program that interprets the Body Mass Index (BMI) based on a user's weight and height (BMI = w/h^2).
# It should reley the interpretation of their BMI based on the following values:

# - Under 18.5 they are underweight
# - Over 18.5 but below 25 they have a normal weight
# - Equal to or over 25 but below 30 they are slightly overweight
# - Equal to or over 30 but below 35 they are obese
# - Equal to or over 35 they are clinically obese.

# Example Input 1:
# height: 1.50
# weight: 63

# Example Output 1:
# Your BMI is 28.0, you are slightly overweight.

# Enter your height in meters e.g., 1.55
height = float(input())
# Enter your weight in kilograms e.g., 72
weight = float(input())
# Don't change the code above
#Write your code below this line
bmi = int(weight)/(height**2)
if bmi < 18.5: print(f"Your BMI is {bmi}, you are underweight.")
elif bmi < 25: print(f"Your BMI is {bmi}, you are of normal weight.")
elif bmi < 30: print(f"Your BMI is {bmi}, you are slightly overweight.")
elif bmi < 35: print(f"Your BMI is {bmi}, you are obese.")
else: print(f"Your BMI is {bmi}, you are clinically obese.")
