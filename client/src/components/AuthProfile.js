import React from 'react'
import {useAuth0} from '@auth0/auth0-react';

const AuthProfile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <img style={{width: '120px', borderRadius: '50%'}} src={user.picture } alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {JSON.stringify(user, null, 2)}
            </div>
        )
    )
}

export default AuthProfile
