import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

// Possible better fix for GHPages and keep BrowserRouter instead of HashRouter:
//     <Router basename={process.env.PUBLIC_URL}>
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route path='/' exact component={Dashboard} />
        <Route path='/detail/:id' component={MovieDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
