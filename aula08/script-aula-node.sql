# Visualiza todos os databases existentes
show databases;

# Cria um database no banco de dados
create database db_lion_school;

# Seleciona o database a ser utilizado
use db_lion_school;

# Visualiza todas as tabelas existentes
show tables;

create table tbl_aluno (
	id int not null auto_increment primary key,
    nome varchar(100) not null,
    rg varchar(15) not null,
    cpf varchar(18) not null,
    data_nascimento date not null,
    email varchar(200) not null,
    unique index(id)
);

# Retorna a estrutura da tabela selecionada
desc tbl_aluno;

# Insere dados na tabela do aluno
insert into tbl_aluno (nome, rg, cpf, data_nascimento, email)
values ('MtZ',
 '57.260.063-X',
 '543.807.228-05',
 '2005-09-24', 
 'mtz@gmail.net');
 
 # Retorna todos os campos e todos os registros da tabela
 select * from tbl_aluno;
 
 # Atualiza dados na tabela (Não esquecer do critério)
 update tbl_aluno set email = 'mtzenforcaerrado@gmail.com' where id = 2;
 
 # Exclui um registro da tabela
 delete from tbl_aluno where id = 2;