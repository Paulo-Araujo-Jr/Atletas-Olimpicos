function pesquisar(){

    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    let resultado = ""

    campoPesquisa = campoPesquisa.toLowerCase();

    let descricao; 
    let esporte; 
    let nome;

    for(let dado of dados){
        descricao = dado.descricao.toLowerCase();
        esporte = dado.esporte.toLowerCase();
        nome = dado.titulo.toLowerCase();
        if(campoPesquisa != ""){
            if (nome.includes(campoPesquisa) || esporte.includes(campoPesquisa) || descricao.includes(campoPesquisa)){

                resultado += `
                <div class="atleta-info">
                    <h2 
                        class="nome-atleta">${dado.titulo} 
                        <p class ="idade-altleta"> idade: ${dado.idade}</p>
                        <p class = "esporte-atleta"> esporte: ${dado.esporte}</p>
                    </h2>
                        <p 
                            class="descricao-atleta">${dado.descricao}.
                        </p>
                    <a 
                        class="link-atleta" href=${dado.link} target="_blank">Mais Informações
                    </a>
                </div>`
            }
        }
        if(!resultado){
            resultado = "<p>Campo Vazio</p>"
        }
    }

    section.innerHTML = resultado;

}


