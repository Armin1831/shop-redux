import React from 'react';

export type BreadcrumbProps = {
    path: {
        linkName : string
        href? : string
    }[]
}

const Breadcrumb = ({path}: BreadcrumbProps) => {
    return (
        <nav className="breadcrumb bg-light mb-30">
            {
                path.map((value, index) => {
                    if (index === path.length - 1) {
                        return (
                            <span key={index} className="breadcrumb-item text-dark active">{value.linkName}</span>
                        )
                    }
                    return (
                        <a key={index} className="breadcrumb-item text-dark" href={value.href}>{value.linkName}</a>
                    )
                })
            }
        </nav>
    );
};

export default Breadcrumb;
