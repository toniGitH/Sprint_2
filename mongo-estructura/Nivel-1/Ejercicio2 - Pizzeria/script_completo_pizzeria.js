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

// ALTA DE DATOS DE EJEMPLO

// DOCUMENTOS DE LA COLECCIÓN DE CLIENTES
db.col_clientes.insertMany([
    {
      nif: "12345678A",
      nombre: "Juan",
      apellido1: "García",
      apellido2: "Pérez",
      direccion: {
        calle: "Carrer Major",
        numero: 123,
        piso: "2º",
        puerta: "B",
        ciudad: "Barcelona",
        codigo_postal: "08001",
        pais: "España"
      },
      telefono: 933333333
    },
    {
      nif: "98765432B",
      nombre: "María",
      apellido1: "Martínez",
      apellido2: "López",
      direccion: {
        calle: "Avinguda Diagonal",
        numero: 456,
        piso: "1º",
        puerta: "C",
        ciudad: "Badalona",
        codigo_postal: "08912",
        pais: "España"
      },
      telefono: 933444555
    },
    {
      nif: "56789012C",
      nombre: "Pedro",
      apellido1: "Sánchez",
      apellido2: "Gómez",
      direccion: {
        calle: "Carrer Sant Antoni",
        numero: 78,
        piso: "Entresuelo",
        puerta: "1",
        ciudad: "Sant Cugat",
        codigo_postal: "08172",
        pais: "España"
      },
      telefono: 935555666
    },
    {
      nif: "34567890D",
      nombre: "Laura",
      apellido1: "López",
      apellido2: "Fernández",
      direccion: {
        calle: "Plaça Catalunya",
        numero: 10,
        piso: "Bajo",
        puerta: "2",
        ciudad: "Terrassa",
        codigo_postal: "08221",
        pais: "España"
      },
      telefono: 937777888
    },
    {
      nif: "90123456E",
      nombre: "Antonio",
      apellido1: "Pérez",
      apellido2: "Sánchez",
      direccion: {
        calle: "Carrer Gran Via",
        numero: 321,
        piso: "3º",
        puerta: "A",
        ciudad: "Mataró",
        codigo_postal: "08302",
        pais: "España"
      },
      telefono: 938888999
    }
]);

// DOCUMENTOS DE LA COLECCIÓN TIENDAS
db.col_tiendas.insertMany([
    {
      direccion: {
        calle: "Carrer Major",
        numero: 123
      },
      localidad: "Martorell",
      codigo_postal: "08760",
      provincia: "Barcelona",
      telefono: 937777777
    },
    {
      direccion: {
        calle: "Avinguda Sant Esteve",
        numero: 45
      },
      localidad: "Abrera",
      codigo_postal: "08630",
      provincia: "Barcelona",
      telefono: 938888888
    },
    {
      direccion: {
        calle: "Plaça de l'Ajuntament",
        numero: 10
      },
      localidad: "Igualada",
      codigo_postal: "08700",
      provincia: "Barcelona",
      telefono: 938888888
    }
])

// DOCUMENTOS DE LA COLECCIÓN EMPLEADOS
db.col_empleados.insertMany([
    {
      nif: "11111111A",
      nombre: "Alba",
      apellido1: "González",
      apellido2: "López",
      telefono: 666555444,
      funcion: "cocinero",
      tienda_asignada: db.col_tiendas.findOne({ localidad: "Martorell" }, { _id: 1 })._id
  
    },
    {
      nif: "11111112B",
      nombre: "Jaime",
      apellido1: "Martínez",
      apellido2: "Fernández",
      telefono: 666555445,
      funcion: "repartidor",
      tienda_asignada: db.col_tiendas.findOne({ localidad: "Martorell" }, { _id: 1 })._id
  
    },
    {
      nif: "22222222A",
      nombre: "Lola",
      apellido1: "Ramírez",
      apellido2: "Díaz",
      telefono: 666555446,
      funcion: "cocinero",
      tienda_asignada: db.col_tiendas.findOne({ localidad: "Igualada" }, { _id: 1 })._id
  
    },
    {
      nif: "22222223B",
      nombre: "Ana",
      apellido1: "Pérez",
      apellido2: "García",
      telefono: 666555447,
      funcion: "repartidor",
      tienda_asignada: db.col_tiendas.findOne({ localidad: "Igualada" }, { _id: 1 })._id
  
    },
    {
      nif: "33333333A",
      nombre: "Manel",
      apellido1: "Sánchez",
      apellido2: "Rodríguez",
      telefono: 666555448,
      funcion: "cocinero",
      tienda_asignada: db.col_tiendas.findOne({ localidad: "Abrera" }, { _id: 1 })._id
  
    },
    {
      nif: "33333334B",
      nombre: "Oriol",
      apellido1: "Fernández",
      apellido2: "Martínez",
      telefono: 666555449,
      funcion: "repartidor",
      tienda_asignada: db.col_tiendas.findOne({ localidad: "Abrera" }, { _id: 1 })._id
  
    }
])

