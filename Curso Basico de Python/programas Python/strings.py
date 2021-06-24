# En el siguiente programa se utilizan las funciones mas usadas para los strings :)

# funciones
def cambiar_caracter(old_char, new_char, nombre):
    nombre = nombre.replace(old_char, new_char)
    print(nombre)

def ver_caracter(caracter_posicion):
    caracter_a_ver = nombre[caracter_posicion]
    caracter_posicion = str(caracter_posicion)
    print('el caracter que está en la posicion ' + caracter_posicion + ' es ' + caracter_a_ver)
    return caracter_a_ver

def cortar_palabra (palabra, inicio_corte, fin_corte):
    palabra = palabra[inicio_corte:fin_corte]
    print('El resultado del recorte es: ' + palabra)



# Inicio (Main)
nombre = input('¿Cual es tu nombre?: ')

menu = """
Bienvenido al modificador de datos 😃

en el modificador de datos puedes hacer lo siguiente:

1. Convertir a mayúsculas
2. Convertir a minúsculas
3. Eliminar espacios laterales
4. Remplazar carácteres
5. Hacer Mayúscula la primer letra
6. ver la letra en una posición
7. ver numero de caracteres 
8. seleccionar un fragmento del texto (partir texto)

Elige una opción: """

opcion = int(input(menu))   


if opcion == 1:
    nombre = nombre.upper()
    print(nombre)
elif opcion == 2:
    nombre = nombre.lower()
    print(nombre)
elif opcion == 3:
    nombre = nombre.strip()
    print(nombre)
elif opcion == 4:
    caracter_quitado = input('¿Qué letra ó carácter deseas cambiar?: ')
    caracter_nuevo = input('¿Qué letra ó carácter nuevo deseas poner en su lugar?: ')
    cambiar_caracter(caracter_quitado, caracter_nuevo, nombre)
    print(nombre)
elif opcion == 5:
    nombre = nombre.capitalize()
    print(nombre)
elif opcion == 6:
    posicion_char = int(input('¿Qué letra quieres ver?(pon la posicion de la letra empezando con la posicion 0): '))
    ver_caracter(posicion_char)
elif opcion == 7:
    print(len(nombre))
elif opcion == 8:
    posicion_iniciar_corte = int(input('¿En que posición desea que inicie el nuevo fragmento del texto?: '))
    posicion_finalizar_corte = int(input('¿En que posición desea que termine el nuevo fragmento del texto?: '))
    cortar_palabra(nombre, posicion_iniciar_corte, posicion_finalizar_corte)
else:
    print('Inserta una opción correcta por favor')
    