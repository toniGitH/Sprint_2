-- DATOS DE PRUEBA

-- Datos de proveedores:

INSERT INTO `optica`.`proveedor` (`Nif_Proveedor`, `Nombre`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Telefono`) VALUES ('54123854H', 'Gafas Pedro', 'Lisboa', '15', '1', '4', 'Madrid', '28080', 'España', '654321854');
INSERT INTO `optica`.`proveedor` (`Nif_Proveedor`, `Nombre`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Telefono`, `Fax`) VALUES ('A45877452', 'TodoGafas', 'Oporto', '14', '3', '5', 'Madrid', '28760', 'España', '647821477', '915478569');
INSERT INTO `optica`.`proveedor` (`Nif_Proveedor`, `Nombre`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Telefono`) VALUES ('A85495236', 'Gafas Locas', 'Zueich', '56', '1', '2', 'Madrid', '28542', 'España', '687541258');
INSERT INTO `optica`.`proveedor` (`Nif_Proveedor`, `Nombre`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Telefono`, `Fax`) VALUES ('B85478325', 'Tus Gafas', 'Toledo', '1', '6', 'B', 'Barcelona', '08780', 'España', '698412785', '934567892');
INSERT INTO `optica`.`proveedor` (`Nif_Proveedor`, `Nombre`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Telefono`) VALUES ('A86547924', 'Gafas maravillosas', 'Oviedo', '3', '4', 'A', 'Barcelona', '08965', 'España', '934567891');

-- Datos de clientes:

INSERT INTO `optica`.`cliente` (`idCliente`, `Nombre`, `Apellido1`, `Apellido2`, `Telefono`, `Email`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Fecha_alta`) VALUES ('33458789T', 'Nuria', 'Puyol', 'Lara', '985741852', 'tengoemail@email.com', 'Granada', '5', '5', 'A', 'Madrid', '28065', 'España', '2020-05-15');
INSERT INTO `optica`.`cliente` (`idCliente`, `Nombre`, `Apellido1`, `Apellido2`, `Telefono`, `Email`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Fecha_alta`) VALUES ('33123456R', 'Javier', 'Maroto', 'Maroto', '916198918', 'javier@email.com', 'Porto Cristo', '7', '2', 'C', 'Madrid', '28945', 'España', '2019-01-02');
INSERT INTO `optica`.`cliente` (`idCliente`, `Nombre`, `Apellido1`, `Apellido2`, `Telefono`, `Email`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Fecha_alta`, `idPrescriptor`) VALUES ('07425896G', 'Luisa', 'Maroto', 'Perez', '916198918', 'luisa@email.com', 'Porto Cristo', '7', '2', 'C', 'Madrid', '28945', 'España', '2020-01-15', '33123456R');
INSERT INTO `optica`.`cliente` (`idCliente`, `Nombre`, `Apellido1`, `Apellido2`, `Telefono`, `Email`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Fecha_alta`) VALUES ('32545236H', 'Pedro', 'Gonzalez', 'Martin', '937785412', 'pedro@email.com', 'Martorell', '14', '2', '1', 'Barcelona', '08765', 'España', '2021-08-24');
INSERT INTO `optica`.`cliente` (`idCliente`, `Nombre`, `Apellido1`, `Apellido2`, `Telefono`, `Email`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Fecha_alta`, `idPrescriptor`) VALUES ('36456852E', 'Juan', 'Gonzalez', 'Rodriguez', '937785412', 'juan@email.com', 'Abrera', '2', '8', '4', 'Barcelona', '08546', 'España', '2022-06-12', '32545236H');
INSERT INTO `optica`.`cliente` (`idCliente`, `Nombre`, `Apellido1`, `Apellido2`, `Telefono`, `Email`, `Calle`, `Numero`, `Piso`, `Puerta`, `Ciudad`, `CP`, `Pais`, `Fecha_alta`) VALUES ('44563214P', 'Antonio', 'Rincón', 'Sancho', '654321456', 'antonio@email.com', 'Jardines', '6', '2', '2', 'Barcelona', '08123', 'España', '2023-05-05');


-- Datos de empleados:

INSERT INTO `optica`.`empleado` (`idEmpleado`, `Nombre`, `Apellido1`, `Apellido2`) VALUES ('1', 'Alberto', 'Fernandez', 'Lopez');
INSERT INTO `optica`.`empleado` (`idEmpleado`, `Nombre`, `Apellido1`, `Apellido2`) VALUES ('2', 'Victor', 'Hurtado', 'Mendoza');


-- Encargos de gafas:

INSERT INTO `optica`.`gafas` (`Marca`, `Precio`, `Tipo_montura`, `Color_montura`, `Graduacion_Izda`, `Graduacion_Dcha`, `Color_Izda`, `Color_Dcha`, `Nif_Proveedor`, `idCliente`) VALUES ('Beneton', '100', 'flotante', 'rojo', '0.25', '0.25', 'negro', 'negro', 'A45877452', '33458789T');
INSERT INTO `optica`.`gafas` (`Marca`, `Precio`, `Tipo_montura`, `Color_montura`, `Graduacion_Izda`, `Graduacion_Dcha`, `Color_Izda`, `Color_Dcha`, `Nif_Proveedor`, `idCliente`) VALUES ('Vogue', '200', 'flotante', 'azul', '0.15', '0.18', 'verde', 'verde', 'A45877452', '33458789T');
INSERT INTO `optica`.`gafas` (`Marca`, `Precio`, `Tipo_montura`, `Color_montura`, `Graduacion_Izda`, `Graduacion_Dcha`, `Color_Izda`, `Color_Dcha`, `Nif_Proveedor`, `idCliente`) VALUES ('Adolfo Dominguez', '150', 'pasta', 'verde', '0.08', '0.08', 'lila', 'lila', 'A85495236', '07425896G');
INSERT INTO `optica`.`gafas` (`Marca`, `Precio`, `Tipo_montura`, `Color_montura`, `Graduacion_Izda`, `Graduacion_Dcha`, `Color_Izda`, `Color_Dcha`, `Nif_Proveedor`, `idCliente`) VALUES ('RayBan', '350', 'metálica', 'negro', '0', '0', 'negro', 'negro', 'A85495236', '33458789T');
INSERT INTO `optica`.`gafas` (`Marca`, `Precio`, `Tipo_montura`, `Color_montura`, `Graduacion_Izda`, `Graduacion_Dcha`, `Color_Izda`, `Color_Dcha`, `Nif_Proveedor`, `idCliente`) VALUES ('Ferrari', '600', 'pasta', 'rojo', '0.15', '0.18', 'rojo', 'negro', 'A86547924', '32545236H');


-- Ventas de gafas:

INSERT INTO `optica`.`venta` (`idVenta`, `idEncargo`, `Fecha_venta`, `idEmpleado`, `idCliente`) VALUES (NULL, '1', '2020-05-05', '1', '33458789T');
INSERT INTO `optica`.`venta` (`idVenta`, `idEncargo`, `Fecha_venta`, `idEmpleado`, `idCliente`) VALUES (NULL, '2', '2021-06-03', '2', '33458789T');
INSERT INTO `optica`.`venta` (`idVenta`, `idEncargo`, `Fecha_venta`, `idEmpleado`, `idCliente`) VALUES (NULL, '4', '2022-08-30', '2', '33458789T');
INSERT INTO `optica`.`venta` (`idVenta`, `idEncargo`, `Fecha_venta`, `idEmpleado`, `idCliente`) VALUES (NULL, '5', '2021-10-24', '1', '32545236H');


