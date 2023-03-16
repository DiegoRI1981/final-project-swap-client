import { Form } from 'react-bootstrap'

const SearchBar = ({ handleSearchBar }) => {

    return (
        <Form className='d-flex my-4'>
            <Form.Control

                onChange={handleSearchBar}
                type='search'
                placeholder='Search Product'
                aria-label='search'
            />
        </Form>
    )
}

export default SearchBar
