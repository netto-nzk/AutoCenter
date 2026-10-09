export const veiculos = [
    {id:1, nome:'Bros 160', tipo:'Moto',  km:90000, selecionado:true}
]

export function adicionarVeiculo(id) {
    
}

export function removerVeiculo(id) {
    const posicao = veiculos.findIndex(v => v.id === id);

    if(posicao === -1) {
        return;
    } 

    veiculos.splice(posicao, 1);

}















