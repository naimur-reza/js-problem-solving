// Question 1: Merge Product Quantities
// Problem Statement:
// You are developing a feature for an e-commerce application that tracks product transactions. Write a JavaScript function that merges an array of product transactions by productId, summing the quantity, returnedQuantity, and totalQuantity for each unique productId.

// Sample Data
const productData = [
  { productId: 29, quantity: 0, returnedQuantity: 3, totalQuantity: 5 },
  { productId: 30, quantity: 0, returnedQuantity: 3, totalQuantity: 5 },
  { productId: 29, quantity: 0, returnedQuantity: 1, totalQuantity: 1 },
  { productId: 30, quantity: 0, returnedQuantity: 1, totalQuantity: 1 }
];
// Expected Output
// [
//   { productId: 29, quantity: 0, returnedQuantity: 4, totalQuantity: 6 },
//   { productId: 30, quantity: 0, returnedQuantity: 4, totalQuantity: 6 }
// ]
// Function Signature
function mergeProducts(products) {



return totalQuantity = productData.reduce((sum, product) => {
    
})


}




const res  = mergeProducts(productData)

console.log(res)