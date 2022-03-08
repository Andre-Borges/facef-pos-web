CREATE TABLE `aluno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
CREATE TABLE `curso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
CREATE TABLE `professor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
CREATE TABLE `materia` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `professor_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcy95y5jagtu8dfh411tnv1xa2` (`professor_id`),
  CONSTRAINT `FKcy95y5jagtu8dfh411tnv1xa2` FOREIGN KEY (`professor_id`) REFERENCES `professor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
CREATE TABLE `turma` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `curso_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKemy6du4jr6a56m5e5sp7nufe7` (`curso_id`),
  CONSTRAINT `FKemy6du4jr6a56m5e5sp7nufe7` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
CREATE TABLE `aluno_cursos` (
  `aluno_id` int(11) NOT NULL,
  `turma_id` int(11) NOT NULL,
  KEY `FK95abcam4lb00c5pb9a1i76rm` (`turma_id`),
  KEY `FK5qln5vxflay0g315k0jjwu7mh` (`aluno_id`),
  CONSTRAINT `FK5qln5vxflay0g315k0jjwu7mh` FOREIGN KEY (`aluno_id`) REFERENCES `aluno` (`id`),
  CONSTRAINT `FK95abcam4lb00c5pb9a1i76rm` FOREIGN KEY (`turma_id`) REFERENCES `turma` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
CREATE TABLE `aula` (
  `curso_id` int(11) NOT NULL,
  `materia_id` int(11) NOT NULL,
  KEY `FKqmxqhhpj9r9gaxhaofifeji0x` (`materia_id`),
  KEY `FKpfvqc4frref7sftf0evgwbtey` (`curso_id`),
  CONSTRAINT `FKpfvqc4frref7sftf0evgwbtey` FOREIGN KEY (`curso_id`) REFERENCES `curso` (`id`),
  CONSTRAINT `FKqmxqhhpj9r9gaxhaofifeji0x` FOREIGN KEY (`materia_id`) REFERENCES `materia` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
