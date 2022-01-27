import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AuthProvider from './components/Authcontext/AuthProvider';
import PrivateRoute from './components/PrivateRout/PrivateRoute';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DashBoard from './components/DashBoard/DashBoard';
import BlogDetail from './components/BlogDetails/BlogDetail';
import NoFound from './components/NoFound/NoFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path='/detail/:idn'>
          <BlogDetail></BlogDetail>
        </Route>
        <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route path="/*">
       <NoFound></NoFound>
     </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
