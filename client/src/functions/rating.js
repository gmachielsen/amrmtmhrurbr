import React from 'react';
import StarRating from 'react-star-ratings';

export const showAvarage = (p) => {
    if(p && p.ratings) {
        let ratingsArray = p && p.ratings 
        let total = []
        let length = ratingsArray.length 

        ratingsArray.map((r) => total.push(r.star));
        let totalReduced = total.reduce((p, n) => p + n, 0);

        let highest = length * 5;
        let result = (totalReduced * 5) / highest;
        console.log("result", result);

        return (
            <div className="text-center pt-1 pb-3">
                <span>
                    <StarRating rating={result} starRatedColor="gold" />
                </span>
            </div>
        );
    }
};