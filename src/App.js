import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import { EnterName } from './components/EnterName';
import { ProductList } from './components/ProductList';
import { AddProductNumber } from './components/AddProductNumber';
import { AddProductName } from './components/AddProductName';
import { AddProductPrice } from './components/AddProductPrice';

function App() {

  return (
      <div>
        <Router>
          <Route exact path={["/"]} component={EnterName} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/addproductnumber" component={AddProductNumber} />
          <Route path="/addproductname" component={AddProductName} />
          <Route path="/addproductprice" component={AddProductPrice} />

        </Router>
      </div>
  );
}
export default App;
