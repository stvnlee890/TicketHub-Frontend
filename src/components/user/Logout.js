import React from 'react';

const Logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("isLoggedIn")
    return(
        <div>Logout successful</div>
    )
}
export default Logout