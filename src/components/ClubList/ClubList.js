import React from 'react';
import './ClubList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link} from 'react-router-dom';
import { Button} from 'react-bootstrap';

const ClubList = (props) => {
    const {strLeague, strSport, idTeam, strTeamBadge} = props.clubs;

    return (
        <div className ="col-md-4">
            <div className="card_Item text-center">
                <img src={strTeamBadge} className="clubList_img" alt=""/>
                <hr/>
                <h5>{strLeague}</h5>
                <p>{strSport}</p>
                <hr/>
                <Link to={`/club-detail/${idTeam}`}>
                    <Button className="viewDetailBtn">Details <FontAwesomeIcon icon={faArrowRight} className="icon" /></Button>
                </Link>
            </div>
        </div>
    );
};

export default ClubList;