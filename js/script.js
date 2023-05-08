function carregarAlunos() {
    fetch("alunos.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                                
                var cardAluno = ""
                cardAluno += `
                    <div class="card-aluno">
                        <img src=${data[i].foto}>
                        <h2>${data[i].nome}</h2>     
                        <p>Projetos 1º Sem.</p>
                        <div class="botoes">
                            <div class="blur"></div>
                            
                            `

                for (let x = 0; x < data[i].trabalhos.length; x++){
                    cardAluno += `
                        <a href="${data[i].trabalhos[x].link}" target="_blank" class="botao">${data[i].trabalhos[x].projeto}</a>
                        `
                }

                cardAluno += `
                        </div>                 
                    </div>
                    `
                
                var lista = document.getElementById("alunos")
                lista.innerHTML += cardAluno
            }
        })

    fetch("instrutores.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                                
                var cardAluno = ""
                cardAluno += `
                    <div class="card-aluno">
                        <img src=${data[i].foto}>
                        <h2>${data[i].nome}</h2>     
                        <p>Projetos 1º Sem.</p>
                        <div class="botoes">
                            <div class="blur"></div>
                            
                            `

                for (let x = 0; x < data[i].trabalhos.length; x++){
                    cardAluno += `
                        <a href="${data[i].trabalhos[x].link}" target="_blank" class="botao">${data[i].trabalhos[x].projeto}</a>
                        `
                }

                cardAluno += `
                        </div>                 
                    </div>
                    `
                
                var lista = document.getElementById("instrutores")
                lista.innerHTML += cardAluno
            }
        })
}
