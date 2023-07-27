
import './App.css';
import Button from './components/Button';


const App = () => {
  const handleClick= () => {
    console.log('Button was clicked')
  }
  
  return (
    <div className="App">
      {/* <Button text={"Hi"} func={handleClick} style={{backgroundColor: 'blue', color : 'red', height:"50px",width: "100px"}}>
       
      </Button>
      <Button text={"click me"} style={{backgroundColor: "red", color:"white" , borderRadius: "50px"}}></Button> */}
      <Button text="Hiii" type="red" func={handleClick}></Button>
    </div>
  );
}

export default App;
