interface Product {
    productName: string;
    price: number;
    rating: number;
    discount: number;
    availability: string;
  }
  
  function sortByRating(products: Product[]): Product[] {
    for (let i = 0; i < products.length - 1; i++) {
      for (let j = 0; j < products.length - 1 - i; j++) {
        if (products[j].rating < products[j + 1].rating) {
          const temp = products[j];
          products[j] = products[j + 1];
          products[j + 1] = temp;
        }
      }
    }
    return products;
  }
  
  function sortByPrice(products: Product[]): Product[] {
    for (let i = 0; i < products.length - 1; i++) {
      for (let j = 0; j < products.length - 1 - i; j++) {
        if (products[j].price > products[j + 1].price) {
          const temp = products[j];
          products[j] = products[j + 1];
          products[j + 1] = temp;
        }
      }
    }
    return products;
  }
  
  function sortByDiscount(products: Product[]): Product[] {
    for (let i = 0; i < products.length - 1; i++) {
      for (let j = 0; j < products.length - 1 - i; j++) {
        if (products[j].discount < products[j + 1].discount) {
          const temp = products[j];
          products[j] = products[j + 1];
          products[j + 1] = temp;
        }
      }
    }
    return products;
  }
  
  function filterProducts(
    top: number,
    minPrice: number,
    maxPrice: number,
    sortBy: string,
    products: Product[]
  ): Product[] {
    let filteredProducts: Product[] = [];
  
    for (const product of products) {
      if (product.price >= minPrice && product.price <= maxPrice) {
        filteredProducts.push(product);
      }
    }
  
    switch (sortBy) {
      case "rating":
        filteredProducts = sortByRating(filteredProducts);
        break;
      case "price":
        filteredProducts = sortByPrice(filteredProducts);
        break;
      case "discount":
        filteredProducts = sortByDiscount(filteredProducts);
        break;
      default:
        break;
    }
  
    const topProducts = filteredProducts.slice(0, top);
  
    return topProducts;
  }