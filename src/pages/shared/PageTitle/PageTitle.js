import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>Go4Fresh | {title}</title>
        </Helmet>
    );
};

export default PageTitle;