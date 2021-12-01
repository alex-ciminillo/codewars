
#first attempt
def disemvowel(string_):
    vowels = 'aeiou'
    new_string = ""
    for i in string_:
        if i.lower() not in vowels:
            new_string += i
    print(new_string)
    return new_string