// DOCUMENTOS DE LA COLECCIÓN CATEGORIAS
db.col_categorias.insertMany([
    { nombre: "Normal" },
    { nombre: "Extra" },
    { nombre: "Deluxe" }
]);

// DOCUMENTOS DE LA COLECCIÓN PRODUCTOS
db.col_productos.insertMany([
    // Bebidas
    { tipo_producto: "bebida", nombre: "Coca-Cola", descripcion: "Refresco de cola frío y refrescante.", precio: 3.50, imagen: "imagen1.jpg" },
    { tipo_producto: "bebida", nombre: "Agua mineral", descripcion: "Agua mineral natural.", precio: 2.50, imagen: "imagen2.jpg" },
    { tipo_producto: "bebida", nombre: "Fanta de naranja", descripcion: "Refresco de naranja frío y refrescante.", precio: 3.50, imagen: "imagen3.jpg" },
    { tipo_producto: "bebida", nombre: "Café", descripcion: "Café recién hecho.", precio: 1.50, imagen: "imagen4.jpg" },
    { tipo_producto: "bebida", nombre: "Fanta de limón", descripcion: "Refresco de limón frío y refrescante.", precio: 3.50, imagen: "imagen5.jpg" },

    // Hamburguesas
    { tipo_producto: "hamburguesa", nombre: "Hamburguesa clásica", descripcion: "La hamburguesa de siempre con carne jugosa.", precio: 10.00, imagen: "imagen6.jpg" },
    { tipo_producto: "hamburguesa", nombre: "Hamburguesa con champiñones", descripcion: "Hamburguesa con champiñones salteados.", precio: 10.00, imagen: "imagen7.jpg" },
    { tipo_producto: "hamburguesa", nombre: "Hamburguesa de pollo", descripcion: "Hamburguesa de pollo a la parrilla.", precio: 10.00, imagen: "imagen8.jpg" },
    { tipo_producto: "hamburguesa", nombre: "Hamburguesa vegetariana", descripcion: "Hamburguesa vegetariana con ingredientes frescos.", precio: 10.00, imagen: "imagen9.jpg" },
    { tipo_producto: "hamburguesa", nombre: "Hamburguesa del chef", descripcion: "Nuestra hamburguesa especial del chef.", precio: 10.00, imagen: "imagen10.jpg" },

    // Pizzas
    { tipo_producto: "pizza", nombre: "Pizza Margarita", descripcion: "Pizza Margarita con tomate y mozzarella.", precio: 12.00, imagen: "imagen11.jpg", categoria_pizza: db.col_categorias.findOne({ nombre: "Normal" })._id},
    { tipo_producto: "pizza", nombre: "Pizza Pepperoni", descripcion: "Pizza Pepperoni con salsa picante.", precio: 12.00, imagen: "imagen12.jpg", categoria_pizza: db.col_categorias.findOne({ nombre: "Normal" })._id},
    { tipo_producto: "pizza", nombre: "Pizza Suprema", descripcion: "Pizza Suprema con ingredientes variados.", precio: 15.00, imagen: "imagen13.jpg", categoria_pizza: db.col_categorias.findOne({ nombre: "Extra" })._id},
    { tipo_producto: "pizza", nombre: "Pizza Hawaiana", descripcion: "Pizza Hawaiana con piña y jamón.", precio: 15.00, imagen: "imagen14.jpg", categoria_pizza: db.col_categorias.findOne({ nombre: "Extra" })._id},
    { tipo_producto: "pizza", nombre: "Pizza de Mariscos", descripcion: "Pizza de Mariscos con langostinos y mejillones.", precio: 18.00, imagen: "imagen15.jpg", categoria_pizza: db.col_categorias.findOne({ nombre: "Deluxe" })._id},
    { tipo_producto: "pizza", nombre: "Pizza Cuatro Quesos", descripcion: "Pizza Cuatro Quesos con una mezcla de quesos.", precio: 18.00, imagen: "imagen16.jpg", categoria_pizza: db.col_categorias.findOne({ nombre: "Deluxe" })._id},
]);

