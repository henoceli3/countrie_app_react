import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* les images importe depuis la balise img sont accesible depuis le dossier Public */}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;