import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClubList from '../ClubList/ClubList';
import homeBanner from '../images/Home_banner.jpeg';
import './Home.css'

const Home = () => {
    const [clubs, setClubs] = useState([])
    useEffect (() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setClubs(data.teams))
    }, [])
    return (
        <div className="home">
            <div>
                <img src={homeBanner} className="w-100" alt=""/>
            </div>
            
            <div className="container py-3">
                <div className="row">
                    {
                        clubs.map(clubs => <ClubList clubs={clubs}></ClubList>)
                    }
                </div>
            </div>
                


        </div>
    );
};

export default Home;