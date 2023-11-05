// PEDIDOS REALIZADOS A LA TIENDA DE MARTORELL
db.col_pedidos.find({tienda: db.col_tiendas.findOne({localidad:"Martorell"})._id});

// Lista cuántos pedidos ha efectuado el empleado con dni 11111112B.
db.col_pedidos.countDocuments({empleado_entrega: db.col_empleados.findOne({ nif: "11111112B" }, { _id: 1 })._id});

// Lista cuántos productos de tipo “Bebidas” se han vendido en la localidad de Martorell.
db.col_pedidos.aggregate([    {      $match: {        tienda: db.col_tiendas.findOne({ localidad: "Martorell" }, { _id: 1 })._id      }    },    {      $group: {        _id: null,        total_bebidas: { $sum: "$cant_bebidas" }      }    }  ]);