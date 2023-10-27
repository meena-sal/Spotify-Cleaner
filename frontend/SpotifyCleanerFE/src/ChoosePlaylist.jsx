import {useState, useEffect} from 'react';
import axios from 'axios'
import './containerStyles.css'

function ChoosePlaylist({logout, token}) {

    const [playlists, setPlaylists] = useState([]);
    const [selectedPlaylist, setSelectedPlaylist] = useState(''); // State to store the selected playlist


    useEffect(() => {
        // This function will run when the component is initially rendered
        const fetchPlaylists = async () => {
            try {
              const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
                headers: {
                  Authorization: `Bearer ${token}`
                },
                params: {
                  limit: 50,
                  offset: 0
                }
              });
      
              // Extract playlist names from the response data
              const playlistNames = response.data.items.map(playlist => playlist.name);
      
              setPlaylists(playlistNames); // Set the playlist names in state
            } catch (error) {
              console.error("Error fetching playlists:", error);
            }
          };
      
          fetchPlaylists(); // Call the function to fetch playlists
        }, [token]); // Add token as a dependency

        const handleSelectChange = (event) => {
            setSelectedPlaylist(event.target.value);
          };


  return (
    <div className = "pageContainer">
        <div className = "smallBox" id = "choosePlaylist">
            <div>
                <select value={selectedPlaylist} onChange={handleSelectChange}>
                    <option value="">Select a playlist</option>
                    {playlists.map((playlistName, index) => (
                        <option key={index} value={playlistName}>
                            {playlistName}
                        </option>
                    ))}
                </select>
                <p>Selected playlist: {selectedPlaylist}</p>
            </div>
            <button onClick = {logout}>Logout</button>
        </div>
    </div>
  );
}

export default ChoosePlaylist;