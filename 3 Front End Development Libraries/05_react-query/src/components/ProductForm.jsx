import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createProduct } from "../api/productsAPI"

function ProductForm() {

  const queryClient = useQueryClient()

  const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log("Product added successfully!")
      queryClient.invalidateQueries('products')
    }
  })

  const handleSubmit = (e) => {
    
    e.preventDefault()

    // console.log(e.target)

    const formData = new FormData(e.target)
    
    const product =  Object.fromEntries(formData)

    // console.log(product)

    // addProductMutation.mutate(product)
    addProductMutation.mutate({
      ...product,
      id: crypto.randomUUID(),
      inStock: true
    })

  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="description">description</label>
      <input type="text" id="description" name="descriptiom" />
      
      <label htmlFor="price">Price</label>
      <input type="text" id="price" name="price" />

      <button>Add Product</button>

    </form>
  )
}

export default ProductForm;