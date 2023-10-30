print('''
*******************************************************************************
          |                   |                  |                     |
 _________|________________.=""_;=.______________|_____________________|_______
|                   |  ,-"_,=""     `"=.|                  |
|___________________|__"=._o`"-._        `"=.______________|___________________
          |                `"=._o`"=._      _`"=._                     |
 _________|_____________________:=._o "=._."_.-="'"=.__________________|_______
|                   |    __.--" , ; `"=._o." ,-"""-._ ".   |
|___________________|_._"  ,. .` ` `` ,  `"-._"-._   ". '__|___________________
          |           |o`"=._` , "` `; .". ,  "-._"-._; ;              |
 _________|___________| ;`-.o`"=._; ." ` '`."\` . "-._ /_______________|_______
|                   | |o;    `"-.o`"=._``  '` " ,__.--o;   |
|___________________|_| ;     (#) `-.o `"=.`_.--"_o.-; ;___|___________________
____/______/______/___|o;._    "      `".o|o_.--"    ;o;____/______/______/____
/______/______/______/_"=._o--._        ; | ;        ; ;/______/______/______/_
____/______/______/______/__"=._o--._   ;o|o;     _._;o;____/______/______/____
/______/______/______/______/____"=._o._; | ;_.--"o.--"_/______/______/______/_
____/______/______/______/______/_____"=.o|o_.--""___/______/______/______/____
/______/______/______/______/______/______/______/______/______/______/_____ /
*******************************************************************************
''')
print("Welcome to Treasure Island, where your mission is to find your way off of it, the greatest treasure in life being home and one's ability to go there.\n") 

#https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Treasure%20Island%20Conditional.drawio#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1oDe4ehjWZipYRsVfeAx2HyB7LCQ8_Fvi%26export%3Ddownload

#Write your code below this line 👇

# Stage One: left or right.
direction = input("Go 'left' or 'right'?: ").lower()
if direction == "left": 
  print("\nYour intuition or bald-faced luck has served you well: you've avoided the hidden quagmire that would have trapped your legs had you gone right, suspending you from your knees like a cornstalk, where you'd either have slowly starved or died a snack for a hungry family of boars.\n")
else: 
  print("Rough start: you've wandered into a hidden quagmire that has trapped your legs, suspending you from your knees like a cornstalk, and you'll either slowly starv or die a snack for a hungry family of boars.\n")
  exit("Game Over.\n")

# Stage two: wait or swim.
action = input("Now you've come to a lake. Do you 'swim' or 'wait'?: ").lower()
if action == 'wait': 
  print("\nYour wisdom belies your years or your lucky star continues to sparkle: a hasty move here and an ungrounded bias for action would have landed you in the jaws of Lil' Sister and her baby crocodiles.\n")
else: 
  print("\nPatience is a virtue, one lost on today's generation and its ill-placed veneration of action: you've landed yourself in the jaws of Lil' Sister, the keeper of the lake, and her brood of crocodiles.\n")
  exit("Game Over.\n")

# Stage three: yellow, blue, or red.
choice = input("You've arrived at an abandoned airport terminal with three entry doors, one 'red', one 'blue', and one 'yellow'; which do you choose?: ").lower()
if choice == 'yellow': 
  print("\nYou've chosen wisely, because behind the yellow door you find a well-appointed, first-class lounge with an open bar, a banner welcoming you to your non-stop flight home, and a ticket with your name and passport information indicated without error. Your flight leaves in 45 minutes. Safe travels.\n")
elif choice == 'blue': 
  print("\nYou've chosen . . . poorly: welcome to the fourth circle of hell, characterized by unquenchable thirst and unreasonable expectations.\n")
  exit("Game Over.\n")
elif choice == 'red': 
  print("\nYou've chosen . . . poorly: welcome to the fourth circle of hell, characterized by treadmills and cold showers.\n")
  exit("Game Over.\n")
else:
  print("\nYou've chosen . . . poorly: welcome to the fourth circle of hell, characterized by Kafkaesque bureaucracy and mealy apples.\n")
  exit("Game Over.\n")

