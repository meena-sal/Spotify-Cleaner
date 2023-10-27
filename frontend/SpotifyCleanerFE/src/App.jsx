import {useEffect, useState} from 'react'
import Axios from 'axios'
import LoginScreen from './LoginScreen.jsx'
import './styles.css'


function App() {
  const CLIENT_ID = '57dff32642834b67b59cfa703af73f46';
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("");
  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    // getToken()


    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)
  }, [])

  const logout = () => {
      setToken("");
      window.localStorage.removeItem("token")
  }

  // const [data, setData] = useState();

  // const getData = async() =>{
  //   const response = await Axios.get("http://localhost:5001/getData");
  //   setData(response.data);
  // }

  // useEffect(() => {
  //   getData();
  // }, []);


  return (
    
    <>
      {!token ?
      <LoginScreen>
      <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
            to Spotify</a>
      </LoginScreen>
      : <button onClick = {logout}>logout</button>}
    </>
  )
}

export default App
