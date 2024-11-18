// import React, { useState, useEffect } from 'react';

// function GreatQuotes() {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch("https://quote-garden.onrender.com/api/v3/quotes"
//         )
//             .then(response => response.json())
//             .then(data => {
//                 setData(data);
//             })
//             .catch(err => {
//                 setError(`Fetch error: ${err.message}`);
//             });
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!data) {
//         return <div>Laddar...</div>;
//     }

//     return (
//         <div>
//             <h2>Slumpmässigt urval</h2>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//     );
// }

// export default GreatQuotes;

// import React, { useState, useEffect } from 'react';

// function GreatQuotes() {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch("https://quote-garden.onrender.com/api/v3/quotes")
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setData(data);
//             })
//             .catch(error => {
//                 setError(`Fetch error: ${error.message}`);
//             });
//     }, []);

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     if (!data) {
//         return <div>Laddar...</div>;
//     }

//     return (
//         <div>
//             <h2>Slumpmässigt urval</h2>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//     );
// }

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// export default GreatQuotes;

import { useState, useEffect } from 'react';
const StarWarsPeople = () => {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPeople(data);
            });
    }, []);
    return (
        <div>
            <h1>Scroll trough Star Wars characters:</h1>

            {/* 
            {people.map((person) => (
                <div key={person.name} />
            ))} */}
        </div>
    );
};
// export default StarWarsPeople;

//     return (
//         <div>
//             {people.map((person) => (
//                 <div key={person.name}>
//                     <h2>{person.name}</h2>
//                     <p>Birth Year: {person.birth_year}</p>
//                     <p>Gender: {person.gender}</p>
//                     {/* Lägg till fler egenskaper som du vill visa */}
//                 </div>
//             ))}
//         </div>
//     );
// };

export default StarWarsPeople;