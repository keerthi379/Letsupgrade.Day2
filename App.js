imaport './App.css';
import Header from './Header';
import Product from './Product';


function App() {

  function doSomething(){
    console.log("hello I am clicked")
  }
  return (
    <div className="App">
      
      <Header/>

      <div className='products_list'>

      <Product name="Samsung Flip" price="Rs.72000" url="https://images.samsung.com/levant/smartphones/galaxy-z-flip3-5g/buy/zflip3_colorselection_phantomblack_mo.jpg"/>
      <Product name="Levis Bag" price="Rs.2000" url="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/819ARdIuEvS._SY695_.jpg"/>
      <Product name="Renee Lipstick" price="Rs.350" url="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/3181MSkG0pL._SX300_SY300_QL70_FMwebp_.jpg"/>

      </div>

      <button className='btn' onClick={()=>{doSomething("Thor")}}> Click </button>
    </div>
  );
}

export default App;
