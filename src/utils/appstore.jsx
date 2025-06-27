import {configureStore} from '@reduxjs/toolkit'
import userReducer  from './userSlice'
import movieReducer  from './movieslice'
import searchReducer from './searchgptslice'
import appReducer from './appConfigSlice'
const appstore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:searchReducer,
        app:appReducer,
    },
    devTools: true, 
})

export default appstore 