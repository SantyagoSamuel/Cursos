# Para este programa es necesario entender los sliders

# Los sliders sirven para cortar strings, Ejemplo:
# palabra = 'morteros'
# si queremos cortar 'palabra' ponemos:
# palabra = palabra[0:4] 
# or
# palabra = palabra[:4]
# nuevo valor de palabra: 'mort'

#Ejemplo 2
# palabra = 'morteros'
# palabra = palabra[4:8]
# or
# palabra = palabra [4:]
# nuevo valor de palabra: 'eros'

# es decir, 
# en el lado izquierdo de los dos puntos se pone desde que caracter queremos que guarde
# en el lado derecho de los dos puntos se pone hasta que caracter queremos que guarde
# [posicion_caracter_inicio : posicion_caracter_fin]

# Ejemplo 3
# palabra = palabra[0:8:2]
# ó 
# palabra = palabra[::2]
# nuevo valor: 'mreo'

# ¿Que pasa en el Ejemplo 3?
# en este caso hemos agregado dos puntos más, y la segmentación de los corchetes funciona de la sig manera
# palabra [posicion_caracter_inicio : posicion_caracter_fin : num_de_posiciones_saltadas]
# en el ejemplo 3 se imprime 'mreo' porque tomo encuenta cada 2 caracteres de la palabra
# es decir,
# 'mortero' = 'm-r-e-o' 
# cada guion es un caracter que se omitio

# palabra = palabra[::-1] --> 'soretrom'
# cuando se detectan numeros negativos empieza desde el final hasta el inicio 


#programa
def palindromo(palabra):
    palabra = palabra.replace(' ', '')
    palabra = palabra.lower()
    palabra_invertida = palabra[::-1]
    if palabra == palabra_invertida:
        return True
    else:
        return False    


def run():
    palabra = input('Escribe una palabra: ')
    es_palindromo = palindromo(palabra)

    if es_palindromo == True:
        print('Es palindromo')
    else:
        print('No es palindromo')


if __name__ == '__main__':
    run()
