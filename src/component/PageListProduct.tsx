import { ChangeEvent, useEffect, useState, useMemo } from "react"

import "./index.css"
import ListProducts from "./ListProducts"
import { ISlelectedItem, categoryType } from "../shared/models/typings"

const PageListProduct = () => {
  const generatorKeyUnique = Math.floor(Math.random() * 1000)

  const [productList, setProductList] = useState<ISlelectedItem[]>([])
  const [productSelected, setProductSelected] = useState<ISlelectedItem[]>([])
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [categories, setCategories] = useState<ISlelectedItem[]>()
  const [filterProducts, setFilterProducts] = useState<ISlelectedItem[]>([])
  const [categoriesUniques, setCategoriesUniques] = useState<categoryType[]>([])
  const [inputSearch, setInputSearch] = useState("")

  const getData = () => {
    fetch(
      "https://my-json-server.typicode.com/luisforerop/products-database/products"
    )
      .then((res) => res.json())
      .then((response) => {
        setProductList(response),
          setProductSelected(response),
          setCategories(response)
        setFilterProducts(response)
        const productsCategory = response?.map((item: any) => item?.category)
        const category: categoryType[] = [
          ...new Set(productsCategory),
        ] as categoryType[]
        setCategoriesUniques(category)
      })
  }

  const [checkedCategories, setCheckedCategories] = useState<any>(false)
  const [idCheckbox, setIdCheckbox] = useState<any>("")

  const handleChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e
    setInputSearch(target.value)
  }

  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>, id: any) => {
    const updateIsChecked: any = categoriesUniques?.map((item: categoryType) =>
      item === id ? true : false
    )
    setCheckedCategories(updateIsChecked)
    setIdCheckbox(id)
    setIsChecked(true)
  }

  const categoryItems: ISlelectedItem[] = productList?.filter(
    (product) => product?.category === idCheckbox
  )

  useEffect(() => {
    getData()
  }, [setCheckedCategories])

  return (
    <div className="container">
      <div className="inputContainer">
        <input
          className="inputSearch"
          type="search"
          placeholder="Prueba buscando aqui"
          value={inputSearch}
          onChange={(e) => handleChangeInputSearch(e)}
        ></input>
      </div>
      <div className="cardContainer">
        {!isChecked
          ? productList?.map((item: any, index: number) => (
              <ListProducts
                key={index}
                id={`${index}-lp-${generatorKeyUnique}`}
                products={item}
              />
            ))
          : categoryItems.map((item: any, index: number) => (
              <ListProducts
                id={`${index}-${generatorKeyUnique}`}
                key={index}
                products={item}
              />
            ))}
      </div>
      <div className="filterContainer">
        {categoriesUniques?.map((item: any, index: number) => (
          <div key={`${index}-ck-${generatorKeyUnique}`}>
            <div
              key={`${index}-ck-${generatorKeyUnique}`}
              className="checkboxContainer"
            >
              <input
                key={`${index}-${generatorKeyUnique}`}
                id={item?.category}
                onChange={(e) => onChangeChecked(e, item)}
                checked={checkedCategories[index]}
                type="checkbox"
                value={checkedCategories[index]}
              />
              <label
                key={`${index}-lbl-${generatorKeyUnique}`}
                className="checkBoxLabel"
              >
                {item}
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PageListProduct
