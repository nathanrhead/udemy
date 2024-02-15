import random;

# Mapped to 0.
rock = '''
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
'''

# Mapped to 1.
paper = '''
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
'''

# Mapped to 2.
scissors = '''
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
'''

winner = ''
plays = [rock, paper, scissors]

# Store the user's input.
while True:
  try:
    player = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors: \n"))
    break
  except ValueError:
    print('The value must be a number between 0 and 2')

# Generate a random choice for the computer.
computer = random.randint(0,2)

# Compare the user's and the computer's choice to determine the winner (or a draw).
# 2 beats 1
# 1 beats 0
# 0 beats 2

if player > computer :
  if 0 != computer : winner = player
  else :
    winner = computer if player == 2 else player
else :
  if 0 != player : winner = computer
  else :
    winner = player if computer == 2 else computer

if player == computer : winner = "It's a tie."
if player > 2 : winner = 'You lose for typing an invalid entry!'

# Give feedback to the player.
if player >= 0 and player <=2 :
  print(f'player: {plays[player]}')
  print(f'computer: {plays[computer]}')
  print("It's a tie." if player == computer else f'winner: {plays[winner]}')
else :
  print(winner)


