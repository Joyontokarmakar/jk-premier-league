import React, { useEffect, useState } from 'react';
import './ClubDetail.css'
import { useParams } from 'react-router-dom';
import male from './images/male.png';
import female from './images/female.png';
import faceBook from './images/Facebook.png';
import twitter from './images/Twitter.png';
import youtube from './images/YouTube.png';
import found from './images/found.png';
import flag from './images/flag.png';
import football from './images/football.png';
import gender from './images/male-gender-sign.png';

const ClubDetail = (props) => {
    const {idTeam} = useParams()
    const [club, setClub] = useState([])
    const {strStadiumThumb, strTeamBadge, strTeam, strCountry, intFormedYear, strSport, strGender, strStadiumDescription, strDescriptionEN, strFacebook, strTwitter, strYoutube} = club
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setClub(data.teams[0]))
    }, [idTeam])

    let teamPhoto;
    if (strGender === "Male") {
        teamPhoto = <img src={male} className="genderGroupImage img-fluid" alt=""/>
    } 
    else {
        teamPhoto = <img src={female} className="genderGroupImage img-fluid" alt=""/>
    }
    return (
        <div className="home">
            <div>
                <img src={strStadiumThumb} className="banner_img w-100 img-fluid" alt=""/>
                <img src={strTeamBadge} className="logo_img img-fluid" alt=""/>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-8 order-md-1 order-2 mt-4">
                        <div className="teamDescription py-4">
                            <div className="description">
                                <h5>Club Description</h5>
                                <p>{strDescriptionEN}</p>
                            </div>
                            <div className="description">
                                <h5>Stadium Description</h5>
                                <p>{strStadiumDescription}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-md-4 order-md-2 order-1 mt-4">
                        <div className="team_details">
                            {teamPhoto}
                            <h3 className="teamName text-center">{strTeam}</h3>
                            <hr/>
                            <ul className="teamData">
                                <li><span><img src={found} alt=""/></span> Founded: {intFormedYear}</li>
                                <li><span><img src={flag} alt=""/></span> Country: {strCountry}</li>
                                <li><span><img src={football} alt=""/></span> Sport Type: {strSport}</li>
                                <li><span><img src={gender} alt=""/></span> Gender: {strGender}</li>
                            </ul>
                            <div className="row d-flex justify-content-center align-items-center">
                                <a href={`https://${strFacebook}`} target="blank" title="Facebook Page">
                                    <img src={faceBook} className="linkItem" alt=""/>
                                </a>
                                <a href={`https://${strTwitter}`} target="blank" title="Twitter Handler">
                                    <img src={twitter} className="linkItem" alt=""/>
                                </a>
                                <a href={`https://${strYoutube}`} target="blank" title="YouTube Channel">
                                    <img src={youtube} className="linkItem" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default ClubDetail;