import { useState } from "react/cjs/react.development"

const GetUserComponent = ( { setUser, setIsLoggedIn } ) => {
   const [userInput, setUserInput] = useState('')
   const handleLogin = () => {
       if(userInput!== ''){
           setUser(userInput)
           setIsLoggedIn(true)
       }
   }
   return(
       <form>
           <input
                type="text"
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
            />
            <button onClick={() => handleLogin(userInput)}>Acessar com o nome</button>
       </form>
   )
}

export default GetUserComponent