var x = 4, y = '4'

x == y //true
x === y //false

var samuel = {
    nombre: 'samuel'
}

var santi = {
    nombre: 'samuel'
}

santi == samuel //false
santi === samuel //false

var sam = samuel //se le asigna el mismo espacio de memoria a sam que el de samuel

sam == samuel //true
sam === samuel //true


var otraPersona = {  //se crea un nuevo objeto
    ...samuel
}

otraPersona == samuel //false
otraPersona === samuel //false
