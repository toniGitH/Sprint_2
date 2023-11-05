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