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