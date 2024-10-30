import React, { createContext, useContext, useState } from 'react'

//
const Appcontext = createContext();

export const AppProvider = ({children}) =>{

    const [loged, setLoged] =  useState(false);
    return(
        <Appcontext.Provider value={{loged, setLoged}} >
            {children}
        </Appcontext.Provider>
    )
    
}

//Custom hook para acceder al contexto fácilmente
export const useAppContext = () => useContext(Appcontext);
