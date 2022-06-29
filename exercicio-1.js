let a = 999
let b = 555
let c = null

c = a
a = b
b = c

// apenas duas variaveis 

a = a + b
b = a - b
a = a - b


alert(`O valor de a ${a} o valor de b ${b}`)