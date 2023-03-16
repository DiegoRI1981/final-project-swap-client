import { Col, Button, Form } from 'react-bootstrap'
import uploadServices from '../../services/upload.services'
import { useState, useEffect } from 'react'
import productService from '../../services/products.services'
import ErrorForm from '../ErrorForm/ErrorForm'
import { useNavigate, useParams } from 'react-router-dom'



const EditProductForm = () => {

    const [loadingImage, setLoadingImage] = useState(false)
    const [errors, setErrors] = useState([])

    const { product_id } = useParams()

    const navigate = useNavigate()

    const [productData, setProductData] = useState({
        title: '',
        description: '',
        wishes: '',
        imageUrl: ''
    })

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        productService
            .getOneProduct(product_id)
            .then(({ data }) => setProductData(data))
            .catch((err) => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setProductData({ ...productData, [name]: value })
    }

    const handleProductSubmit = e => {
        e.preventDefault()

        productService
            .editProduct(product_id, productData)
            .then(() => {
                navigate("/profile")

            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errorMessages)
            })

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
                console.log(err)
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
                    <Form.Control type="text" name="wishes" value={productData.wishes} onChange={handleInputChange} />
                </Form.Group>

                {errors.length > 0 && <ErrorForm>{errors.map(elm => <p>{elm}</p>)}</ErrorForm>}

                <Button variant="dark mt-3" type="submit" disable={loadingImage.toString()}>{loadingImage ? 'Loading iamge' : 'Update Product'}</Button>
            </Form>
        </Col>

    )
}

export default EditProductForm

