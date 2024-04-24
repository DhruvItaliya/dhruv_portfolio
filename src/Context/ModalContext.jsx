import React,{createContext,useState} from "react";

export const ModalContext = createContext(null);

export const ModalContextProvider = ({children})=>{
    const [toggle,setToggle] = useState(false);
    const contextValue = {toggle,setToggle};
    return (
        <ModalContext.Provider value={contextValue}>
            {children}
        </ModalContext.Provider>
    )
}