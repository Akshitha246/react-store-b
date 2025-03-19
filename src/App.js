import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route index element={<Products/>}/>
        <Route path="home" element={<Products/>}/>
        <Route path="Cart" element={<Cart/>}/>
      </Routes>
      <Products/>
      <Footer/>
    </BrowserRouter>
  );
}
 export default App;