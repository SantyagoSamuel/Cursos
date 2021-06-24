# Diccionarios == Objetos

def run():
    mi_diccionario = {
        'llave1': 1,
        'llave2': 2,
        'llave3': 3
    }
    # print(mi_diccionario)
    # print(mi_diccionario['llave1'])
    # print(mi_diccionario['llave2'])
    # print(mi_diccionario['llave3'])


    poblacion_paises = {
        'Argentina': 123235,
        'EEUU': 234455,
        'Mexico': 999999
    }
    # print(poblacion_paises['Mexico'])

    for pais in poblacion_paises.keys():
        print(pais)

    for pais in poblacion_paises.values():
        print(pais)

    for pais in poblacion_paises.items():
        print(pais)

    for pais, poblacion in poblacion_paises.items():
        print(pais + ', ' +  str(poblacion))



if __name__ == '__main__':
    run()