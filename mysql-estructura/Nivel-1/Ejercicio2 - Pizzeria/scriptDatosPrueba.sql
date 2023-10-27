-- DATOS DE PRUEBA

-- 1. Categorías de pizzas:

INSERT INTO Pizzeria.cat_pizzas (nombreCatPizza) VALUES
('Clásicas'),
('Especiales'),
('Vegetarianas');

-- 2. Productos:

INSERT INTO Pizzeria.productos (idCatPizza, tipoProducto, nombreProducto, precioUd, descripcionProducto, imagenProducto) VALUES
(1, 'pizza', 'Pizza Margarita', 10.00, 'Deliciosa pizza con tomate y queso', 'margarita.jpg'),
(1, 'pizza', 'Pizza Pepperoni', 11.50, 'Pizza con pepperoni y queso', 'pepperoni.jpg'),
(1, 'pizza', 'Pizza Hawaiana', 12.00, 'Pizza con jamón y piña', 'hawaiana.jpg'),
(1, 'pizza', 'Pizza Vegetariana', 11.50, 'Pizza con vegetales frescos', 'vegetariana.jpg'),
(1, 'pizza', 'Pizza Barbacoa', 13.00, 'Pizza con carne de res y salsa barbacoa', 'barbacoa.jpg'),
(NULL, 'burguer', 'Hamburguesa Clásica', 8.00, 'Hamburguesa con carne de res, lechuga y tomate', 'clasica.jpg'),
(NULL, 'burguer', 'Hamburguesa de Pollo', 8.50, 'Hamburguesa de pollo con lechuga y mayonesa', 'pollo.jpg'),
(NULL, 'burguer', 'Hamburguesa Vegetariana', 7.50, 'Hamburguesa vegetariana con queso y vegetales', 'vegetariana.jpg'),
(NULL, 'burguer', 'Hamburguesa Doble Queso', 9.00, 'Hamburguesa doble con queso y bacon', 'doblequeso.jpg'),
(NULL, 'burguer', 'Hamburguesa de Pescado', 9.50, 'Hamburguesa de pescado con salsa tártara', 'pescado.jpg'),
(NULL, 'bebida', 'Coca-Cola', 2.50, 'Refresco de cola en lata', 'cocacola.jpg'),
(NULL, 'bebida', 'Pepsi', 2.50, 'Refresco de cola Pepsi en lata', 'pepsi.jpg'),
(NULL, 'bebida', 'Agua Mineral', 1.50, 'Botella de agua mineral sin gas', 'agua.jpg'),
(NULL, 'bebida', 'Jugo de Naranja', 3.00, 'Jugo de naranja recién exprimido', 'naranja.jpg'),
(NULL, 'bebida', 'Limonada', 2.75, 'Refresco de limón refrescante', 'limonada.jpg');

-- 3. Clientes:

INSERT INTO Pizzeria.clientes (nombreCliente, apellidosCliente, direccionCliente, localidadCliente, cpCliente, provinciaCliente, telefonoCliente) VALUES
('Juan', 'Pérez', 'Calle Barcelona 1', 'Barcelona', 08001, 'Barcelona', 123456789),
('María', 'García', 'Calle Barcelona 2', 'Barcelona', 08002, 'Barcelona', 234567890),
('Antonio', 'Martínez', 'Calle Madrid 1', 'Madrid', 28001, 'Madrid', 345678901),
('Luisa', 'Sánchez', 'Calle Madrid 2', 'Madrid', 28002, 'Madrid', 456789012),
('Ana', 'López', 'Calle Barcelona 3', 'Barcelona', 08003, 'Barcelona', 567890123),
('Javier', 'Fernández', 'Calle Barcelona 4', 'Barcelona', 08004, 'Barcelona', 678901234),
('Elena', 'Rodríguez', 'Calle Madrid 3', 'Madrid', 28003, 'Madrid', 789012345),
('Carlos', 'Jiménez', 'Calle Madrid 4', 'Madrid', 28004, 'Madrid', 890123456);

-- 4. Tiendas:

INSERT INTO Pizzeria.tiendas (nombreTienda, localidadTienda, CPtienda, provinciaTienda) VALUES
('Pizzeria Martorell', 'Martorell', 08760, 'Barcelona'),
('Pizzeria Abrera', 'Abrera', 08630, 'Barcelona'),
('Pizzeria Alcorcón', 'Alcorcón', 28922, 'Madrid'),
('Pizzeria Fuenlabrada', 'Fuenlabrada', 28942, 'Madrid');

-- 5. Empleados:

INSERT INTO Pizzeria.empleados (idTienda, nombreEmpleado, apellidosEmpleado, dniEmpleado, telefonoEmpleado, funcion) VALUES
(1, 'Javier', 'González', '12345678A', 612345678, 'cocinero'),
(1, 'Laura', 'Fernández', '87654321B', 623456789, 'repartidor'),
(2, 'Carlos', 'Martínez', '23456789C', 634567890, 'cocinero'),
(2, 'Ana', 'López', '98765432D', 645678901, 'repartidor'),
(3, 'David', 'Sánchez', '34567890E', 656789012, 'cocinero'),
(3, 'Elena', 'Rodríguez', '76543210F', 667890123, 'repartidor'),
(4, 'Sergio', 'Gómez', '45678901G', 678901234, 'cocinero'),
(4, 'María', 'Pérez', '65432109H', 689012345, 'repartidor');

-- 6. Pedidos:

INSERT INTO Pizzeria.pedidos (idCliente, idEmpleado, idTienda, momentoPeticion, tipoEntrega, cantidadPizzas, cantidadBurguers, cantidadBebidas, precioTotal, momentoEntrega) VALUES
(1, NULL, 1, '2023-10-26 12:00:00', 'local', 2, 0, 0, 20.00, '2023-10-26 12:45:00'),
(2, NULL, 2, '2023-10-26 12:15:00', 'local', 3, 0, 0, 30.00, '2023-10-26 13:00:00'),
(3, 3, 3, '2023-10-26 12:30:00', 'domicilio', 2, 1, 2, 51.00, '2023-10-26 13:00:00'),
(4, 4, 4, '2023-10-26 12:45:00', 'domicilio', 1, 2, 1, 39.00, '2023-10-26 13:15:00'),
(5, 1, 1, '2023-10-26 13:00:00', 'domicilio', 2, 0, 3, 20.00, '2023-10-26 13:30:00'),
(6, 2, 1, '2023-10-26 13:15:00', 'domicilio', 1, 0, 0, 10.00, '2023-10-26 13:45:00'),
(7, 1, 1, '2023-10-26 13:30:00', 'domicilio', 2, 0, 1, 20.00, '2023-10-26 14:00:00');

-- 7. Detalles de pedidos:

INSERT INTO Pizzeria.detalles_pedido (idPedido, idProducto, unidadesPedidas, subtotal) VALUES
(1, 1, 2, 20.00),
(2, 1, 3, 30.00),
(3, 5, 2, 26.00),
(3, 6, 1, 8.00),
(3, 7, 2, 17.00),
(4, 4, 1, 11.50),
(4, 9, 2, 18.00),
(4, 10, 1, 9.50),
(5, 1, 2, 20.00),
(6, 1, 1, 10.00),
(7, 1, 2, 20.00);


