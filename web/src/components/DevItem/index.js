import React from 'react';

import './styles.scss'

function DevItem({dev, deleteHandler}) {

    function handleSubmit() {
        deleteHandler({github_username: dev.github_username});
    }

    return(
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt=""/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(", ")}</span>
                </div>
                <div className="user-remove">
                    <button onClick={handleSubmit} >X</button>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no github</a>
        </li>
    );
}

export default DevItem;