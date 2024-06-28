export async function fetchProducts() {
  const products = await fetch("http://localhost:8000/products/")
    .then((res) => (res.status === 200 ? res.json() : console.log(res.status)))
    .catch((error) => console.log(error));
  return products;
}

export async function fetchProduct(id) {
  const product = await fetch(`http://localhost:8000/products/${id}`)
    .then((res) => (res.status === 200 ? res.json() : console.log(res.status)))
    .catch((error) => console.log(error));
  return product;
}
