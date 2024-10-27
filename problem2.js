const products = [
    { name: 'Apples', quantity: 5 },
    { name: 'Bananas', quantity: 2 },
    { name: 'Cherries', quantity: 15 },
    { name: 'Dates', quantity: 1 }
  ];
  const threshold = 3;


  const getLowStockProducts  = (arr, thresold) => {
    return arr.filter(item => item.quantity < thresold)


    
  }

  const res = getLowStockProducts(products, threshold)

  console.log(res)