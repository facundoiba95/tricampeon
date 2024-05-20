import { createContext, useState } from "react";

export const ApiContext = createContext()

export const ApiContextProvider = ({children}) => {
const [ isLoading, setIsLoading ] = useState(false)
const [ isAll, setIsAll ] = useState(false);
const [ isOpenMenu, setIsOpenMenu ] = useState(false);
const [ isOpenSubmenu, setIsOpenSubmenu ] = useState(false);
const [ isOpenModal, setIsOpenModal ] = useState(false);
const [ stateAlert, setStateAlert ] = useState({status: "", message: ""});
const [ valueNavChat, setValueNavChat ] = useState('chat');
const [ connectionSocket, setConnectionSocket ] = useState(false);
const [ urlOtherEvent, setUrlOtherEvent ] = useState('');
const [ openBackdropFilter, setOpenBackdropFilter ] = useState(false)

    return (
        <ApiContext.Provider value={{
             isLoading, setIsLoading,
             isAll, setIsAll,
             isOpenMenu, setIsOpenMenu,
             isOpenSubmenu, setIsOpenSubmenu,
             isOpenModal, setIsOpenModal,
             stateAlert, setStateAlert,
             valueNavChat, setValueNavChat,
             connectionSocket, setConnectionSocket,
             urlOtherEvent, setUrlOtherEvent,
             openBackdropFilter, setOpenBackdropFilter,
             }}>
            {children}
        </ApiContext.Provider>
    )

}