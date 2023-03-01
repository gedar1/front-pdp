import React from "react"
import { useEffect, useState } from "react"


const useSearchData = () => {
  const [productList, setProductList] = useState<any[]>([])
  const [productSelected, setProductSelected] = useState<any[]>()
  const [selectionInput, setSelectionInput] = useState<any>([])
  const [categories, setCategories] = useState<any[]>()
  const [listItem, setListItem] = useState("")
  const [inputSearch, setInputSearch] = useState("")
  const [filterProducts, setFilterProducts] = useState<any>([])
  const[categoriesUniques,setCategoriesUniques]= useState<any>()
  
  const handleChangeInputSearch = (e: any) => {
    const { target } = e
    setInputSearch(target.value)
  }

  const [valuesCheck, setValuesCheck] = useState<any>([false])
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
      })
      const categorySelected: any = categories?.map((item : any) => item?.category)
      console.log(categorySelected)
        setCategoriesUniques([...new Set(categorySelected)])
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    const searchProduct: any[] = productList?.filter((product) =>
      product?.name?.toLocaleLowerCase().startsWith(inputSearch)
    )
    setProductSelected(searchProduct)
  }, [inputSearch])
  useEffect(() => {
    
    console.log('desde useefftect useSearchdata')
    
    
  //   // const categoryItems: any = productList?.filter(
  //   //   (product) => product?.category === idCheckbox
  //   // )
  //   // //.map((item) => item)
  //   // setFilterProducts(categoryItems)
   }, [])
  
 console.log(categoriesUniques)

  return {
    productList,
    inputSearch,
    productSelected,
    selectionInput,
    listItem,
    categoriesUniques,
    categories,
    valuesCheck,
    filterProducts,
    getData,
    handleChangeInputSearch,
  
  }
}

export default useSearchData
