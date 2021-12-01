import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Home/Blog/Blog';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
