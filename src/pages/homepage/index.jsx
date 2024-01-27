import React from 'react'
import Cards from '../../components/cards'
import TrustedBy from '../../components/trusted-by'
import Values from '../../components/values'
import OurSolution from '../../components/our-solution'
import Differential from '../../components/differential'

const Homepage = () => {
    return (
        <>
            <Cards />
            <TrustedBy />
            <Values />
            <OurSolution />
            <Differential/>
        </>
    )
}

export default Homepage