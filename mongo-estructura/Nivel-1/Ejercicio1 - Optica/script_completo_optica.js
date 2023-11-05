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

// ALTA DE DOCUMENTOS DE EJEMPLO

// CLIENTES
db.col_clientes.insertMany([
    {
        nif: "12345678A",
        nombre: "Juan Pérez",
        apellido1: "García",
        apellido2: "López",
        direccion: {
            calle: "Calle Barcelona",
            numero: 123,
            piso: 2,
            puerta: "B",
            ciudad: "Barcelona",
            codigo_postal: "08001",
            pais: "España"
        },
        telefono: 555123456,
        email: "juan@example.com",
        alta: new Date("2023-10-15")
    },
    {
        nif: "87654321B",
        nombre: "María Rodríguez",
        apellido1: "Sánchez",
        apellido2: "Gómez",
        direccion: {
            calle: "Avenida Barcelona",
            numero: 456,
            piso: 1,
            puerta: "A",
            ciudad: "Barcelona",
            codigo_postal: "08002",
            pais: "España"
        },
        telefono: 555987654,
        email: "maria@example.com",
        alta: new Date("2023-10-16")
    },
    {
        nif: "98765432C",
        nombre: "Pedro Martínez",
        apellido1: "López",
        apellido2: "Fernández",
        direccion: {
            calle: "Plaza Cataluña",
            numero: 789,
            piso: 3,
            puerta: "C",
            ciudad: "Barcelona",
            codigo_postal: "08003",
            pais: "España"
        },
        telefono: 555789012,
        email: "pedro@example.com",
        alta: new Date("2023-10-17")
    }
]);
db.col_clientes.insertMany([
    {
        nif: "45678901E",
        nombre: "Carlos López",
        apellido1: "Martínez",
        apellido2: "Sánchez",
        direccion: {
            calle: "Paseo Gracia",
            numero: 123,
            piso: 4,
            puerta: "E",
            ciudad: "Barcelona",
            codigo_postal: "08005",
            pais: "España"
        },
        telefono: 555456789,
        email: "carlos@example.com",
        alta: new Date("2023-10-19"),
        cliente_recomendador: db.col_clientes.findOne({nif: "12345678A" }).nif
    },
    {
        nif: "54321098D",
        nombre: "Laura González",
        apellido1: "Fernández",
        apellido2: "Gómez",
        direccion: {
            calle: "Calle Valencia",
            numero: 789,
            piso: 2,
            puerta: "D",
            ciudad: "Barcelona",
            codigo_postal: "08004",
            pais: "España"
        },
        telefono: 555543210,
        email: "laura@example.com",
        alta: new Date("2023-10-18"),
        cliente_recomendador: db.col_clientes.findOne({nif: "87654321B" }).nif
    }
])
// PROVEEDORES
db.col_proveedores.insertMany([
    {
        nombre: "Gafas Madrid",
        direccion: {
            calle: "Calle Gran Vía",
            numero: 123,
            piso: "4A",
            puerta: "C",
            ciudad: "Madrid",
            codigo_postal: "28001",
            pais: "España"
        },
        telefono: 911222333,
        fax: 911222444,
        cif: "A12345678"
    },
    {
        nombre: "Gafas Barcelona",
        direccion: {
            calle: "Rambla de Catalunya",
            numero: 456,
            piso: "2B",
            puerta: "D",
            ciudad: "Barcelona",
            codigo_postal: "08007",
            pais: "España"
        },
        telefono: 933444555,
        fax: 933444666,
        cif: "B87654321"
    },
    {
        nombre: "Gafas Valencia",
        direccion: {
            calle: "Avenida del Puerto",
            numero: 789,
            piso: "3C",
            puerta: "E",
            ciudad: "Valencia",
            codigo_postal: "46011",
            pais: "España"
        },
        telefono: 963555444,
        fax: 963555333,
        cif: "C98765432"
    },
    {
        nombre: "Gafas Bilbao",
        direccion: {
            calle: "Gran Vía Don Diego López de Haro",
            numero: 101,
            piso: "5A",
            puerta: "F",
            ciudad: "Bilbao",
            codigo_postal: "48001",
            pais: "España"
        },
        telefono: 944666555,
        fax: 944666444,
        cif: "D76543210"
    }
])
// EMPLEADOS
db.col_empleados.insertMany([
    {
        nombre: "Juan Pérez",
        apellido1: "García",
        apellido2: "López",
        nif: "12345678Z"
    },
    {
        nombre: "María Rodríguez",
        apellido1: "Fernández",
        apellido2: "Martínez",
        nif: "87654321X"
    },
    {
        nombre: "Luis González",
        apellido1: "Sánchez",
        apellido2: "Gómez",
        nif: "23456789Y"
    },
    {
        nombre: "Ana Martínez",
        apellido1: "López",
        apellido2: "Pérez",
        nif: "98765432W"
    }
])
// GAFAS
db.col_gafas.insertMany([
    {
      marca: "RayBan",
      graduacion_izquierdo: 1.5,
      graduacion_derecho: 2.0,
      tipo_montura: "pasta",
      color_montura: "Negro",
      color_izquierdo: "Gris",
      color_derecho: "Gris",
      precio: 150.0,
      id_proveedor: db.col_proveedores.findOne({cif: "A12345678" })._id,
      nombre_proveedor: db.col_proveedores.findOne({cif: "A12345678" }).nombre,
      cif_proveedor: db.col_proveedores.findOne({cif: "A12345678" }).cif
    },
    {
      marca: "Polo",
      graduacion_izquierdo: 2.0,
      graduacion_derecho: 2.0,
      tipo_montura: "flotante",
      color_montura: "Azul",
      color_izquierdo: "Verde",
      color_derecho: "Verde",
      precio: 200.0,
      proveedor: db.col_proveedores.findOne({cif: "A12345678" })._id,
      nombre_proveedor: db.col_proveedores.findOne({cif: "A12345678" }).nombre,
      cif_proveedor: db.col_proveedores.findOne({cif: "A12345678" }).cif
    },
    {
      marca: "Ferrari",
      graduacion_izquierdo: 1.0,
      graduacion_derecho: 1.5,
      tipo_montura: "metálica",
      color_montura: "Rojo",
      color_izquierdo: "Rojo",
      color_derecho: "Rojo",
      precio: 250.0,
      proveedor: db.col_proveedores.findOne({cif: "A12345678" })._id,
      nombre_proveedor: db.col_proveedores.findOne({cif: "A12345678" }).nombre,
      cif_proveedor: db.col_proveedores.findOne({cif: "A12345678" }).cif
    },
    {
      marca: "Versace",
      graduacion_izquierdo: 1.5,
      graduacion_derecho: 1.5,
      tipo_montura: "pasta",
      color_montura: "Dorado",
      color_izquierdo: "Marrón",
      color_derecho: "Marrón",
      precio: 180.0,
      proveedor: db.col_proveedores.findOne({cif: "B87654321" })._id,
      nombre_proveedor: db.col_proveedores.findOne({cif: "B87654321" }).nombre,
      cif_proveedor: db.col_proveedores.findOne({cif: "B87654321" }).cif
    },
    {
      marca: "Tous",
      graduacion_izquierdo: 1.0,
      graduacion_derecho: 1.0,
      tipo_montura: "flotante",
      color_montura: "Blanco",
      color_izquierdo: "Azul",
      color_derecho: "Azul",
      precio: 220.0,
      proveedor: db.col_proveedores.findOne({cif: "B87654321" })._id,
      nombre_proveedor: db.col_proveedores.findOne({cif: "B87654321" }).nombre,
      cif_proveedor: db.col_proveedores.findOne({cif: "B87654321" }).cif
    }
  ])
