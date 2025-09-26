import React from "react"
import "../components/Card.css"

export default function Card({ nome, tipo, poder, imagem }) {
    return(
        <article className="card">
            <div className="c-cabecalho">
                <img src={ imagem } alt={ nome } className="c-imagem"/>
                <div className="c-info">
                    <h3 className="c-nome"> { nome } </h3>
                    <span className="c-etiqueta"> { tipo }</span>
                </div>
            </div>

            <div className="c-meta">
                <span><strong> Poder:</strong> { poder } </span>
            </div>
            
        </article>
    )
}

