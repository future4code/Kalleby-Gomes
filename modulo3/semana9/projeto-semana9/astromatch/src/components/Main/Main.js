import React from 'react'
import AppBar from '../AppBar/AppBar';
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage';
import MatchListPage from '../MatchListPage/MatchListPage';

function Main() {
    return (
        <div>
            <AppBar/>
            {/* <MatchListPage/> */}
            <ChooseProfilePage/>
        </div>
    )
}

export default Main;

import React from 'react'