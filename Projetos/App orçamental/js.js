
let Formulario = {            

}
function pegarDados(){

    let ano = document.querySelector('.ano').value
    let mes = document.querySelector('.mes').value
    let dia = document.querySelector('.dia').value 

    Formulario.tipo = document.querySelector('.tipo').value
    Formulario.descricao = document.querySelector('.descricao').value
    Formulario.valor = document.querySelector('.valor').value
    Formulario.data = `${dia}/${mes}/${ano}`                   
    Formulario.dia = dia
    Formulario.mes = mes
    Formulario.ano = ano

    if(dia === '' || Formulario.valor === '' || Formulario.descricao === '' 
       || Formulario.tipo === '01' || Formulario.mes === '0' || Formulario.ano === '01'){
    $('#erroDespesa').modal('show')
    return false
    }
    
    $('#sucessoDespesa').modal('show')
    
    document.querySelector('.ano').value = '01'
    document.querySelector('.mes').value = '01'
    document.querySelector('.dia').value = ''
    document.querySelector('.tipo').value = '01'
    document.querySelector('.descricao').value = ''
    document.querySelector('.valor').value = ''
    
    bd.gravarDados()

    
}

class Bd {
    constructor(){
        let id = localStorage.getItem('id')                 

        if(id === null){
           localStorage.setItem('id', 0)                                             
       }

    }
    proximoId(){
        let proximoId = localStorage.getItem('id')
        return parseInt(proximoId) + 1

    }
    gravarDados(){
        let id = this.proximoId()
        localStorage.setItem(id, JSON.stringify(Formulario))
        localStorage.setItem('id', id)
    }    
    recuperarDespesa(){
        let id = localStorage.getItem('id')
        let despesas = Array()
        for(let i = 1; i <= id; i++){
            
        let despesa = JSON.parse(localStorage.getItem(i))
         if(despesa === null){
             continue
             }
                despesa.id = i
                despesas.push(despesa)
            
        }
            return despesas
    }
    remover(id){
        localStorage.removeItem(id)
    }
    pesquisa(despesa){
        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarDespesa()
        
        if(despesa.ano != ''){
        despesasFiltradas = (despesasFiltradas.filter(d => d.ano == despesa.ano))
        }
        if(despesa.mes != ''){
        despesasFiltradas = (despesasFiltradas.filter(d => d.mes == despesa.mes))
        }
        if(despesa.dia != ''){
        despesasFiltradas = (despesasFiltradas.filter(d => d.dia == despesa.dia))
        }
        if(despesa.tipo != ''){
        despesasFiltradas = (despesasFiltradas.filter(d => d.tipo == despesa.tipo))
        }
        if(despesa.descricao != ''){
        despesasFiltradas = (despesasFiltradas.filter(d => d.descricao == despesa.descricao))
        }
        if(despesa.valor != ''){        
        despesasFiltradas = (despesasFiltradas.filter(d => d.valor == despesa.valor))
        }
        
        return despesasFiltradas
        
    }
}
let bd = new Bd()

function criarTabela(despesas = Array(), filtro = false){

    if(despesas.length == 0 && filtro == false){
        despesas = bd.recuperarDespesa()
    }
    let linhaDespesa = document.querySelector('.corpo_tabela')
    linhaDespesa.innerHTML = ''
    despesas.forEach(function(d){
        let linha = linhaDespesa.insertRow() 
        linha.insertCell(0).innerHTML = d.data
        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

        let btn = document.createElement("button")
        btn.className = 'btn btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function(){
            let id = this.id.replace('id_despesa_','')
            bd.remover(id)
            window.location.reload()
        }
        linha.insertCell(4).append(btn)

     })

    }
function pesquisarDespesa(){
    let ano = document.querySelector('.ano').value
    let mes = document.querySelector('.mes').value
    let dia = document.querySelector('.dia').value 
    let despesa = {ano,dia,mes}
    
       

    despesa.tipo = document.querySelector('.tipo').value
    despesa.descricao = document.querySelector('.descricao').value
    despesa.valor = document.querySelector('.valor').value                   
    despesa.dia = document.querySelector('.dia').value                   
    despesa.mes = document.querySelector('.mes').value                   
    despesa.ano = document.querySelector('.ano').value                   
    despesa.data = `${dia}/${mes}/${ano}`
    
     
     let despesas =  bd.pesquisa(despesa)

     criarTabela(despesas, true)
     }     

     


