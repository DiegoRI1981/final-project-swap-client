import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import { AuthContext } from "../../contexts/auth.context"
import authService from "../../services/auth.services"
import ErrorForm from "../ErrorForm/ErrorForm"
import { useNavigate } from "react-router-dom"
import { MessageContext } from "../../contexts/message.context"

const LoginForm = () => {

    const [errors, setErrors] = useState([])

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { emitMessage } = useContext(MessageContext)

    const { authenticateUser, user } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {
                localStorage.setItem('authToken', data.authToken)
                authenticateUser()
                emitMessage('Welcome back')
                navigate('/products')
            })
            .catch(err => setErrors(err.response.data.errorMessages))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={loginData.password} onChange={handleInputChange} name="password" />
            </Form.Group>

            {errors.length > 0 && <ErrorForm>{errors.map(elm => <p>{elm}</p>)}</ErrorForm>}

            <div className="d-grid">
                <Button variant="dark" type="submit">Login</Button>
            </div>

        </Form>
    )
}

export default LoginForm