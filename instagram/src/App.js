import './App.css';
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Posts from './components/Posts';
import Post from './components/Post';
import Comments from './components/Comments';
// import Home from './Home';
// import About from './About';
// import CreateToDo from './CreateToDo';
// import List from './List';
// import ItemDetails from './Edit';



const App = () =>{

    return(
        <>
            <Routes>
                {/* <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/create" element={<CreateToDo />} /> 
                <Route path="/list" element={<List />} />
                <Route path="/edit/:userId" element={<ItemDetails />}/> */}

                <Route path='/' element={<Posts />} />
                <Route path='/post/:index' element={<Post />} />
                <Route path='/comments' element={<Comments />} />
            </Routes>
        </>

    )
  }

export default App;
