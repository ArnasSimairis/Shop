const productsService = async () => {
 const response = await fetch('https://dummyjson.com/products')
 const result = await response.json()
 const newdata = result.products
 console.log(newdata);
 return newdata
}

export default productsService