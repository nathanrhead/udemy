# A python list seems like an array.
us_states = ["Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut", "Massachusetts", "Maryland", "South Carolina", "New Hampshire", "Virginia", "New York", "North Carolina", "Rhode Island", "Vermont", "Kentucky", "Tennessee", "Ohio", "Louisiana", "Indiana", "Mississippi", "Illinois", "Alabama", "Maine", "Missouri", "Arkansas", "Michigan", "Florida", "Texas", "Iowa", "Wisconsin", "California", "Minnesota", "Oregon", "Kansas", "West Virginia", "Nevada", "Nebraska", "Colorado", "North Dakota", "South Dakota", "Montana", "Washington", "Idaho", "Wyoming", "Utah", "Oklahoma", "New Mexico", "Arizona", "Alaska", "Hawaii"]

print(us_states[0]) # -> Delaware
print(us_states[-1]) # -> Hawaii

us_states[1] = 'Pencilvania'
print(us_states[1])

# Add an item to the end of a list.
us_states.append('Washington, D.C.')
print(us_states)
print(len(us_states))

# Merge two lists.
us_territories = ['American Samoa','Guam','Minor Outlying Islands','Northern Mariana Islands','Puerto Rico','U.S. Virgin Islands']
us_states.extend(us_territories)
print(us_states)

# Nested list. (Array matrix.)
fruits = ['Strawberries','Nectarines','Apples','Grapes','Peaches','Cherries','Pears','Tomatoes']
vegetables = ['Spinach','Kale','Celery','Potatoes']
dirty_dozen = [fruits, vegetables]
print(dirty_dozen)
