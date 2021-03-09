import React, { useEffect, useState } from 'react';
import './ClubDetail.css'
import { useParams } from 'react-router-dom';

const ClubDetail = () => {
    const {id} = useParams()
    const [club, setClub] = useState({})
    const {name, email, username, phone, website} = club
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setClub(data.teams))
    }, [])
    return (
        <div>
            <h1>This is details of: {name}</h1>
            <h5>Email: {email}</h5>
            <p>User Name: {username}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default ClubDetail;