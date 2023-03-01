import React from 'react';

const getData = ()=>{
    fetch('https://my-json-server.typicode.com/luisforerop/products-database/products')
    .then(res=>res.json())
    .then(response=>console.log(response))

}
getData()