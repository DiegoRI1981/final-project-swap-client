import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.services"
import { useNavigate } from 'react-router-dom'
import uploadServices from "../../services/upload.services"
import ErrorForm from "../ErrorForm/ErrorForm"

const SignupForm = () => {

    const [errors, setErrors] = useState([])

    const [signupData, setSignupData] = useState({
        firstname: '',
        lastname: '',
        profileImg: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()


    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }



    const handleFormSubmit = e => {

        e.preventDefault()

        authService
            .signup(signupData)
            .then(() => navigate('/login'))
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    const [loadingImage, setLoadingImage] = useState(false)

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setSignupData({ ...signupData, profileImg: res.data.cloudinary_url })
                setLoadingImage(false)

            })
            .catch(err => {
                console.log(err)
                setLoadingImage(true)
            })
    }


    return (

        <Form onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" value={signupData.firstname} onChange={handleInputChange} name="firstname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" value={signupData.lastname} onChange={handleInputChange} name="lastname" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Profile image</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>



            {errors.length > 0 && <ErrorForm>{errors.map(elm => <p>{elm}</p>)}</ErrorForm>}

            <div className="d-grid">
                <Button variant="dark" type="submit" disable={loadingImage}>{loadingImage ? 'Loading iamge' : 'Signup'}</Button>
            </div>

        </Form>
    )
}

export default SignupForm