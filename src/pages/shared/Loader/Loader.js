import React from 'react';

const Loader = () => {
    return (
        <div className="text-center">
            <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-yellow font-bold
" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loader;