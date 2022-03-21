import React from 'react';

export default function TextField(props) {
    return (
        <div className="grupo">
            <label htmlFor={props.item}>{props.item}:</label>
            <input
              id={props.item}
              type="text"
              placeholder="Digite a info do paciente"
              className="campo"
              onChange={props.onChange}
            />
          </div>
    )
}