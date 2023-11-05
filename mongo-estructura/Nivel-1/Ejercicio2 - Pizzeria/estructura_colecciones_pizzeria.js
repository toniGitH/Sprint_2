// CREACIÓN DE COLECCIONES

// COLECCIÓN CLIENTES
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
                    description: "El teléfono del cliente debe ser numérico"
                }
            }
        }
    }
})

// COLECCIÓN TIENDAS
db.createCollection("col_tiendas", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
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
                        }
                    }
                },
                localidad: {
                    bsonType: "string",
                    description: "La ciudad debe ser un string"
                },
                codigo_postal: {
                    bsonType: "string",
                    description: "El c.p. debe ser un string"
                },
                provincia: {
                    bsonType: "string",
                    description: "El país debe ser un string"
                },
                telefono: {
                    bsonType: "number",
                    description: "El telefono de la tienda debe ser un number"
                }
            }
        }
    }
})

// COLECCIÓN EMPLEADOS
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
                },
                telefono: {
                    bsonType: "number",
                    description: "El teléfono del empleado debe ser numérico"
                },
                funcion: {
                    bsonType: "string",
                    enum: ["cocinero", "repartidor"],
                    description: "Un pempleado puede ser cocinero o repartidor"
                },
                tienda_asignada: {
                    bsonType: "objectId",
                    description: "Referencia a un documento de la colección col_tiendas"
                }
            }
        }
    }
})

// COLECCIÓN CATEGORÍAS
db.createCollection("col_categorias", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                nombre: {
                    bsonType: "string",
                    description: "El nombre de las categorías de las pizzas debe ser un string."
                }
            }
        }
    }
})

// COLECCIÓN PRODUCTOS
db.createCollection("col_productos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                tipo_producto: {
                    bsonType: "string",
                    enum: ["pizza", "hamburguesa", "bebida"],
                    description: "Tipo de producto (pizza, hamburguesa o bebida)"
                },
                nombre: {
                    bsonType: "string",
                    description: "Nombre del producto (pizza carbonara, hamburguesa del chef, etc..."
                },
                descripcion: {
                    bsonType: "string",
                    description: "Ingredientes, etc..."
                },
                precio: {
                    bsonType: "number",
                    description: "Precio del producto"
                },
                imagen: {
                    bsonType: "string",
                    description: "url de la imagen del producto"
                },
                categoria_pizza: {
                    bsonType: "objectId",
                    description: "Referencia a un documento de la colección col_categorías"
                }
            }
        }
    }
})

// COLECCIÓN PEDIDOS
db.createCollection("col_pedidos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                tienda: {
                    bsonType: "objectId",
                    description: "Referencia a un documento de la colección col_tiendas"
                },
                momento_peticion: {
                    bsonType: "date",
                    description: "Fecha y hora de la petición del pedido"
                },
                cliente: {
                    bsonType: "objectId",
                    description: "Referencia a un documento de la colección col_clientes"
                },
                tipo_entrega: {
                    bsonType: "string",
                    enum: ["local", "domicilio"],
                    description: "El tipo de entrega del pedido debe ser un string"
                },
                momento_entrega: {
                    bsonType: "date",
                    description: "Fecha y hora de la entrega del pedido, ya sea a domicilio o en local"
                },
                empleado_entrega: {
                    bsonType: "objectId",
                    description: "Referencia a un documento de la colección col_empleados"
                },
                cant_pizzas: {
                    bsonType: "number",
                    description: "Cantidad de pizzas incluidas en el pedido"
                },
                cant_burguers: {
                    bsonType: "number",
                    description: "Cantidad de hamburguesas incluidas en el pedido"
                },
                cant_bebidas: {
                    bsonType: "number",
                    description: "Cantidad de bebidas incluidas en el pedido"
                },
                importe_total: {
                    bsonType: "number",
                    description: "Importe total de la compra"
                }
            }
        }
    }
})

// COLECCIÓN DETALLES DE PEDIDO
db.createCollection("col_detalles", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                numero_pedido: {
                    bsonType: "objectId",
                    description: "Referencia a un documento de la colección col_pedidos"
                },
                productos_incluidos: {
                    bsonType: "array",
                    description: "Detalles de los productos pedidos",
                    items: {
                        bsonType: "object",
                        properties: {
                            nombre: {
                                bsonType: "string",
                                description: "Nombre del producto"
                            },
                            precio: {
                                bsonType: "number",
                                description: "Precio del producto"
                            },
                            cantidad: {
                                bsonType: "number",
                                description: "Cantidad del producto"
                            }
                        }
                    }
                }
            }
        }
    }
})





