import { Col, Button, Form } from "react-bootstrap"
import { useState, useContext } from "react"
import productService from "../../services/products.services"
import uploadServices from "../../services/upload.services"
import ErrorForm from '../ErrorForm/ErrorForm'
import { MessageContext } from "../../contexts/message.context"



const NewProductForm = ({ fireFinalActions }) => {

    const [loadingImage, setLoadingImage] = useState(false)
    const [errors, setErrors] = useState([])

    const { emitMessage } = useContext(MessageContext)

    const [productData, setProductData] = useState({
        title: '',
        description: '',
        wishes: '',
        imageUrl: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.target
        setProductData({ ...productData, [name]: value })
    }

    const handleProductSubmit = e => {
        e.preventDefault()

        productService
            .saveProduct(productData)
            .then(({ data }) => {
                emitMessage('Product created')
                fireFinalActions()

            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }


    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setProductData({ ...productData, imageUrl: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                setLoadingImage(true)
            })
    }


    return (
        <Col md={{ span: 6, offset: 1 }}>
            <Form onSubmit={handleProductSubmit}>
                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Product image</Form.Label>
                    <Form.Control type="file" onChange={handleFileUpload} />
                </Form.Group>

                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={productData.title} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" value={productData.description} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="wishes">
                    <Form.Label>Wishes</Form.Label>
                    <Form.Control type="text" name="wishes" value={productData.length} onChange={handleInputChange} />
                </Form.Group>

                {errors.length > 0 && <ErrorForm>{errors.map(elm => <p>{elm}</p>)}</ErrorForm>}

                <Button variant="dark mt-3" type="submit" disable={loadingImage}>{loadingImage ? 'Loading iamge' : 'Create Product'}</Button>
            </Form>
        </Col>



    )
}

export default NewProductForm