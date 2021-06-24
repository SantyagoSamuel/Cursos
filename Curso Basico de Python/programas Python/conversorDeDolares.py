dolares = input("inserte la cantidad de dolares: ")
dolares = float(dolares)

valor_peso_mx = 0.050
pesos_mx = dolares / valor_peso_mx
pesos_mx = round(pesos_mx, 2)
pesos_mx = str(pesos_mx)

print("Tienes: $" + pesos_mx + " MXN (pesos mexicanos).")