// VENTAS
db.col_ventas.insertMany([
    {
        nif_cliente: db.col_clientes.findOne({ nif: "12345678A" }).nif, 
        nif_empleado: db.col_empleados.findOne({ nif: "12345678Z" }).nif,
        id_gafas: db.col_gafas.findOne({ marca: "RayBan" })._id,
        cif_proveedor: db.col_gafas.findOne({ marca: "RayBan" }).cif_proveedor,
        fecha_venta: new Date("2023-11-01")
    },
    {
        nif_cliente: db.col_clientes.findOne({nif: "87654321B" }).nif, 
        nif_empleado:db.col_empleados.findOne({nif: "87654321X" }).nif,
        id_gafas: db.col_gafas.findOne({marca: "Polo" })._id,
        cif_proveedor: db.col_gafas.findOne({ marca: "Polo" }).cif_proveedor,
        fecha_venta: new Date("2023-11-02")
    },
    {
        nif_cliente: db.col_clientes.findOne({nif: "98765432C" }).nif, 
        nif_empleado:db.col_empleados.findOne({nif: "87654321X" }).nif,
        id_gafas: db.col_gafas.findOne({marca: "Ferrari" })._id,
        cif_proveedor: db.col_gafas.findOne({ marca: "Ferrari" }).cif_proveedor,
        fecha_venta: new Date("2023-11-03")
    },
    {
        nif_cliente: db.col_clientes.findOne({nif: "98765432C" }).nif, 
        nif_empleado:db.col_empleados.findOne({nif: "98765432W" }).nif,
        id_gafas: db.col_gafas.findOne({marca: "Versace" })._id,
        cif_proveedor: db.col_gafas.findOne({ marca: "Versace" }).cif_proveedor,
        fecha_venta: new Date("2023-11-04")
    },
    {
        nif_cliente: db.col_clientes.findOne({nif: "45678901E" }).nif, 
        nif_empleado:db.col_empleados.findOne({nif: "98765432W" }).nif,
        id_gafas: db.col_gafas.findOne({marca: "Tous" })._id,
        cif_proveedor: db.col_gafas.findOne({ marca: "Tous" }).cif_proveedor,
        fecha_venta: new Date("2023-11-05")
    }
  ])