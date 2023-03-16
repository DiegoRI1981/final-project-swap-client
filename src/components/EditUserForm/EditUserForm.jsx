import { useEffect, useState, useContext } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import uploadServices from './../../services/upload.services'
import userService from './../../services/user.services'
import ErrorForm from '../ErrorForm/ErrorForm'
import { AuthContext } from "../../contexts/auth.context";
import { useNavigate } from "react-router-dom"


const EditUserForm = ({ fireFinalActions, user_id }) => {

    const [loadingImage, setLoadingImage] = useState(false)
    const [errors, setErrors] = useState([])
    const { user } = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState([])

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        profileImg: ''
    })

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        userService
            .profile(user?._id)
            .then(({ data }) => setUserData(data))
            .catch((err) => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        if (currentUser._id === user_id || currentUser.role === 'ADMIN') {

            userService
                .edit(userData)
                .then((user) => {
                    fireFinalActions()
                    navigate("/profile")

                })
                .catch(err => setErrors(err.response.data.errorMessages))
        } else {
            console.log('no tiene permiso para editar')
        }
    }


    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadimage(formData)
            .then(res => {
                setUserData({ ...userData, profileImg: res.data.cloudinary_url })
                setLoadingImage(false)

            })
            .catch(err => {
                console.log(err)
                setLoadingImage(true)
            })
    }


    return (
        <Container>

            <Form onSubmit={handleFormSubmit}>

                <Form.Group className="mb-3" controlId="firstname">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control type="text" value={userData.firstname} onChange={handleInputChange} name="firstname" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastname">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" value={userData.lastname} onChange={handleInputChange} name="lastname" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="image">
                    <Form.Label>Profile image</Form.Label>
                    <Form.Control type="file" onChange={handleFileUpload} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={userData.email} onChange={handleInputChange} name="email" required />
                </Form.Group>

                {errors.length > 0 && <ErrorForm>{errors.map(elm => <p>{elm}</p>)}</ErrorForm>}

                <div className="d-grid">
                    <Button variant="dark" type="submit" disable={loadingImage}>{loadingImage ? 'Loading iamge' : 'Update'}</Button>
                </div>

            </Form>
        </Container>
    )
}

export default EditUserForm