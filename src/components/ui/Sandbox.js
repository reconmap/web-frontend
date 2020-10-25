import React from 'react'
import { IconUnlocked } from '../icons'
import Title from './Title'
import Breadcrumb from './../ui/Breadcrumb'
import { useHistory } from 'react-router-dom'
import BtnPrimary from './../ui/buttons/BtnPrimary'
import BtnSecondary from './buttons/BtnSecondary'
import BtnLink from './buttons/BtnLink'
export default function Sandbox() {
    const history = useHistory()
    return (
        <div>
            <Breadcrumb history={history}/>
            <Title title='Sandbox' type='UI test page' icon={<IconUnlocked />}/>

            <h3>Heading Level 4 can have buttons on the right <button>Press Me</button></h3>
            <p>Consequat aliqua aliqua sit dolore minim dolore excepteur do qui exercitation.</p>

            <h4>Heading Level 4 can have buttons on the right <button>Press Me</button></h4>
            <p>Consequat aliqua aliqua sit dolore minim dolore excepteur do qui exercitation.</p>
            <p>
                <BtnPrimary>BtnPrimary</BtnPrimary>
                <BtnSecondary>BtnSecondary</BtnSecondary>
                <BtnLink>BtnLink</BtnLink>
            </p>
        </div>
    )
}
