import React from "react"
import MeuComponente from "./components/MeuComponente"
import MeuComponenteProp from "./components/MeuComponenteProp"
import Card from "./components/Card"
import Titulo from "./components/Titulo"

export default function App() {

  const labubus = [
    {
      id: 1,
      nome: "Pistachebu",
      tipo: "Lendário",
      poder: "+8000",
      imagem: "https://www.singulart.com/images/artworks/v2/cutout/52806/main/zoom/2326640_3a8e4c836a5c2900cd7455245b69961a.png"
    },
    {
      id: 2,
      nome: "LabuGang",
      tipo: "Perigoso",
      poder: "3500",
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAImx_KV96M6e8xdfsvaR4PRlPFHjDettmkA&s"
    },
    {
      id: 3,
      nome: "Naruto Labumaki",
      tipo: "Ninja",
      poder: "10000",
      imagem: "https://www.doudouetpeluche.com/wp-content/uploads/2025/08/3-36.jpg"
    },
    {
      id: 4,
      nome: "LabuGay",
      tipo: "Inclusivo",
      poder: "24🌈",
      imagem: "https://i.etsystatic.com/57022606/r/il/7b1264/6969648789/il_1080xN.6969648789_m0uv.jpg"
    },
    {
      id: 5,
      nome: "Labubu Coca-Cola",
      tipo: "Gasoso",
      poder: "5000",
      imagem: "https://stctoys.com/cdn/shop/files/cn-11134207-7ras8-m3vr7my0o2hi42_1800x1800.jpg?v=1736134812"
    }
  ]

  return(
    <main style={{
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      marginTop: "50px",
      flexWrap: "wrap"
    }}>

      <div style={{ width: "100%" }}>
        <Titulo texto="Labubus"/>
      </div>

      {
        labubus.map((j) => (
          <Card key={j.id}{...j}/>
        ))
      }

    </main>
  )
}