import React, { useState } from "react";
import Principal from "../../componentes/Principal/Principal";

const RemoverNome = () => {
  const [nomes, setNomes] = useState([
    "Fulano",
    "Ciclano",
    "Beltrano",
    "Maria",
    "Pedro",
  ]);

  const removerNome = (index) => {
    const novosNomes = []; // Array para armazenar os nomes restantes

    for (let i = 0; i < nomes.length; i++) {
      if (i !== index) {
        novosNomes.push(nomes[i]); // Adiciona apenas os nomes que não são o selecionado
      }
    }

    setNomes(novosNomes); // Atualiza o estado
  };

  return (
    <div>
      <Principal titulo={"Remover Nomes"} voltarPara={"/"} />
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>
            {nome}
            <button className="btn1" onClick={() => removerNome(index)}> Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RemoverNome;
