
SELECT nombre FROM tienda.producto;

SELECT nombre, precio FROM tienda.producto;

SELECT * FROM tienda.producto;

SELECT nombre, precio AS precio_EUR, ROUND(precio*1.06, 2) AS precio_USD FROM tienda.producto;

SELECT nombre AS 'nombre de "producto"', precio AS euros, ROUND(precio*1.06, 2) AS "dólares norte-americanos" FROM tienda.producto;

SELECT UPPER(nombre), precio FROM tienda.producto;

SELECT LOWER(nombre), precio FROM tienda.producto;

SELECT nombre, LEFT(nombre, 2) AS "nom abrev." FROM tienda.fabricante;

SELECT nombre, ROUND(precio) FROM tienda.producto;

SELECT nombre, FLOOR(precio) AS precio FROM tienda.producto;

SELECT codigo_fabricante FROM producto WHERE nombre IS NOT NULL;

SELECT DISTINCT codigo_fabricante FROM producto WHERE nombre IS NOT NULL;

SELECT nombre FROM fabricante ORDER BY nombre ASC;

SELECT nombre FROM fabricante ORDER BY nombre DESC;

SELECT * FROM producto ORDER BY nombre ASC, precio DESC;

SELECT * FROM fabricante LIMIT 5;

SELECT * FROM fabricante LIMIT 2 OFFSET 3;

SELECT nombre, precio FROM producto ORDER BY precio ASC LIMIT 1;

SELECT nombre, precio FROM producto ORDER BY precio DESC LIMIT 1;

SELECT nombre FROM producto WHERE codigo_fabricante=2;

SELECT producto.nombre, precio, fabricante.nombre FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo;

SELECT producto.nombre, precio, fabricante.nombre FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo ORDER BY fabricante.nombre ASC;

SELECT producto.codigo AS "código prod", producto.nombre AS producto, fabricante.codigo AS "código fabr", fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo;

SELECT producto.nombre AS producto, precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo ORDER BY precio ASC LIMIT 1;

SELECT producto.nombre AS producto, precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo ORDER BY precio DESC LIMIT 1;

SELECT producto.codigo AS "código prod", producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Lenovo";

SELECT producto.codigo AS "código prod", producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Crucial" AND producto.precio>200;

SELECT producto.codigo AS "código prod", producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Asus" OR fabricante.nombre="Hewlett-Packard" OR fabricante.nombre="Seagate";

SELECT producto.codigo AS "código prod", producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre IN ("Asus", "Hewlett-Packard", "Seagate");

SELECT producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE RIGHT(fabricante.nombre, 1)="e";

SELECT producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre LIKE '%w%';

SELECT producto.nombre AS producto, producto.precio, fabricante.nombre AS fabricante FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE producto.precio>=180 ORDER BY precio DESC, fabricante ASC;

SELECT DISTINCT fabricante.codigo, fabricante.nombre FROM fabricante RIGHT JOIN producto ON fabricante.codigo=producto.codigo_fabricante;

SELECT DISTINCT fabricante.codigo, fabricante.nombre AS fabricante, producto.nombre AS producto FROM fabricante LEFT JOIN producto ON fabricante.codigo=producto.codigo_fabricante;

SELECT fabricante.codigo, fabricante.nombre FROM fabricante LEFT JOIN producto ON fabricante.codigo=producto.codigo_fabricante WHERE producto.codigo IS NULL;

SELECT producto.* FROM fabricante LEFT JOIN producto ON fabricante.codigo=producto.codigo_fabricante WHERE fabricante.nombre="Lenovo";

SELECT nombre FROM producto WHERE precio = (SELECT MAX(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Lenovo'));

SELECT producto.* FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Lenovo" AND precio = (SELECT MAX(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Lenovo'));

SELECT producto.* FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre="Hewlett-Packard" AND precio = (SELECT MIN(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Hewlett-Packard'));

SELECT nombre, precio FROM producto WHERE precio >= (SELECT MAX(precio) FROM producto WHERE codigo_fabricante = (SELECT codigo FROM fabricante WHERE nombre = 'Lenovo'));

SELECT producto.* FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre = 'Asus' AND precio>(SELECT precio > AVG(precio) FROM producto);
