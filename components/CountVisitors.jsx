import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css'

function CountVisits() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Hämta befintliga besök från local storage
    const storedVisits = localStorage.getItem('pageVisits');
    const initialVisits = storedVisits ? parseInt(storedVisits) : 0;
    
    // Uppdatera besöksantalet
    setVisits(initialVisits + 1);
    
    // Spara uppdaterat antal besök i local storage
    localStorage.setItem('pageVisits', initialVisits + 1);
  }, []);

  return (
    <div>
      <h2 className={css`
        color: #156468;
        font-family:fantasy;
      `
    }>Denna sida har haft {visits} antal besök</h2>
    </div>
  );
}

export default CountVisits;