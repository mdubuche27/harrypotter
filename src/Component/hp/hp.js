import React, {useEffect, useState} from 'react';
import axios  from 'axios';

function HarryPotter() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      axios.get("http://hp-api.herokuapp.com/api/characters")
        .then(
          (result) => {
            result = result.data
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.image}
            </li>
          ))}
        </ul>
      );
    }
  }

export default HarryPotter