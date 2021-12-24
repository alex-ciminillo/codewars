
# #first attempt
# def order(sentence):
#     if sentence == "":
#         return ""
#     order_dict = {}
#     for word in sentence.split(" "):
#         for char in word:
#             if char.isdigit():
#                 order_dict[int(char)] = word
#     ordered_str = []
#     for i in range(1, (len(sentence.split(" ")) + 1)):
#         ordered_str += [order_dict[i]]
#     return ' '.join(ordered_str)
  
#optimized in one line!
def order(sentence):
    return ' '.join(sorted(sentence.split(), key=lambda w:sorted(w)))
    
str = "is2 Thi1s T4est 3a"
print(order(str))