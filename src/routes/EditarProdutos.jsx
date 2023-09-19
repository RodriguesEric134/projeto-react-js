// rfc
import React from 'react'
import { useParams } from 'react-router-dom';

export default function EditarProdutos() {

    //Recuperando o parâmetro ID com o HOOK useParams();
    //Funções com ação pré determinada
    const {id} =  useParams();

    document.title = "EDITAR PRODUTOS " + id;

  return (
    <div>EditarProdutos</div>
  )
}