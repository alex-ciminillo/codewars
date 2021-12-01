
#first_attempt
def high_and_low(numbers):
    numbers = numbers.split(' ')
    high = numbers[0]
    low = numbers[0]
    numbers = numbers[1:]
    print(numbers)
    for i in numbers:
        if int(i) > int(high):
            high = i
        if int(i) < int(low):
            low = i
    return f'{high} {low}'


print(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))  # return "5 1"
print(high_and_low("1 2 -3 4 5")) # return "5 -3"
print(high_and_low("1 9 3 4 -5")) # return "9 -5"