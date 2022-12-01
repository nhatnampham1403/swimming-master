import React, {useContext, useEffect} from 'react'

import {Context as SwimContext} from "../context/SwimContext";

const ResolveQuestScreen = () => {
    const {tryLocalGetLevel} = useContext(SwimContext);

    useEffect(()=>{
        tryLocalGetLevel();
    },[]);
    return null;
};


export default ResolveQuestScreen;
