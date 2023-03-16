import { useContext } from 'react'
import { Toast } from 'react-bootstrap'
import { MessageContext } from '../../contexts/message.context.js'

const UserMessage = () => {

    const { closeToast, toastMessage, showToast } = useContext(MessageContext)

    return (
        <Toast onClose={closeToast} show={showToast} delay={3000} autohide style={{ position: 'fixed', bottom: 500, left: 10 }}>
            <Toast.Header>
                <strong className="me-auto">Mensaje del sistema</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
        </Toast>
    )
}

export default UserMessage