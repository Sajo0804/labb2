
import React, { useState, useEffect } from 'react';

const NameList = () => {
    const [name, setName] = useState('');
    const [showNames, setShowNames] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const saveName = () => {
        if (name.trim() !== '') {
            setShowNames(true);
            setName(''); // Rensa namn-fältet efter att det har sparats
        }
    };

    return (
        <div>
            {!showNames ? (
                <>
                    <h3>Vad heter du som hittat hit?</h3>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Skriv ditt namn"
                    />
                    <button onClick={() => {
                        alert('Ditt namn har sparats!');
                        setShowNames(false);
                    }}>Spara namn</button>
                </>
            ) : (
                <div>
                    {name};
                </div>
            )}
        </div>
    );
};

export default NameList;