import { Container } from "react-bootstrap";
import ListProducts from "../../components/ListProducts/ListProducts";
import "./style.css";
 

const Home = () => {
    return (
        <Container className = "home">
            <ListProducts/>
        </Container>
   
    )
}

export default Home