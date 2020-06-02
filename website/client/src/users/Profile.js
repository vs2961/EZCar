import React from "react";
import { Cookies } from "react-cookie";

function Profile() {
    const cookies = new Cookies();
    console.log(cookies.get('cars'));
    console.log(cookies.get('cars')[0]);
	return (
        <div>
            {cookies.get('cars').map((text, index) => {
                return <p key={index}>{text}</p>
            })}
        </div>
    )
}

export default Profile;
