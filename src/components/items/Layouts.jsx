import React from "react";

const Footer = () => {
    return (
        <footer className="py-2">
            <p className="text-xs font-semibold text-center text-green-900">
                &copy; Book store  application done by Naoures Brahim
            </p>
        </footer>
    );
};

const AppLayout = ({children}) => {
    return <div className="relative min-h-screen bg-gray-100">{children}</div>;
};

const Page = ({title, children}) => {
    return (
        <main className="w-full p-6">
            <h2 className="mb-4 text-2xl font-semibold text-gray-700">{title}</h2>
            {children}
        </main>
    );
};
export {Footer,AppLayout,Page};