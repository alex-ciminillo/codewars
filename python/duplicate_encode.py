from typing import DefaultDict


def duplicate_encode(word):
    #your code here
    a = {}
    a = DefaultDict(lambda:0,a)
    para_str = ""
    for i in word:
        a[i.lower()] += 1
    for i in word:
        if a[i.lower()] > 1:
            para_str += ")"
        else:
            para_str += "("
    return para_str
    

    

str = "recede"
print(duplicate_encode(str))