import React, { Fragment, useState } from 'react';
import { HeaderLogged } from '../../../components/header_logged';
import { Notes } from '../../../components/notes';
import '../../../styles/notes.scss'

const NotesScreen = () => {

    let [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <HeaderLogged setIsOpen={setIsOpen}  isOpen={isOpen}/>
            <Notes setIsOpen={setIsOpen} isOpen={isOpen} />
        </Fragment>
    );
};

export { NotesScreen };