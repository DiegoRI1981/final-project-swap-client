import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/Footer/Footer'
import UserMessage from './components/UserMessage/UserMessage'

const App = () => {
  return (

    <div className="App">
      <Navigation />
      <AppRoutes />
      <Footer />
      <UserMessage />
    </div>

  )
}

export default App;
