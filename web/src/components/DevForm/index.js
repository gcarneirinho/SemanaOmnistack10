import React, {useState, useEffect} from 'react';
import './styles.scss'

function DevForm({onSubmit}) {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_userName, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        },
        (err) => {
        console.log(err)
        },
        {
        timeout: 30000,
        }
    )
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            github_username: github_userName,
            techs,
            latitude,
            longitude,
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
            name="github_username" 
            id="github_username" 
            required 
            onChange={e => setGithubUsername(e.target.value)}
            value={github_userName}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias <span>(Separadas por vírgula)</span></label>
            <input 
            name="techs" 
            id="techs" 
            required
            onChange={e => setTechs(e.target.value)}
            value={techs}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                onChange={e => setLatitude(e.target.value)}
                value={latitude} />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="number" 
              name="longitude" 
              id="longitude" 
              required
              onChange={e => setLongitude(e.target.value)}
              value={longitude} />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;