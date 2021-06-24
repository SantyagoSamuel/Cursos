def es_primo(numero):
    contador = 0

    if numero == 1:
        contador += 1

    #Aquí salta el continue
    for i in range(1, numero + 1):
        if i == 1 or i == numero:
            continue # El continue salta lo que sigue y continua con el ciclo, es decir 
        if numero % i == 0:
            contador += 1

    if contador == 0:
        return True
    else:
        return False


def run():
    numero = int(input('Escribe un numero: '))
    if es_primo(numero):
        print('Es primo')
    else:
        print('No es primo')



if __name__ == '__main__':
    run()