import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClubDetail from '../ClubDetail/ClubDetail';
import ClubList from '../ClubList/ClubList';
import './Home.css'

const Home = () => {
    const [clubs, setClubs] = useState([])
    useEffect (() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setClubs(data.teams))
    }, [])
    return (
        <div>
            <h1>Clubs: {clubs.length}</h1>
            {
                clubs.map(clubs => <ClubList clubs={clubs}></ClubList>)
            }
            {
                clubs.map(clubs => <ClubDetail clubs={clubs}></ClubDetail>)
            }
        </div>
    );
};

export default Home;