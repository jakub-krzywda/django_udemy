from random import randint


def check_code(guess, code):
    if guess == code:
        return False
    elif any(guess_digit == code_digit for guess_digit, code_digit in zip(guess, code)):
        print('match')
        return True
    elif any((digit in code for digit in guess)):
        print('close')
        return True
    else:
        print('nope')
        return True


print("Welcome Code Breaker! Let's see if you can guess my 3 digit number!")
code = str(randint(0, 1000))
game_ongoing = True
while game_ongoing:
    guess = input('Enter your guess\n')
    game_ongoing = check_code(guess, code)
print(f'You Won! The code was {code}')
