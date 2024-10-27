import React, { useState } from "react";
import Principal from "../../componentes/Principal/Principal";

const AdicionarNomes = () => {
  const [nomes, setNomes] = useState([]);
  const [novoNome, setNovoNome] = useState("");

  const adicionarNome = () => {
    if (novoNome.trim() !== "") {
      setNomes((prevNomes) => [...prevNomes, novoNome]);
      setNovoNome("");
    } else {
      alert("informe um nome!");
    }
  };

  return (
    <>
      <div>
        <Principal titulo={"Adicionar Nomes"} voltarPara={"/"}></Principal>
        <br />
        <input
          type="text"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
          placeholder="Novo nome"
        />
        <button onClick={adicionarNome}>Adicionar</button>
        <ul>
          <br />
          {nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdicionarNomes;
