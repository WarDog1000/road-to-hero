import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteProduct, getProducts, updateProduct } from '../api/productsAPI';

function Products() {
  
  const queryClient = useQueryClient()
  
  // const query = useQuery()
  const { isLoading, data: products, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: el => el.sort((a, b) => b.id - a.id)
  })

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => queryClient.invalidateQueries('products') // vulve a solicitar los datos
  })

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => queryClient.invalidateQueries('products')
  })

  const handleDelete = (arg) => {
    console.log(arg)
    deleteProductMutation.mutate(arg)
  }

  const handleUpdate = (product, checked) => {
    updateProductMutation.mutate({
      ...product,
      inStock: checked
    })
  }

  if(isLoading) return <div>Loading...</div>
  else if(isError) return <div>Error: {error.message}</div>

  return (
    <div>
      {/* {JSON.stringify(products)} */}
      {products && products.map( el => (<div key={crypto.randomUUID()}>
        <h3>name: {el.name}</h3>
        <p>{el.description}</p>
        <p>price: {el.price}</p>
        <button onClick={() => handleDelete(el.id)}>Delete</button>
        <input checked={el.inStock} type="checkbox" name="inStock" id={el.id} onChange={(e) => handleUpdate(el, e.target.checked)}/>
        <label htmlFor={el.id}>In Stock</label>
      </div>))}
    </div>
  );
}

export default Products;