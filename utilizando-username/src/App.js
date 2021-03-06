import './App.css';
import { useState } from 'react'
import GetUserComponent from './components/GetUserComponent';
import WelcomePage from './components/WelcomePage';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  return (
    <div className="App">
      <header className="App-header">
          {
            isLoggedIn? (
              <>
                <WelcomePage user = {user} setIsLoggedIn = {setIsLoggedIn}></WelcomePage>
              </>
            ):
            (
              <>
                <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn}></GetUserComponent>
              </>
            )
          }
      </header>
    </div>
  );
}

export default App;
