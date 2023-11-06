import React from 'react';

export default function UserCard ({image, name}) {
    return (
        <div className="userCard">
            <img src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" alt=""/>
            <div>
                {name}
                <button>Write Message</button>
            </div>

        </div>
    );
};

