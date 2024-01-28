import React from 'react';

const SingleProduct = ({params, searchParams}) => {
    console.log(params)
    return (
        <div>
            Dynamic Page: I am single product : {params.id}
            
        <h2>Search by : {searchParams.category}</h2>
        <h2>Search price : {searchParams.price}</h2>
        </div>
        
    );
};

export default SingleProduct;
