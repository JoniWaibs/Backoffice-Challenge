import React, { useEffect , useState } from 'react'
import Navbar from '../../Layouts/Navbar'
import Sidebar from '../../Layouts/Sidebar'
import ProductComponent from '../ProductComponent'
import { AxiosProducts } from '../../Config/Axios'



const Products = () => {

    const [ products , setProducts ] = useState([])

    useEffect(()=>{
        const consultarAPI = async () =>{
            try {
                const result = await AxiosProducts.get('/products?limit=8')
                setProducts(result.data)
            } catch (error) {
                console.log(error)   
            }
        }
        consultarAPI()
    },[])
    console.log(products)
    if( !products ) return null


    


    return (
            <div className="sm:grid sm:grid-cols-12 sm:max-h-96 ">

                <div className="col-span-2 max-h-screen">
                    <Sidebar/>
                </div>

                <div className="col-span-10 h-20">
                    <Navbar/>
                    <div className="mt-10 container w-11/12 mx-auto   ">
                        <div className="grid grid-col-1 sm:grid-cols-4">
                            { products.length > 0 
                            ?
                                products.map( prod => (
                                    <ProductComponent
                                        key={prod.id}
                                        prod={prod}
                                    />
                                ))
                            :
                                null    
                            }
                        </div>

                    </div>  
                </div>  
            </div> 
    )
}

export default Products
