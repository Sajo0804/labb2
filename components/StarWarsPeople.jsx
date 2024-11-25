import { useState, useEffect } from 'react';
import { css } from '@emotion/css'

const StarWarsPeople = () => {
    const [people, setPeople] = useState([]);

    const fetchAllPeople = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            // Lägg till resultat från den här sidan i state
            setPeople((prevPeople) => [...prevPeople, ...data.results]);

            // Om det finns en `next`, hämta nästa sida
            if (data.next) {
                fetchAllPeople(data.next);
            }
        } catch (err) {
            console.error('Error fetching data:', err);
        }
    };

    useEffect(() => {
        fetchAllPeople('https://swapi.dev/api/people/');
    }, []);


    return (
        <>

            <div className={css`.grid-container {
  background-color: 0d0d;
  display: inline-grid;
  grid-template-columns: auto auto auto auto`}>
                <div className="grid-container">
                    {people.map((person, index) => (
                        <div className={css`color: rgb(61, 134, 51);
                        font-family: monospace;`} key={`${person.name}-${index}`}>
                            {person.name}
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
};

export default StarWarsPeople;

