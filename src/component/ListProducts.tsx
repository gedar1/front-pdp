import React from "react"

const ListProducts = ({ products }: any) => {
  const generatorKeyUnique = Math.floor(Math.random() * 1000)
  return (
    <div className="cardProduct">
      <div className="categoryButton">
        <button className="categoryText">{products?.category}</button>
      </div>

      <img className="imageCardProduct" src={`${products?.image}`}></img>

      <div className="textName">
        <span className="fontSpan">{products?.name}</span>
      </div>
      <div className="textPrice">
        <span className="fontSpan">{products?.price}</span>
      </div>
    </div>
  )
}

export default ListProducts
