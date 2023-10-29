-- QUERIES BASE DE DATOS TIENDA (41/41)

-- 1)
SELECT nombre FROM tienda.producto;

-- 2)
SELECT nombre, precio FROM tienda.producto;

-- 3)
SELECT * FROM tienda.producto;

-- 4)
SELECT nombre, precio AS precio_EUR, ROUND(precio*1.06, 2) AS precio_USD FROM tienda.producto;

-- 5)
SELECT nombre AS 'nombre de "producto"', precio AS euros, ROUND(precio*1.06, 2) AS "dólares norte-americanos" FROM tienda.producto;

-- 6)
SELECT UPPER(nombre), precio FROM tienda.producto;

-- 7)
SELECT LOWER(nombre), precio FROM tienda.producto;

-- 8)
SELECT nombre, LEFT(nombre, 2) AS "nom abrev." FROM tienda.fabricante;

-- 9)
SELECT nombre, ROUND(precio) FROM tienda.producto;

-- 10)
SELECT nombre, FLOOR(precio) AS precio FROM tienda.producto;

-- 11)
SELECT codigo_fabricante FROM producto WHERE nombre IS NOT NULL;

-- 12)
SELECT DISTINCT codigo_fabricante FROM producto WHERE nombre IS NOT NULL;

-- 13)
SELECT nombre FROM fabricante ORDER BY nombre ASC;

-- 14)
SELECT nombre FROM fabricante ORDER BY nombre DESC;

-- 15)
SELECT * FROM producto ORDER BY nombre ASC, precio DESC;

-- 16)
SELECT * FROM fabricante LIMIT 5;

-- 17)
SELECT * FROM fabricante LIMIT 2 OFFSET 3;

-- 18)
SELECT nombre, precio FROM producto ORDER BY precio ASC LIMIT 1;

--19)
SELECT nombre, precio FROM producto ORDER BY precio DESC LIMIT 1;

-- 20)
SELECT nombre FROM producto WHERE codigo_fabricante=2;

-- 21)
SELECT producto.nombre, precio, fabricante.nombre FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo;

-- 22)
SELECT producto.nombre, precio, fabricante.nombre FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo ORDER BY fabricante.nombre ASC;

--23)
SELECT producto.codigo AS "código prod", producto.nombre AS producto, fabricante.codigo AS "código fabr", fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo;

--24)
SELECT producto.nombre AS producto, precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo ORDER BY precio ASC LIMIT 1;

-- 25)
SELECT producto.nombre AS producto, precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo ORDER BY precio DESC LIMIT 1;

-- 26)
SELECT producto.codigo AS "código prod", producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Lenovo";

-- 27)
SELECT producto.codigo AS "código prod", producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Crucial" AND producto.precio>200;

-- 28)
SELECT producto.codigo AS "código prod", producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Asus" OR fabricante.nombre="Hewlett-Packard" OR fabricante.nombre="Seagate";

-- 29)
SELECT producto.codigo AS "código prod", producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre IN ("Asus", "Hewlett-Packard", "Seagate");

-- 30)
SELECT producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE RIGHT(fabricante.nombre, 1)="e";

-- 31)
SELECT producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre LIKE '%w%';

-- 32)
SELECT producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE producto.precio>=180 ORDER BY precio DESC, fabricante ASC;

-- 33)
SELECT DISTINCT fabricante.codigo, fabricante.nombre FROM fabricante RIGHT JOIN producto ON fabricante.codigo=producto.codigo_fabricante;

-- 34)
SELECT DISTINCT fabricante.codigo, fabricante.nombre AS fabricante, producto.nombre AS producto FROM fabricante LEFT JOIN producto ON fabricante.codigo=producto.codigo_fabricante;

-- 35)
SELECT fabricante.codigo, fabricante.nombre FROM fabricante LEFT JOIN producto ON fabricante.codigo=producto.codigo_fabricante WHERE producto.codigo IS NULL;

-- 36)
SELECT producto.* FROM fabricante LEFT JOIN producto ON fabricante.codigo=producto.codigo_fabricante WHERE fabricante.nombre="Lenovo";

-- 37)
SELECT nombre FROM producto WHERE precio = (SELECT MAX(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Lenovo'));

-- 38)
SELECT producto.* FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Lenovo" AND precio = (SELECT MAX(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Lenovo'));

-- 39)
SELECT producto.* FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Hewlett-Packard" AND precio = (SELECT MIN(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Hewlett-Packard'));

-- 40)
SELECT nombre, precio FROM producto WHERE precio >= (SELECT MAX(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Lenovo'));

-- 41)
SELECT producto.* FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre = 'Asus' AND precio>(SELECT precio > AVG(precio) FROM producto);
