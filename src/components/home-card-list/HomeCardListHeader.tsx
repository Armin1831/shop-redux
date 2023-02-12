import React from 'react';

export type HomeCardListHeaderProps = {
    title: string
}

const HomeCardListHeader = ({title}: HomeCardListHeaderProps) => {
    return (
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">{title}</span>
        </h2>
    )
};

export default HomeCardListHeader;