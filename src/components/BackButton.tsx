import React from 'react';
import { ButtonLink } from './design-system';

interface BackButtonProps {
    to?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to = "/" }) => {
    return (
        <ButtonLink
            to={to}
            variant="ghost"
            className="absolute left-5 top-5 z-20 bg-white-soft/70 md:left-8 md:top-8"
        >
            ← Back
        </ButtonLink>
    );
};

export default BackButton;
