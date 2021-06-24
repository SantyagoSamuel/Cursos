# Listas == Arrays


#-------------------------------------------------LISTAS-------------------------------------------------
# Las listas pueden modificar, son flexibles
#
# --> pueden tener datos de distinto tipo
# --> Se pueden sumar
# --> Se pueden multiplicar
# --> Se les puede Agregar elementos
# --> Se les puede Eliminar elementos
# --> Se pueden usar los Slices en ellas
objetos = [1, 'hola', True, 2.6]
objetos2 = ['hi', 4, False]

suma_objetos = objetos + objetos2
print(suma_objetos) # [1, 'hola', True, 2.6, 'hi', 4, False]

multiplicar_objeto = objetos * 5
print(multiplicar_objeto) # [1, 'hola', True, 2.6, 1, 'hola', True, 2.6, 1, 'hola', True, 2.6, 1, 'hola', True, 2.6, 1, 'hola', True, 2.6]

#--->Agregar elementos<----
objetos = objetos.append('new String')
print(objetos)

#--->Eliminar objetos<---
# objetos = objetos.pop(1)
print(objetos)

# Slices
# objetos[::-1]
print(objetos)

for elemento in objetos:
    print(elemento)

#-------------------------------------------------TUPLAS-----------------------------------------------------
# Las tuplas a diferencia de las Listas, estas son inmutables (no mutables)
# A estas no se les puede modificar como a las listas y tienen dato de un solo tipo
numeros = (1, 2, 3, 4, 5, True)

for numero in numeros:
    print(numero)