-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Optica
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Optica
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Optica` DEFAULT CHARACTER SET utf8 ;
USE `Optica` ;

-- -----------------------------------------------------
-- Table `Optica`.`Proveedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Optica`.`Proveedor` (
  `Nif_Proveedor` VARCHAR(15) NOT NULL,
  `Nombre` VARCHAR(255) NOT NULL,
  `Calle` VARCHAR(255) NOT NULL,
  `Numero` INT NOT NULL,
  `Piso` INT NOT NULL,
  `Puerta` VARCHAR(3) NOT NULL,
  `Ciudad` VARCHAR(45) NOT NULL,
  `CP` INT NOT NULL,
  `Pais` VARCHAR(45) NOT NULL,
  `Telefono` INT NOT NULL,
  `Fax` INT NULL,
  PRIMARY KEY (`Nif_Proveedor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Optica`.`Cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Optica`.`Cliente` (
  `idCliente` VARCHAR(15) NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido1` VARCHAR(45) NOT NULL,
  `Apellido2` VARCHAR(45) NOT NULL,
  `Telefono` INT NOT NULL,
  `Email` VARCHAR(75) NULL,
  `Calle` VARCHAR(255) NOT NULL,
  `Numero` INT NOT NULL,
  `Piso` INT NOT NULL,
  `Puerta` VARCHAR(3) NOT NULL,
  `Ciudad` VARCHAR(45) NOT NULL,
  `CP` INT NOT NULL,
  `Pais` VARCHAR(45) NOT NULL,
  `Fecha_alta` DATE NOT NULL,
  `idPrescriptor` VARCHAR(15) NULL,
  PRIMARY KEY (`idCliente`),
  INDEX `fk_Cliente_Cliente_idx` (`idPrescriptor` ASC),
  CONSTRAINT `fk_Cliente_Cliente`
    FOREIGN KEY (`idPrescriptor`)
    REFERENCES `Optica`.`Cliente` (`idCliente`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Optica`.`Gafas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Optica`.`Gafas` (
  `idEncargo` INT NOT NULL AUTO_INCREMENT,
  `Marca` VARCHAR(45) NOT NULL,
  `Precio` DECIMAL(5,2) NOT NULL,
  `Tipo_montura` ENUM("flotante", "pasta", "metalica") NOT NULL,
  `Color_montura` VARCHAR(25) NULL,
  `Graduacion_Izda` DECIMAL(4,2) NULL,
  `Graduacion_Dcha` DECIMAL(4,2) NULL,
  `Color_Izda` VARCHAR(25) NULL,
  `Color_Dcha` VARCHAR(25) NULL,
  `Nif_Proveedor` VARCHAR(15) NOT NULL,
  `idCliente` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idEncargo`),
  INDEX `fk_Gafas_Proveedor1_idx` (`Nif_Proveedor` ASC),
  INDEX `fk_Gafas_Cliente1_idx` (`idCliente` ASC),
  CONSTRAINT `fk_Gafas_Proveedor1`
    FOREIGN KEY (`Nif_Proveedor`)
    REFERENCES `Optica`.`Proveedor` (`Nif_Proveedor`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Gafas_Cliente1`
    FOREIGN KEY (`idCliente`)
    REFERENCES `Optica`.`Cliente` (`idCliente`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Optica`.`Empleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Optica`.`Empleado` (
  `idEmpleado` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido1` VARCHAR(45) NOT NULL,
  `Apellido2` VARCHAR(45) NULL,
  PRIMARY KEY (`idEmpleado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Optica`.`Venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Optica`.`Venta` (
  `idVenta` INT NOT NULL AUTO_INCREMENT,
  `idEncargo` INT NOT NULL,
  `Fecha_venta` DATE NOT NULL,
  `idEmpleado` INT NOT NULL,
  `idCliente` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idVenta`, `idEncargo`),
  INDEX `fk_Venta_Empleado1_idx` (`idEmpleado` ASC),
  INDEX `fk_Venta_Cliente1_idx` (`idCliente` ASC),
  INDEX `fk_Venta_Gafas1_idx` (`idEncargo` ASC),
  UNIQUE INDEX `idEncargo_UNIQUE` (`idEncargo` ASC),
  CONSTRAINT `fk_Venta_Empleado1`
    FOREIGN KEY (`idEmpleado`)
    REFERENCES `Optica`.`Empleado` (`idEmpleado`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Venta_Cliente1`
    FOREIGN KEY (`idCliente`)
    REFERENCES `Optica`.`Cliente` (`idCliente`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Venta_Gafas1`
    FOREIGN KEY (`idEncargo`)
    REFERENCES `Optica`.`Gafas` (`idEncargo`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
