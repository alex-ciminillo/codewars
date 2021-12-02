
# #first attempt
# def disemvowel(string_):
#     vowels = 'aeiou'
#     new_string = ""
#     for i in string_:
#         if i.lower() not in vowels:
#             new_string += i
#     print(new_string)
#     return new_string

# #optimized
# def disemvowel(string_):
#     return "".join(c for c in str if c.lower() not in "aeiou")

#optimized 2
def disemvowel(s):
    return s.translate(str.maketrans('','',"aeiouAEIOU"))

str = 'I am a super cool dude! Look at me!'
print(disemvowel(str))