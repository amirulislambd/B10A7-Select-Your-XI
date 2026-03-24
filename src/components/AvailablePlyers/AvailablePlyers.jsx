import React, { use } from 'react';

const AvailablePlyers = ({promiseFetchPlyers}) => {
    const data = use(promiseFetchPlyers)
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default AvailablePlyers;