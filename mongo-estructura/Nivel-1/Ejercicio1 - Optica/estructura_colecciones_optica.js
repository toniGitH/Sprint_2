// CREACIÓN DE COLECCIONES

// COLECCION PROVEEDORES
db.createCollection("col_proveedores", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "El nombre del proveedor debe ser un string."
                },
                direccion: {
                    bsonType: "object",
                    description: "La dirección es un objeto que contiene multiples campos.",
                    properties: {
                        calle: {
                            bsonType: "string",
                            description: "La calle debe ser un string"
                        },
                        numero: {
                            bsonType: "number",
                            description: "El número de la calle debe ser numérico"
                        },
                        piso: {
                            bsonType: "string",
                            description: "El piso debe ser string para aceptar entresuelo, bajo, etc..."
                        },
                        puerta: {
                            bsonType: "string",
                            description: "La puerta debe ser string porque puede ser número o letra."
                        },
                        ciudad: {
                            bsonType: "string",
                            description: "La ciudad debe ser un string"
                        },
                        codigo_postal: {
                            bsonType: "string",
                            description: "El c.p. debe ser un string por si en otros países son números y letras"
                        },
                        pais: {
                            bsonType: "string",
                            description: "El país debe ser un string"
                        }
                    }
                },
                telefono: {
                    bsonType: "number",
                    description: "El teléfono debe ser numérico"
                },
                fax: {
                    bsonType: "number",
                    description: "El fax debe ser numérico"
                },
                cif: {
                    bsonType: "string",
                    description: "El nif debe ser string porque es un número que incluye una letra."
                }
            }
        }
    }
})
// COLECCION CLIENTES
db.createCollection("col_clientes", {
    validator: {
       $jsonSchema: {
            bsonType: "object",
            properties: {
                nif: {
                    bsonType: "string",
                    description: "Número de Identificación Fiscal (NIF) del cliente (debe ser un string)."
                 },
                nombre: {
                    bsonType: "string",
                    description: "El nombre del cliente debe ser un string."
                },
                apellido1: {
                    bsonType: "string",
                    description: "El apellido1 del cliente debe ser un string."
                },
                apellido2: {
                    bsonType: "string",
                    description: "El apellido2 del cliente debe ser un string."
                },
                direccion: {
                    bsonType: "object",
                    description: "La dirección es un objeto que contiene multiples campos.",
                    properties: {
                        calle: {
                            bsonType: "string",
                            description: "La calle debe ser un string"
                        },
                        numero: {
                            bsonType: "number",
                            description: "El número de la calle debe ser numérico"
                        },
                        piso: {
                            bsonType: "number",
                            description: "El piso debe ser string para aceptar entresuelo, bajo, etc..."
                        },
                        puerta: {
                            bsonType: "string",
                            description: "La puerta debe ser string porque puede ser número o letra."
                        },
                        ciudad: {
                            bsonType: "string",
                            description: "La ciudad debe ser un string"
                        },
                        codigo_postal: {
                            bsonType: "string",
                            description: "El c.p. debe ser un string por si en otros países son números y letras"
                        },
                        pais: {
                            bsonType: "string",
                            description: "El país debe ser un string"
                        }
                    }
                },
                telefono: {
                    bsonType: "number",
                    description: "El teléfono debe ser numérico"
                },
                email: {
                    bsonType: "string",
                    description: "El email debe ser un string"
                },
                alta: {
                    bsonType: "date",
                    description: "Fecha de alta del cliente (tipo fecha)."
                },
                cliente_recomendador: {
                    bsonType: "string",
                    description: "Cliente que recomendó a este cliente (string)"
                }
            }
        }
    }
})
// COLECCION EMPLEADOS
db.createCollection("col_empleados", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          properties: {
             nif: {
                bsonType: "string",
                description: "Número de Identificación Fiscal (NIF) del empleado (cadena de texto)."
             },
             nombre: {
                bsonType: "string",
                description: "El nombre del empleado debe ser un string."
            },
             apellido1: {
                bsonType: "string",
                description: "El primer apellido del empleado debe ser un string."
             },
             apellido2: {
                bsonType: "string",
                description: "El segundo apellido del empleado debe ser un string."
             }
          }
       }
    }
 })
// COLECCION GAFAS
db.createCollection("col_gafas", {
    validator: {
       $jsonSchema: {
            bsonType: "object",
            properties: {
                marca: {
                   bsonType: "string",
                    description: "Debe ser una cadena de texto (marca)."
                },
                graduacion_izquierdo: {
                    bsonType: "number",
                    description: "Graduación del cristal izquierdo (debe ser un número)."
                },
                graduacion_derecho: {
                    bsonType: "number",
                    description: "Graduación del cristal derecho (debe ser un número)."
                },
                tipo_montura: {
                    enum: ["pasta", "flotante", "metálica"],
                    description: "Debe ser un enum con las siguientes opciones: pasta, flotante o metálica."
                },
                color_montura: {
                    bsonType: "string",
                    description: "Debe ser una cadena de texto (color_montura)."
                },
                color_izquierdo: {
                    bsonType: "string",
                    description: "Color del cristal izquierdo (debe ser un string)."
                },
                color_derecho: {
                    bsonType: "string",
                    description: "Color del cristal derecho (debe ser un string)."
                },
                precio: {
                    bsonType: "number",
                    description: "Debe ser un número (precio)."
                },
                id_proveedor: {
                    bsonType: "objectId",
                    description: "ID del proveedor (referencia a col_proveedores)."
                },
                nombre_proveedor: {
                    bsonType: "string",
                     description: "Debe ser una cadena de texto (nombre)."
                },
                cif_proveedor: {
                    bsonType: "string",
                    description: "Debe ser una cadena de texto (cif)."
                }
            }
        }
    }
})
// COLECCION VENTAS
db.createCollection("col_ventas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                nif_cliente: {
                    bsonType: "string",
                    description: "Nif del cliente"
                },
                nif_empleado: {
                    bsonType: "string",
                    description: "Nif del empleado"
                },
                id_gafas: {
                    bsonType: "objectId",
                    description: "ID de las gafas (referencia a col_gafas)."
                },
                cif_proveedor: {
                    bsonType: "string",
                    description: "Cif del proveedor de las gafas de esa marca"
                },
                fecha_venta: {
                    bsonType: "date",
                    description: "Fecha de la venta (tipo fecha)."
                }
            }
        }
    }
})