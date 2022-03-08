/*Professor*/
insert into professor (id, nome) values (1, 'Merline');
insert into professor (id, nome) values (2, 'Harlin');
insert into professor (id, nome) values (3, 'Paxton');
insert into professor (id, nome) values (4, 'Willetta');
insert into professor (id, nome) values (5, 'Ines');
insert into professor (id, nome) values (6, 'Janelle');
insert into professor (id, nome) values (7, 'Tadeo');
insert into professor (id, nome) values (8, 'Noe');
insert into professor (id, nome) values (9, 'Carmine');
insert into professor (id, nome) values (10, 'Josiah');

/*Materia*/
insert into materia (id, nome,professor_id) values (1, 'Design',5);
insert into materia (id, nome,professor_id) values (2, 'Banco de dados',3);
insert into materia (id, nome,professor_id) values (3, 'Informatica',10);
insert into materia (id, nome,professor_id) values (4, 'Programacao',9);
insert into materia (id, nome,professor_id) values (5, 'Logica',8);
insert into materia (id, nome,professor_id) values (6, 'Java',7);
insert into materia (id, nome,professor_id) values (7, 'Hardware',6);
insert into materia (id, nome,professor_id) values (8, 'BD2', 4);
insert into materia (id, nome,professor_id) values (9, 'BD3',2);
insert into materia (id, nome,professor_id) values (10, 'Redes',1);

/*Curso*/
insert into curso (id, nome) values (1, 'MA');
insert into curso (id, nome) values (2, 'TN');
insert into curso (id, nome) values (3, 'CO');
insert into curso (id, nome) values (4, 'TX');
insert into curso (id, nome) values (5, 'TN');
insert into curso (id, nome) values (6, 'TN');
insert into curso (id, nome) values (7, 'PA');
insert into curso (id, nome) values (8, 'FL');
insert into curso (id, nome) values (9, 'NE');
insert into curso (id, nome) values (10, 'DC');

/*Aula*/
insert into aula (curso_id, materia_id) values (1, 2);
insert into aula (curso_id, materia_id) values (2, 3);
insert into aula (curso_id, materia_id) values (3, 4);
insert into aula (curso_id, materia_id) values (4, 6);
insert into aula (curso_id, materia_id) values (5, 5);
insert into aula (curso_id, materia_id) values (6, 7);
insert into aula (curso_id, materia_id) values (7, 9);
insert into aula (curso_id, materia_id) values (8, 10);
insert into aula (curso_id, materia_id) values (9, 8);
insert into aula (curso_id, materia_id) values (10, 1);

/*Aluno*/
insert into aluno (id, nome) values (1, 'Julia');
insert into aluno (id, nome) values (2, 'Lurleen');
insert into aluno (id, nome) values (3, 'Woodrow');
insert into aluno (id, nome) values (4, 'Tedmund');
insert into aluno (id, nome) values (5, 'Axel');
insert into aluno (id, nome) values (6, 'Sondra');
insert into aluno (id, nome) values (7, 'Angela');
insert into aluno (id, nome) values (8, 'Chickie');
insert into aluno (id, nome) values (9, 'Marijn');
insert into aluno (id, nome) values (10, 'Al');

/*turma*/
insert into turma (id, nome,curso_id) values (1, '3B',5);
insert into turma (id, nome,curso_id) values (2, '4C',7);
insert into turma (id, nome,curso_id) values (3, '5D',1);
insert into turma (id, nome,curso_id) values (4,'6D',2);
insert into turma (id, nome,curso_id) values (5, '7B',9);
insert into turma (id, nome,curso_id) values (6, '8A',6);
insert into turma (id, nome,curso_id) values (7, '9C',8);
insert into turma (id, nome,curso_id) values (8, '10B',3);
insert into turma (id, nome,curso_id) values (9,'1C',4);
insert into turma (id, nome,curso_id) values (10, '2D',10);

/*aluno_curso*/
insert into aluno_cursos (aluno_id, turma_id) values (1,5);
insert into aluno_cursos (aluno_id, turma_id) values (2,7);
insert into aluno_cursos (aluno_id, turma_id) values (3, 1);
insert into aluno_cursos (aluno_id, turma_id) values (4,2);
insert into aluno_cursos (aluno_id, turma_id) values (5,9);
insert into aluno_cursos (aluno_id, turma_id) values (6,6);
insert into aluno_cursos (aluno_id, turma_id) values (7,8);
insert into aluno_cursos (aluno_id, turma_id) values (8,3);
insert into aluno_cursos (aluno_id, turma_id) values (9,4);
insert into aluno_cursos (aluno_id, turma_id) values (10,10);



