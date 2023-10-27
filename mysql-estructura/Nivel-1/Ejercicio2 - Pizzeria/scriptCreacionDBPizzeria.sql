-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Pizzeria
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Pizzeria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Pizzeria` DEFAULT CHARACTER SET utf8 ;
USE `Pizzeria` ;

-- -----------------------------------------------------
-- Table `Pizzeria`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzeria`.`clientes` (
  `idCliente` INT NOT NULL AUTO_INCREMENT,
  `nombreCliente` VARCHAR(45) NOT NULL,
  `apellidosCliente` VARCHAR(255) NOT NULL,
  `direccionCliente` VARCHAR(255) NOT NULL,
  `localidadCliente` VARCHAR(45) NOT NULL,
  `cpCliente` INT NOT NULL,
  `provinciaCliente` VARCHAR(45) NOT NULL,
  `telefonoCliente` INT NOT NULL,
  PRIMARY KEY (`idCliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzeria`.`tiendas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzeria`.`tiendas` (
  `idTienda` INT NOT NULL AUTO_INCREMENT,
  `nombreTienda` VARCHAR(45) NOT NULL,
  `localidadTienda` VARCHAR(45) NOT NULL,
  `CPtienda` INT NOT NULL,
  `provinciaTienda` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTienda`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzeria`.`empleados`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzeria`.`empleados` (
  `idEmpleado` INT NOT NULL AUTO_INCREMENT,
  `idTienda` INT NOT NULL,
  `nombreEmpleado` VARCHAR(45) NOT NULL,
  `apellidosEmpleado` VARCHAR(255) NOT NULL,
  `dniEmpleado` VARCHAR(15) NOT NULL,
  `telefonoEmpleado` INT NOT NULL,
  `funcion` ENUM("repartidor", "cocinero") NOT NULL,
  PRIMARY KEY (`idEmpleado`),
  INDEX `fk_empleados_tiendas1_idx` (`idTienda` ASC),
  CONSTRAINT `fk_empleados_tiendas1`
    FOREIGN KEY (`idTienda`)
    REFERENCES `Pizzeria`.`tiendas` (`idTienda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzeria`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzeria`.`pedidos` (
  `idPedido` INT NOT NULL AUTO_INCREMENT,
  `idCliente` INT NOT NULL,
  `idEmpleado` INT NULL,
  `idTienda` INT NOT NULL,
  `momentoPeticion` DATETIME NOT NULL,
  `tipoEntrega` ENUM("local", "domicilio") NOT NULL,
  `cantidadPizzas` INT NULL,
  `cantidadBurguers` INT NULL,
  `cantidadBebidas` INT NULL,
  `precioTotal` DECIMAL(5,2) NOT NULL,
  `momentoEntrega` DATETIME NULL,
  PRIMARY KEY (`idPedido`),
  INDEX `fk_pedidos_clientes_idx` (`idCliente` ASC),
  INDEX `fk_pedidos_empleados1_idx` (`idEmpleado` ASC),
  INDEX `fk_pedidos_tiendas1_idx` (`idTienda` ASC),
  CONSTRAINT `fk_pedidos_clientes`
    FOREIGN KEY (`idCliente`)
    REFERENCES `Pizzeria`.`clientes` (`idCliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_empleados1`
    FOREIGN KEY (`idEmpleado`)
    REFERENCES `Pizzeria`.`empleados` (`idEmpleado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_tiendas1`
    FOREIGN KEY (`idTienda`)
    REFERENCES `Pizzeria`.`tiendas` (`idTienda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzeria`.`cat_pizzas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzeria`.`cat_pizzas` (
  `idCatPizza` INT NOT NULL AUTO_INCREMENT,
  `nombreCatPizza` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCatPizza`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzeria`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzeria`.`productos` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `idCatPizza` INT NULL,
  `tipoProducto` ENUM("pizza", "burguer", "bebida") NOT NULL,
  `nombreProducto` VARCHAR(45) NOT NULL,
  `precioUd` DECIMAL(5,2) NOT NULL,
  `descripcionProducto` VARCHAR(255) NOT NULL,
  `imagenProducto` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`idProducto`),
  INDEX `fk_productos_cat_pizzas1_idx` (`idCatPizza` ASC),
  CONSTRAINT `fk_productos_cat_pizzas1`
    FOREIGN KEY (`idCatPizza`)
    REFERENCES `Pizzeria`.`cat_pizzas` (`idCatPizza`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Pizzeria`.`detalles_pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Pizzeria`.`detalles_pedido` (
  `idPedido` INT NOT NULL,
  `idProducto` INT NOT NULL,
  `unidadesPedidas` INT NOT NULL,
  `subtotal` DECIMAL(5,2) NOT NULL,
  INDEX `fk_pedidos_has_productos_productos1_idx` (`idProducto` ASC),
  INDEX `fk_pedidos_has_productos_pedidos1_idx` (`idPedido` ASC),
  PRIMARY KEY (`idPedido`, `idProducto`),
  CONSTRAINT `fk_pedidos_has_productos_pedidos1`
    FOREIGN KEY (`idPedido`)
    REFERENCES `Pizzeria`.`pedidos` (`idPedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_has_productos_productos1`
    FOREIGN KEY (`idProducto`)
    REFERENCES `Pizzeria`.`productos` (`idProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
