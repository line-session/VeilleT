import Footer from './components/Footer';
import Header from './components/Header';
import { Router, Route } from '@solidjs/router'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <Header />

    <Router>
      <Route path='/contact' component={Contact} />

    </Router>

    <Footer />
    </>
  )
}

export default App;
