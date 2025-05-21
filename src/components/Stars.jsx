import React from 'react'

const Stars = (props) => {

    const stars = (vote) => {
        const finalVote = Math.round(vote / 2);
        const star = [];
        for (let i = 0; i < finalVote; i++) {
            star.push(<i key={`full-${i}`} className="fa-solid fa-star"></i>);
        }
        for (let i = 0; i < 5 - finalVote; i++) {
            star.push(<i key={`empty-${i}`} className="fa-regular fa-star" ></i >);
        }
        return star;
    }

    return (
        <div>
            {stars(props.vote)}
        </div>
    )
}

export default Stars
