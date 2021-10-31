import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider'
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import Gallery from './Pages/Home/Gallery/Gallery';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Users from './Pages/Users/Users';
import AddUser from './Pages/AddUser/AddUser';
import UpdateUser from './Pages/UpdateUser/UpdateUser';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service">
              <Services></Services>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/users">
              <Users></Users>
            </Route>
            <Route path="/users/add">
              <AddUser></AddUser>
            </Route>
            <Route path="/users/update/:id">
              <UpdateUser></UpdateUser>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider> 
    </div>
  );
}

export default App;
