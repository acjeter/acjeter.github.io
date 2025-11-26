import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
    showGradients?: boolean;
    className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, showGradients = false, className = "" }) => (
    <div className="min-h-screen bg-sand text-desert-dark overflow-hidden relative">
        {/* Background gradients */}
        {showGradients && (
            <>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-ocean/20 to-transparent z-0" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-terracotta/10 to-transparent z-0" />
            </>
        )}

        <div className={`relative z-10 ${className}`}>
            {children}
        </div>
    </div>
);

export default Layout;
