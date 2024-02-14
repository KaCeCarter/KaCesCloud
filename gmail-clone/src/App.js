import './App.css';


import Main from './Components/layout/Main'
import Header from './Components/layout/Header' //this imports the header.js filer from the layout folder
                                                //now you can go to the 'div' section of 'Header.js'

                                                
function App() {
  return (
    <div className="App">
<Header />  
{/* //this is how you write a header in JS & HTML, you have to create a new file too named 'header' after you add this header line */}
    <Main/>
    </div>
  );
}

export default App;
