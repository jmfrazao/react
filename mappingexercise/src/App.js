import React from "react"
import productData from "./vschoolProducts"
import Product from "./Product"

function App(){
    const prodComponents = productData.map(
        (prod => <Product key = {prod.id} product = {prod}/>)
    )
    return(
        <div>
            {prodComponents}
        </div>
    )
}



export default App