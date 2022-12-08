import React from 'react';
import logo from './logo.svg';
import './App.css';
import {gql, useQuery} from "@apollo/client";
import {Song} from "./__generated__/graphql";

const SongsQuery = gql`
    query SongsQuery{
      songs {
        id
        name 
        artist {
          id
          name
        }
      }
    }
  `;

function App() {
    const {loading, error, data} = useQuery(SongsQuery)

    if (loading) return <p>Loading</p>
    if (error) return <p>{error.message}</p>

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    {data.songs.map((song: Song) =>
                        <>
                            <p>{song.id}</p>
                            <p>{song.name}</p>
                            <p>{song.artist.name}</p>
                        </>)}
                </div>
            </header>

        </div>
    );
}

export default App;
