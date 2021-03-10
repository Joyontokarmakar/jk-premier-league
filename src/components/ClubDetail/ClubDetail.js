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
    return (
        <div className="home">
            <div>
                <img src={strStadiumThumb} className="banner_img w-100 img-fluid" alt=""/>
                <img src={strTeamBadge} className="logo_img img-fluid" alt=""/>
            </div>
            <div className="container">
                <div className="row team_details d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h3 className="teamName">{strTeam}</h3>
                        <ul className="teamData">
                            <li><span><img src={found} alt=""/></span> Founded: {intFormedYear}</li>
                            <li><span><img src={flag} alt=""/></span> Country: {strCountry}</li>
                            <li><span><img src={football} alt=""/></span> Sport Type: {strSport}</li>
                            <li><span><img src={gender} alt=""/></span> Gender: {strGender}</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        {(() => {
                            if (strGender === "Male") {
                                return (
                                    <img src={male} className="genderGroupImage img-fluid" alt=""/>
                                )
                            } 
                            else {
                                return (
                                    <img src={female} className="genderGroupImage img-fluid" alt=""/>
                                )
                            }
                        })()}
                    </div>
                </div>

                <div className="row">
                    <p className="description">{strStadiumDescription}</p>
                </div>
                <div className="row">
                    <p className="description">{strDescriptionEN}</p>
                </div>

                <div className="row d-flex justify-content-center align-items-center">
                    <a href={`https://${strFacebook}`} target="blank">
                        <img src={faceBook} className="linkItem" alt=""/>
                    </a>
                    <a href={`https://${strTwitter}`} target="blank">
                        <img src={twitter} className="linkItem" alt=""/>
                    </a>
                    <a href={`https://${strYoutube}`} target="blank">
                        <img src={youtube} className="linkItem" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ClubDetail;