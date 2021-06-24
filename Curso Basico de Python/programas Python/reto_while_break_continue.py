def run():
    contador = 1
    a = 2
    while a <= 100:
        print (contador)
        contador = contador + 1
        a = a*2
        if a < 20:
            break


if __name__ == '__main__':
    run()