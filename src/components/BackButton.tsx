import React from 'react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
    to?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to = "/" }) => {
    return (
        <Link
            to={to}
            className="absolute top-6 left-6 px-6 py-3 bg-terracotta text-white rounded-lg hover:bg-sunset transition-colors duration-300 shadow-lg hover:shadow-xl z-20"
        >
            ← Back
        </Link>
    );
};

export default BackButton;
