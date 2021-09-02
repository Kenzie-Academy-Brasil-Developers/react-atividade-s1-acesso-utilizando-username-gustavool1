const WelcomePage = ( { user, setIsLoggedIn } ) =>{
    const handleLogout = () =>{
        setIsLoggedIn(false)

    }
    return (
        <div>
            <h2>Boas vindas, {user}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default WelcomePage