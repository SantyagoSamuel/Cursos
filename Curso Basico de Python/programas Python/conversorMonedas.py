# Todas las funciones y var deben declararse antes de todo el código

def conversor(pais, precio_dolar):
    pesos = input("inserta la cantidad de pesos " + pais + ": ")
    pesos = float(pesos)
    valor_dolar = precio_dolar
    dolares = pesos / valor_dolar
    dolares = round(dolares, 2)
    dolares = str(dolares)
    print("Tienes $" + dolares + " dólares")


menu = """
Bienvenido al conversor de monedas 💎

1. Pesos Mexicanos
2. Pesos Colombianos
3. Pesos Argentinos

Elige una opción: """


opcion = int(input(menu))


if opcion == 1:
    conversor('Mexicanos', 19.83)
elif opcion == 2:
    conversor('Colombianos', 3875)
elif opcion == 3:
    conversor('Argentinos', 65)
else:
    print('Ingrese una opcion válida del menú')








