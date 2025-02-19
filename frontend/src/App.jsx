import"./css/App.css";
import Home from './pages/home';
import MovieCard from "./Components/MovieCard";
import { Route, Routes } from 'react-router-dom';
import Favorite from './pages/Favorites';
import NavBar from './Components/NavBar';
import { MovieProvider } from "./contexts/MovieContext";
 {/*Imporing the component tha5t we wrote. Because we have the export statement we can just write it like this*/}


function App() {
  return (
    <MovieProvider> 
    <div> 
      <NavBar />
      <main className="main-content">
        <Routes> 
          <Route>
            <Route path="/" element={<Home />}/>
            <Route path="/favorites" element={<Favorite />}/>
          </Route>
        </Routes>
      </main>
    </div>
    </MovieProvider>
  );
}

export default App

//Creating and using a dummy component

    //Can only retun on parent, cant have another div at the same level
    //This is a fragment to make it able to have two divs <> </>
    /*<> 
      <Text display ="Awe"/>
      <Text display ="Whats up"/>
    </>*/


  //Dummy componet
  /*function Text(/*Adding props here This makes it able to change it {display}){
  return(
  <div> 
      <p>{display}</p>
    </div>
  )
  }*/

  /*Conditional Rendering
        {
          movieNumber === 2? (
            <MovieCard movie={{title: "Mia's Life", release_date: "2002"}} />
          ) : (
            <MovieCard movie={{title: "Tim's Life", release_date: "2024"}} />
          )}*/

