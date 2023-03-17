import { useContext, useEffect, useState } from 'react'
import { Card, ButtonGroup, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from './../../contexts/auth.context'
import { useNavigate } from "react-router-dom"
import userService from '../../services/user.services'



const UserCard = ({ firstname, lastname, email, profileImg, _id }) => {
    const navigate = useNavigate();


    const handleDeleteProfile = (_id) => {


        userService
            .delete(_id)
            .then(() => {

                navigate('/')
            })
            .catch(err => {
                console.log(err);

            })
    }


    return (

        <Card className="UserCard mb-2">
            <Card.Body>
                <Card.Img variant="top" src={profileImg} />
                <hr />
                <Card.Title>{firstname} {lastname}</Card.Title>
                <Card.Text>Email: {email} </Card.Text>

                <div >
                    <ButtonGroup style={{ width: '100%' }}>
                        <Link to={`/profile/${_id}`} className="btn btn-dark btn-sm">Profile</Link>
                    </ButtonGroup>
                </div>
            </Card.Body>
        </Card>

    )
}
export default UserCard