// DOCUMENTOS DE LA COLECCIÓN PEDIDOS
db.col_pedidos.insertMany([
    {
      tienda: db.col_tiendas.findOne({ localidad: "Martorell" }, { _id: 1 })._id,
      momento_peticion: new Date('2023-11-01T15:30:00'),
      cliente: db.col_clientes.findOne({ nif: "12345678A" }, { _id: 1 })._id,
      tipo_entrega: "local",
      momento_entrega: new Date('2023-11-01T16:05:00'),
      cant_pizzas: 2,
      cant_burguers: 0,
      cant_bebidas: 2,
      importe_total: 31.00,
    },
    {
      tienda: db.col_tiendas.findOne({ localidad: "Abrera" }, { _id: 1 })._id,
      momento_peticion: new Date('2023-01-01T20:30:00'),
      cliente: db.col_clientes.findOne({ nif: "98765432B" }, { _id: 1 })._id,
      tipo_entrega: "local",
      momento_entrega: new Date('2023-01-01T21:30:00'),
      empleado_entrega: db.col_empleados.findOne({ nif: "11111112B" }, { _id: 1 })._id,
      cant_pizzas: 0,
      cant_burguers: 2,
      cant_bebidas: 2,
      importe_total: 25.00,
    },
    {
      tienda: db.col_tiendas.findOne({ localidad: "Martorell" }, { _id: 1 })._id,
      momento_peticion: new Date('2023-10-01T21:30:00'),
      cliente: db.col_clientes.findOne({ nif: "56789012C" }, { _id: 1 })._id,
      tipo_entrega: "domicilio",
      momento_entrega: new Date('2023-10-01T21:55:00'),
      empleado_entrega: db.col_empleados.findOne({ nif: "11111112B" }, { _id: 1 })._id,
      cant_pizzas: 3,
      cant_burguers: 0,
      cant_bebidas: 3,
      importe_total: 55.50,
    },
    {
      tienda: db.col_tiendas.findOne({ localidad: "Igualada" }, { _id: 1 })._id,
      momento_peticion: new Date('2023-10-10T21:50:00'),
      cliente: db.col_clientes.findOne({ nif: "34567890D" }, { _id: 1 })._id,
      tipo_entrega: "domicilio",
      momento_entrega: new Date('2023-10-10T22:30:00'),
      empleado_entrega: db.col_empleados.findOne({ nif: "22222223B" }, { _id: 1 })._id,
      cant_pizzas: 2,
      cant_burguers: 2,
      cant_bebidas: 4,
      importe_total: 64.00,
    },
]);

// DOCUMENTOS DE LA COLECCIÓN DETALLES DE PEDIDO
db.col_detalles.insertMany([
  {
    numero_pedido: db.col_pedidos.findOne({ cliente: db.col_clientes.findOne({ nif: "12345678A" })._id })._id,
    productos_incluidos: [
      { nombre: "Pizza Margarita", precio: 12.00, cantidad: 2 },
      { nombre: "Coca-Cola", precio: 3.50, cantidad: 2 },
    ],
  },
  {
    numero_pedido: db.col_pedidos.findOne({ cliente: db.col_clientes.findOne({ nif: "98765432B" })._id })._id,
    productos_incluidos: [
      { nombre: "Hamburguesa clásica", precio: 10.00, cantidad: 2 },
      { nombre: "Agua mineral", precio: 2.50, cantidad: 2 },
    ],
  },
  {
    numero_pedido: db.col_pedidos.findOne({ cliente: db.col_clientes.findOne({ nif: "56789012C" })._id })._id,
    productos_incluidos: [
      { nombre: "Pizza Suprema", precio: 12.00, cantidad: 3 },
      { nombre: "Coca-Cola", precio: 3.50, cantidad: 3 },
    ],
  },
  {
    numero_pedido: db.col_pedidos.findOne({ cliente: db.col_clientes.findOne({ nif: "34567890D" })._id })._id,
    productos_incluidos: [
      { nombre: "Pizza Suprema", precio: 15.00, cantidad: 2 },
      { nombre: "Hamburguesa clásica", precio: 10.00, cantidad: 2 },
      { nombre: "Coca-Cola", precio: 3.50, cantidad: 4 },
    ],
  },
]);