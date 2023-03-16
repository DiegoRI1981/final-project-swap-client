import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProductsList from "../../components/ProducstList/ProductsList"
import productService from "../../services/products.services"
import Loader from "../../components/Loader/Loader"
import SearchBar from "../../components/SearchBar/SearchBar"

const ProductsPage = () => {

    const [products, setProducts] = useState([])

    const [productsBackUp, setProductsBackUp] = useState('')

    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        productService
            .getAllProducts()
            .then(({ data }) => {
                setProducts(data)
                setProductsBackUp(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleSearchBar = e => {
        const filteredProducts = productsBackUp.filter(elm =>
            elm.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setProducts(filteredProducts)
    }


    return (
        <>
            <Container >
                {
                    isLoading
                        ?
                        <Loader />
                        :

                        <>

                            <h3>Products</h3>
                            <hr />
                            <Row>
                                <Col md={{ offset: 3, span: 6 }}>
                                    <SearchBar handleSearchBar={handleSearchBar} />
                                </Col>
                            </Row>
                            <ProductsList products={products} />


                        </>

                }
            </Container>
        </>
    )
}

export default ProductsPage