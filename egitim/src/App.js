import { Container, Form, Row } from 'reactstrap';
import './App.css';
import Category from './Category.js';
import Navi from './Navi.js'
import Product from './Product.js';

function App() {
  let titleProduct = "ProductList"
  let titleCategory = "CategoryList"
  return (
    <div>
      <Container>
        <Row>
         <Navi/>
        </Row>
        <Row>
        <Category title={titleProduct}></Category>
        <Product title={titleProduct}></Product>
        </Row>
      </Container>
    </div>
  );
}

export default App;
