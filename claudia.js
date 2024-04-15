console.log("#####Empresa claudia#####")

let funcionarios =  ["João", "Maria", "Camila", "Ana", "Pedro", "Laura", "Tiago", "Mariana", "Matheus", "Sofia"]

funcionarios.push("Matheus");
funcionarios.push("Isabela");
funcionarios.push("Rafael");
funcionarios.push("Camila Fernandes");

console.log(funcionarios)

funcionarios.splice(2,1) //Camila se demitiu
funcionarios.splice(4,1) //Sofia foi paara curitiba
funcionarios.push("Vitória"); //Vitória chegou na empresa
funcionarios.push("Rafael"); //Rafael foi promovido

console.log(funcionarios)

let funcionarios_sem_duplicidade = [... new set (funcionarios)]

console.log(funcionarios_sem_duplicidade)