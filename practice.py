# def scramble(s1, s2):
#     # your code here
#     for x of s2.split(''):
#         print()
#     return i == len(s1)
# print(scramble('rkqodlw', 'world'))
import itertools

def order_weight(strng):
    strng = [(x.strip()) for x in strng.split(' ')]
    totals = []

    for n in strng:
        # print(split(n))

        t = 0
        for c in n:
            t+=int(c)

        totals.append(t)

        

    order =[i for i in totals]
    order.sort()

    for i in range(0,len(order)):

        w = order[i]

        j = totals.index(w)
    
        order[i] = strng[j] 
        strng[j] = None
  
    return " ".join([s for s in order])

    # your code



print(order_weight("103 123 4444 99 2000"))