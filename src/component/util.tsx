import React from 'react'
import useSearchData from "./useSearchData"
import { useEffect, useMemo, useState } from 'react';

const util = () => {
  const { productList, generatorKeyUnique, categories } = useSearchData()

  const categorySelected: any = categories?.map((item) => item?.category)
  const categoriesUniques = [...new Set(categorySelected)]
  const categoryItems: any = productList?.filter((product)=> product.category === categorySelected[1]).map((item) => console.log('item',item))

  const initialChecks = new Array(categoriesUniques.length).fill(false)
  const [isChecked, setIsChecked] = useState<any>(
    new Array(categoriesUniques.length).fill(false)
  )
  const [isShow, setIsShow] = useState<any>(false)
  const [checkedPrueba, setCheckedPrueba] = useState<any>(false)

  const onChangeChecked = (id: any) => {
 
    const updateIsChecked: any = categoriesUniques?.map((item, index) =>
      item === id ? true : false
    )
    //console.log(updateIsChecked)
    setIsChecked(updateIsChecked)

    setIsShow(true)
  }

  console.log({ categoryItems })
  //console.log({ isShow })
  //console.log(initialChecks)
  //console.log(categorySelected)
  //console.log(categoriesUniques)
  useEffect(() => {
    setIsShow(false)
    
  }, [isChecked])
 const listMemo = useMemo(() => console.log(isChecked), [isChecked])

 const handleChangePrueba = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { target } = e
  const{value,checked} = target
  console.log('value',value,checked)
  
 }

 console.log({checkedPrueba})


  return (
    <div>
       {/* <div className="listFilter" key={`li-${generatorKeyUnique}`}>
            {isChecked[index]
              ? productList
                  ?.filter((products: any) => products?.category === item)
                  .map(({ name }, i) => {
                    return (
                      <span
                        className="listFilterItem"
                        key={`${i}-l-${generatorKeyUnique}`}
                      >
                        {name}
                      </span>
                    )
                  })
              : null}
          </div>
        </div> */}
    </div>
  )
}

export default util
