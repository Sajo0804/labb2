import React from 'react';
import { css } from '@emotion/css'

const Greeting = () => {
    return (
        <div>
            {<h3 className={css`  
            color: greenyellow;
  font-family: fantasy;
  font-size: xx-large;`}>Scroll through Star Wars characters:</h3>}
        </div>
    );
};

export default Greeting;
