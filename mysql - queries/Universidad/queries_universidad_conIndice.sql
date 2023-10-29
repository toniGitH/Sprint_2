-- QUERIES BASE DE DATOS UNIVERSIDAD

-- CONSULTAS INICIALES (9/9)

-- 1)
SELECT apellido1, apellido2, nombre FROM persona WHERE tipo="alumno" ORDER BY apellido1, apellido2, nombre;

-- 2)
SELECT nombre, apellido1, apellido2 FROM persona WHERE tipo = "alumno" AND telefono IS NULL;

-- 3)
SELECT * FROM persona WHERE tipo = "alumno" AND YEAR(fecha_nacimiento)=1999;

-- 4)
SELECT * FROM persona WHERE tipo = "profesor" AND telefono IS NULL AND RIGHT(nif,1)="k";

-- 5)
SELECT * FROM asignatura WHERE cuatrimestre=1 AND curso=3 AND id_grado=7;

-- 6)
SELECT apellido1, apellido2, persona.nombre, departamento.nombre FROM persona JOIN profesor ON persona.id = profesor.id_profesor JOIN departamento ON profesor.id_departamento = departamento.id ORDER BY apellido1, apellido2, persona.nombre;

-- 7)
SELECT asignatura.nombre, curso_escolar.anyo_inicio, curso_escolar.anyo_fin FROM persona JOIN alumno_se_matricula_asignatura ON persona.id=alumno_se_matricula_asignatura.id_alumno JOIN curso_escolar ON alumno_se_matricula_asignatura.id_curso_escolar=curso_escolar.id JOIN asignatura ON alumno_se_matricula_asignatura.id_asignatura=asignatura.id WHERE persona.nif="26902806M";

-- 8)
SELECT DISTINCT departamento.nombre FROM asignatura JOIN grado ON asignatura.id_grado=grado.id JOIN profesor ON profesor.id_profesor=asignatura.id_profesor JOIN departamento ON departamento.id=profesor.id_departamento WHERE id_grado=4 AND asignatura.id_profesor IS NOT NULL;

-- 9)
SELECT DISTINCT persona.apellido1, persona.apellido2, persona.nombre FROM curso_escolar JOIN alumno_se_matricula_asignatura ON curso_escolar.id=alumno_se_matricula_asignatura.id_curso_escolar JOIN persona ON persona.id=alumno_se_matricula_asignatura.id_alumno WHERE curso_escolar.id=5;

-- CONSULTAS CON LEFT JOIN Y RIGHT JOIN (6/6)

-- 1)
SELECT departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre FROM departamento LEFT JOIN profesor ON profesor.id_departamento=departamento.id JOIN persona ON persona.id=profesor.id_profesor ORDER BY departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre;

-- 2)
SELECT persona.apellido1, persona.apellido2, persona.nombre FROM profesor RIGHT JOIN departamento ON profesor.id_departamento=departamento.id RIGHT JOIN persona ON persona.id=profesor.id_profesor WHERE tipo="profesor" AND departamento.id IS NULL;

-- 3)
SELECT departamento.id, departamento.nombre, profesor.id_profesor FROM departamento LEFT JOIN profesor ON departamento.id=profesor.id_departamento WHERE profesor.id_profesor IS NULL;

-- 4)
SELECT profesor.id_profesor, persona.apellido1, persona.apellido2, persona.nombre FROM profesor LEFT JOIN asignatura ON profesor.id_profesor=asignatura.id_profesor LEFT JOIN persona ON persona.id=profesor.id_profesor WHERE asignatura.id IS NULL;

-- 5)
SELECT asignatura.nombre FROM asignatura WHERE asignatura.id_profesor IS NULL;

-- 6)
SELECT departamento.nombre FROM profesor RIGHT JOIN departamento ON profesor.id_departamento=departamento.id WHERE profesor.id_profesor IS NULL ORDER BY departamento.nombre;


-- CONSULTAS RESUMEN (11/11)

-- 1)
SELECT COUNT(tipo) AS "Total alumnos" FROM persona WHERE tipo="alumno";

-- 2)
SELECT COUNT(tipo) AS "Alumnos de 1999" FROM persona WHERE tipo="alumno" AND YEAR(fecha_nacimiento)=1999;

-- 3)
SELECT departamento.nombre AS Departamento, count(profesor.id_profesor) AS "Numero profesores" FROM profesor RIGHT JOIN departamento ON profesor.id_departamento=departamento.id RIGHT JOIN persona ON persona.id=profesor.id_profesor WHERE tipo="profesor" GROUP BY departamento.id ORDER BY count(profesor.id_profesor) DESC;

-- 4)
SELECT departamento.nombre, count(profesor.id_profesor) AS NumProfesores FROM departamento LEFT JOIN profesor ON departamento.id=profesor.id_departamento GROUP BY departamento.id ORDER BY NumProfesores DESC;

-- 5)
SELECT grado.nombre AS Grado, COUNT(asignatura.nombre) AS Asignatura FROM grado LEFT JOIN asignatura ON grado.id=asignatura.id_grado GROUP BY GRADO ORDER BY Asignatura DESC;

-- 6)
SELECT grado.nombre AS Grado, COUNT(asignatura.nombre) AS Asignatura FROM grado LEFT JOIN asignatura ON grado.id=asignatura.id_grado GROUP BY GRADO HAVING Asignatura>40 ORDER BY Asignatura DESC;

-- 7)
SELECT grado.nombre AS Grado, asignatura.tipo AS "Tipo asignatura", SUM(asignatura.creditos) AS "Créditos totales" FROM asignatura JOIN grado ON asignatura.id_grado=grado.id GROUP BY asignatura.tipo, grado.nombre ORDER BY Grado ASC, SUM(asignatura.creditos) DESC;

-- 8)
SELECT curso_escolar.anyo_inicio AS "Año inicio curso", count(DISTINCT alumno_se_matricula_asignatura.id_alumno) AS "Alumnos matriculados" FROM alumno_se_matricula_asignatura JOIN curso_escolar ON alumno_se_matricula_asignatura.id_curso_escolar=curso_escolar.id GROUP BY alumno_se_matricula_asignatura.id_curso_escolar;

-- 9)
SELECT profesor.id_profesor, persona.apellido1, persona.apellido2, persona.nombre, COUNT(asignatura.nombre) AS NumAsignaturas FROM profesor LEFT JOIN asignatura ON profesor.id_profesor=asignatura.id_profesor JOIN persona ON persona.id=profesor.id_profesor GROUP BY profesor.id_profesor ORDER BY NumAsignaturas DESC;

-- 10)
SELECT * FROM persona WHERE fecha_nacimiento = (SELECT MAX(fecha_nacimiento) FROM persona) AND tipo="alumno";

-- 11)
SELECT profesor.id_profesor AS "ID Profesores sin asignaturas", persona.apellido1, persona.apellido2, persona.nombre FROM profesor LEFT JOIN departamento ON profesor.id_departamento=departamento.id LEFT JOIN asignatura ON asignatura.id_profesor=profesor.id_profesor LEFT JOIN persona ON persona.id=profesor.id_profesor WHERE asignatura.id_profesor IS NULL ORDER BY profesor.id_profesor, persona.apellido1, persona.apellido2, persona.nombre;
