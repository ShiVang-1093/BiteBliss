import React from 'react';

const Profile = ({ username, email, otherDetails }) => {
    return (
        <div>
            <h2>{username}</h2>
            <p>Email: {email}</p>
            <p>Other Details: {otherDetails}</p>
        </div>
    );
};

export default Profile;
