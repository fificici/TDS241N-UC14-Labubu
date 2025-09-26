import React from "react"

const MeuComponenteProp = ({ nome }) => {
    return(
        <div className="container">
            <h1> Olá, {nome}! </h1>
        </div>
    )
}

export default MeuComponenteProp