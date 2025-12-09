export const getRelatedProducts = (currentProduct, allProducts, limit = 4) => {
  return allProducts
    .filter(
      product =>
        product.id !== currentProduct.id &&
        product.category === currentProduct.category
    )
    .slice(0, limit)
}
