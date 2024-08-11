import {Link} from 'react-router-dom'
import Not_Found_image from '../Resources/Not_Found_image.jpeg'
import {NotFoundContainer,NotFoundImage,BackButton} from './notFoundStyled'

const NotFound = () => <NotFoundContainer>
    <NotFoundImage alt="Not Found Page" src={Not_Found_image} />
    <Link to="/login">
    <BackButton type="button">Back</BackButton>
    </Link>
</NotFoundContainer>
export default NotFound