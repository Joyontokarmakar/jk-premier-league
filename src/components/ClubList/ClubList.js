import React from 'react';
import './ClubList.css'
import { Link, useHistory } from 'react-router-dom';

const ClubList = (props) => {
    const {name, email, id} = props.clubs
    const history = useHistory();
    const handleClick = (id) => {
        const url = `/club-detail/${id}`;
        history.push(url);
    }
    const ClubStyle = {
        border: '1px solid red',
        padding: '10px',
        margin: '5px',
        borderRadius: '5px'
    }
    return (
        <div style={ClubStyle}>

            <h2>{name}</h2>
            <p>{email}</p>
            <Link to={`/club-detail/${id}`}>
                <button>Details</button>
            </Link>
        </div>
    );
};

export default ClubList;