-- CONSULTAS DE VERIFICACIÓN:

-- 1. Lista el total de compras de un cliente/a (he seleccionado el cliente con dni 33458789T):

SELECT Cliente.idCliente, Cliente.Nombre, Cliente.Apellido1, Cliente.Apellido2, Gafas.idEncargo, Gafas.Marca
FROM Cliente
JOIN Venta ON Cliente.idCliente = Venta.idCliente
JOIN Gafas ON Venta.idEncargo = Gafas.idEncargo
WHERE Cliente.idCliente = '33458789T';

-- 2. Lista las distintas gafas que ha vendido un empleado durante un año (he seleccionado al empleado número 2 durante el año 2021):

FROM Venta
JOIN Gafas ON Venta.idEncargo = Gafas.idEncargo
JOIN Empleado ON Venta.idEmpleado = Empleado.idEmpleado
WHERE Venta.idEmpleado = 2
AND YEAR(Venta.Fecha_venta) = 2021;

-- 3. Lista a los diferentes proveedores que han suministrado gafas vendidas con éxito por la óptica.

	-- Incluyendo la marca:

SELECT DISTINCT Proveedor.Nif_Proveedor, Proveedor.Nombre, Gafas.Marca
FROM Proveedor
JOIN Gafas ON Proveedor.Nif_Proveedor = Gafas.Nif_Proveedor
JOIN Venta ON Gafas.idEncargo = Venta.idEncargo;

	-- Sin incluir la marca:

SELECT Proveedor.Nif_Proveedor, Proveedor.Nombre
FROM Proveedor
WHERE Proveedor.Nif_Proveedor IN (
    SELECT DISTINCT Gafas.Nif_Proveedor
    FROM Gafas
    JOIN Venta ON Gafas.idEncargo = Venta.idEncargo
);