
import './App.css'
import ButtonComponents from './components/ButtonComponents'
import FormComponent from './components/FormComponent'

function App() {


  return (
    <>
      this is app.jsx
      <FormComponent 
      text={"Hello this is data"} 
      value={34}
      arr={[1,2,3,4,5]}
      />
  
    </>
  );
}

export default App;
