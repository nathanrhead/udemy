import random

random_float = random.random()

coin_toss = round(random_float)

if 0 == coin_toss : print('Tails')
else : print('Heads')