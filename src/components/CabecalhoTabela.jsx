import React, { Component } from 'react';
 class CabecalhoTabela extends Component {
     render() { 
         return (
            <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Peso (Kg)</th>
              <th>Altura (m)</th>
              <th>Gordura Corporal(%)</th>
              <th>IMC</th>
            </tr>
          </thead>
         );
     }
 }
  
 export default CabecalhoTabela;