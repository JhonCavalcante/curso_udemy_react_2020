import React from 'react'
const PRODUTOS = '_PRODUTOS';

export function ErroValidacao(erros){
    this.errors = erros;
}

export default class ProdutoService{

    validar = (produto) =>{
        const errors = []

        if(!produto.nome){
            errors.push('O campo Nome é Obrigatório')
        }

        if(!produto.sku){
            errors.push('O campo SKU é Obrigatório')
        }

        if(!produto.preco || produto.preco <= 0){
            errors.push('O campo Preço é Obrigatório e deve ser maior que zero')
        }

        if(!produto.fornecedor){
            errors.push('O campo Fornecedor é Obrigatório')
        }

        if(errors.length > 0 ){
            throw new ErroValidacao(errors)
        }
    }

    obterProdutos = () =>{
        const produtos = localStorage.getItem(PRODUTOS)
        if(!produtos){
            return [];
        }
        return JSON.parse(produtos)
    }

    obterIndex = (sku) => {
        let index = null;
        this.obterProdutos().forEach((produto, i) => {
            if(produto.sku === sku){
                index = i;
            }
        })
        return index;
    }

    deletar = (sku) => {
        const index = this.obterIndex(sku)
        if(index !== null){
            const produtos = this.obterProdutos()
            produtos.splice(index, 1)
            localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
            return produtos

        }
    }

    salvar = (produto) =>{

        this.validar(produto)

       let produtos = localStorage.getItem(PRODUTOS)
       if(!produtos){
           produtos = [];
       }else{
           produtos= JSON.parse(produtos)
       }

       const index = this.obterIndex(produto.sku)
       if(index === null){
        produtos.push(produto);
       }else{
           produtos[index] = produto;
       }       

       localStorage.setItem(PRODUTOS, JSON.stringify(produtos))
    }
}