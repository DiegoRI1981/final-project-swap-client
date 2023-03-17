import { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import { MessageContext } from '../../contexts/message.context.js'

const UserMessage = () => {

    const { closeToast, toastMessage, showToast } = useContext(MessageContext)

    return (
        <Toast className="me-auto bg-info" onClose={closeToast} show={showToast} delay={3000} autohide style={{ position: 'fixed', bottom: 500, left: 10 }}>

            <Toast.Body> <b>{toastMessage}</b></Toast.Body>
        </Toast>
    )
}

export default UserMessage