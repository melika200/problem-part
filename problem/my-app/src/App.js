import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import AddArticle from './Pages/Addarticle/AddArticle'
import EditArticle from './Pages/Editarticle/EditArticle'
import Article from './Pages/Article/Article'
import Articles from "./Pages/Articles/Articles";
import Courses from "./Pages/courses/Courses";


function App (){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/article/:articleId" element={<Article />} />
        <Route path="/edit-article/:articleId" element={<EditArticle />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/courses" element={<Courses />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App 