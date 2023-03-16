import ProductCard from "../ProductCard/ProductCard"
import { Col, Row } from "react-bootstrap"

const ProductsList = ({ products }) => {

    return (

        <Row>

            {
                products.map(elm => {
                    return (
                        <Col md={{ span: 4 }} key={elm._id} >
                            <ProductCard {...elm} />
                        </Col>
                    )
                })
            }

        </Row >

    )
}

export default ProductsList