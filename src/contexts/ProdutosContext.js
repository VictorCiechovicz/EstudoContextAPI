import { createContext,useState } from "react";

export const ProdutosContext=createContext({ })

export function ProdutosProvider({children}){
const [quantidade,setQuantidade]=useState(0)
const [carrinho,setCarrinho]=useState([])
const [ ultimosVistos,setUltimosVistos]=useState([])

//logica para acrescentar um produto no carrinho
function viuProduto(produto){
  setQuantidade(quantidade+1);

  let novoCarrinho=carrinho
  novoCarrinho.push(produto);
  setCarrinho(novoCarrinho)


//logica que adiciona um novo item e verifica se esse item ja existe
//no carrinho ele so adiciona na quantidade
  let novoUltimoVisto=new Set(ultimosVistos)
  novoUltimoVisto.add(produto)
  //esse metodo abaico tranforma em um array o objeto
  //para conseguir usar e listas dentro do carrinho
  setUltimosVistos([...novoUltimoVisto])
}

  return(

    <ProdutosContext.Provider value={{
   quantidade,
   carrinho,
   ultimosVistos,
   viuProduto,
    }}>
      {children}
    </ProdutosContext.Provider>
  )
}