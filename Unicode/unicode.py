j = 0
print('\t', end='')
for i in range(0, 0x10):
    print('%x'%(i), end='\t')
for i in range(0, 0xffff):
    if(j % 0x10 == 0):
        print('\n' + ('%x'%(i)) + '\t', end='')
    print(chr(i), end='\t')
    j += 1


