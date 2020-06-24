import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";
import Contacts from "./Contacts";

const SocialProfile = props => {
    const { link, image } = props.socialProfile;

    return (
        <span>
            <a href={link} target="_blank">
                <img src={image} alt="Social Media" style={{ width: 35, margin: 10 }}/>
            </a>
        </span>
    )
}

const SocialProfiles = () => (
    <div>
        <h2>Contact</h2>
        <Contacts/>
        <div>
        {
            SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>;
            })
        }
        </div>
    </div>
)

export default SocialProfiles;