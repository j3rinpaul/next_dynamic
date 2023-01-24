//file is named in [] because next treats the [] as dynamic routes
import {useRouter} from 'next/router'

//userouter hook is used to obtain router  related details 
//such as
// in this case the product id is the params we need to obtain from the query


function ProductsD(){
    const router = useRouter()
    //useRouter is assessed and stored into another constant for further use
    //router.query return the query passed to obtain the page
    //router.query.productid return the dynamic filename send as query
    //[productid].js the product id in that is passed as productid params
    const pId = router.query.productid //to get the params passed in the url
    return <h1>Product page of {pId}</h1>
}
//any dtring and int can be used as the params passed

export default ProductsD

//[filename].js is treated as dynamic routing file

//next.js matches page with the file in the folder than the dynamic routing page
//ie, if same page is declared in dynamic routing and it is a file in that folder then
//the file in that folder is only accessed and the dynamic routing is ignored

//initally the next.js tries to render the specified file if not found only it render the dynamic pages
