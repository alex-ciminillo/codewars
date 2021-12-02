from typing import DefaultDict

# #first attempt 
# def duplicate_encode(word):
#     a = {}
#     a = DefaultDict(lambda:0,a)
#     para_str = ""
#     for i in word:
#         a[i.lower()] += 1
#     for i in word:
#         if a[i.lower()] > 1:
#             para_str += ")"
#         else:
#             para_str += "("
#     return para_str
    

#one_liner
def duplicate_encode(word):
    return "".join("(" if word.lower().count(c) == 1 else ")" for c in word.lower())


    

str = "recede"
print(duplicate_encode(str))