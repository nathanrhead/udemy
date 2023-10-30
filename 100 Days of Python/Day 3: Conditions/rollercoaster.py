# Conditionals.
print('Welcome to the rollercoaster!')
height = int(input('What is your height in inches?: '))
age = int(input('How old are you?: '))
photo = input('Would you like your photo taken (Y or N) for $3?: ')
bill = 0

# Other operators: ==, !=
if height >= 48: 
  print('You may ride the rollercoaster.')
  if age < 12:
    bill = 5
    print('The cost of a ticket for children under 12 is $5.')
  elif age <= 18:
    bill = 7
    print('The cost of a ticket for visitors between the ages of 12 and 18 is $7.')
  elif age < 45 or age > 55: # Midlife crisis exemption.
    bill = 12
    print(f'Ian is {age}')
    print('The cost of a ticket for adults is $12.')

  if photo == 'Y' or photo == 'y':
    bill += 3
    
  print(f'Your total ticket price is ${bill}')
else: 
  print('Come back when you\'re a tad taller.')
