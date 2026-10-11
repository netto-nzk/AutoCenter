export const veiculos = [
    {id:1, nome:'Bros 160', tipo:'Moto',  km:90000, ano: 2016, selecionado:true}
]

export function adicionarVeiculo(nome, tipo, km, ano) {
    const veiculosId = veiculos.map(v => v.id);
    const maiorRegistro = Math.max(...veiculosId);
    
}

export function removerVeiculo(id) {
    const posicao = veiculos.findIndex(v => v.id === id);

    if(posicao === -1) {
        return;
    } 

    veiculos.splice(posicao, 1);

}















