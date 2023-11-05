// CONSULTAR EL PROVEEDOR DE UNA MARCA DE GAFAS ESPECÍFICA

db.col_proveedores.findOne({cif: db.col_gafas.findOne({ marca: "Tous" }).cif_proveedor});

// CONSULTAR EL PROVEEDOR DE UNAS GAFAS DE UNA VENTA EN CONCRETO
// Dentro de mi base de datos uso las gafas cuya id es (_id: ObjectId("6543d25bddf2740630d2f324")
// Si se ejecuta el script de creación de la base de datos con sus datos de ejemplo, esta id ya no será válida

db.col_proveedores.findOne({ cif: db.col_ventas.findOne({ "_id": ObjectId("6543d25bddf2740630d2f324") }).cif_proveedor }, { _id: 0 });

// CONSULTAR LOS DATOS DE UNAS GAFAS DE UNA VENTA EN CONCRETO
// Dentro de mi base de datos uso las gafas cuya id es (_id: ObjectId("6543d25bddf2740630d2f324")
// Si se ejecuta el script de creación de la base de datos con sus datos de ejemplo, esta id ya no será válida

db.col_gafas.findOne({_id:db.col_ventas.findOne({"_id": ObjectId("6543d25bddf2740630d2f324")}).id_gafas});

// CONSULTAR LOS DATOS DE UN CLIENTE EN CONCRETO (p.ejemplo: nif:45678901E)

db.col_clientes.findOne({nif:"45678901E"});

// CONSULTAR LOS DATOS DE VENTAS ENTRE DOS FECHAS  

db.col_ventas.find({fecha_venta: {$gte: new Date("2023-01-01"), $lte: new Date("2023-12-31")}})
  
