-- CONSULTAS DE PRUEBA:

-- PRUEBA 1: Lista cuántos productos de tipo “Bebidas” se han vendido en una determinada localidad.

-- Para la localidad de Martorell (con los datos de prueba introducidos, deberían salir 4):
SELECT SUM(pedidos.cantidadBebidas) AS Total_Bebidas_Martorell
FROM Pizzeria.pedidos
JOIN Pizzeria.tiendas ON pedidos.idTienda = tiendas.idTienda
WHERE tiendas.localidadTienda = 'Martorell';

-- Para la localidad de Abrera (con los datos de prueba introducidos, deberían salir 0):
SELECT SUM(pedidos.cantidadBebidas) AS Total_Bebidas_Abrera
FROM Pizzeria.pedidos
JOIN Pizzeria.tiendas ON pedidos.idTienda = tiendas.idTienda
WHERE tiendas.localidadTienda = 'Abrera';

-- Para la localidad de Alcorcón (con los datos de prueba introducidos, deberían salir 2):
SELECT SUM(pedidos.cantidadBebidas) AS Total_Bebidas_Alcorcón
FROM Pizzeria.pedidos
JOIN Pizzeria.tiendas ON pedidos.idTienda = tiendas.idTienda
WHERE tiendas.localidadTienda = 'Alcorcón';

-- PRUEBA 2: Lista cuántos pedidos ha efectuado un determinado empleado/a.

-- Para el empleado Laura Fernandez (idEmpleado=2) debería salir 1 pedido:
SELECT *
FROM Pizzeria.pedidos
WHERE idEmpleado = 2;

-- Para el empleado María Pérez (idEmpleado=8) deberían salir 0 pedidos:
SELECT *
FROM Pizzeria.pedidos
WHERE idEmpleado = 8;