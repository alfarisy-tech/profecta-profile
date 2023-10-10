import React from 'react';
import Wrapper from '../layout/wrapper';
import SEO from '../common/seo';
import Career from '../components/career';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={ "PROFECTA PERDANA | Career" } />
            <Career />
        </Wrapper>
    );
};

export default index;