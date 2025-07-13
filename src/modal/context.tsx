import React, {useEffect, useState} from "react";
import RequestDHCAPi from "./request";
import {getAnalytics} from "./request/analitics";
import {useAppDispatch} from "./hooks/appDispatch";

type IForms = {
    menu: boolean
}
type TResponse = {
    status: string,
    scrollTop: number
    result: { status: "Ok" | "Reg", resume?: { name: string, url: string, logo: string }[] }
}

type IGlobalContextContext = {
    form: IForms
    scrollTop: {
        value: number,
        onChange?: (value: number) => void
    },
    actions: {
        showMenu?: (show: boolean) => void
    }
}
const politicPasswordsContextInitialState: IGlobalContextContext = {
    form: {
        menu: false
    },
    scrollTop: {
        value: 0
    },
    actions: {}
}

export const globalContext = React.createContext<IGlobalContextContext>(politicPasswordsContextInitialState);
export const GlobalContextProvider: React.FC<any> = ({children}) => {
    const dispatch = useAppDispatch()
    const [showMenu, setShowMenu] = useState(false)
    const [scrollTop, setScrollTop] = useState<number>(0)

    useEffect(() => {
        dispatch(getAnalytics())
    }, []);

    return (
        <globalContext.Provider value={{
            form: {
                menu: showMenu
            },
            scrollTop: {
                value: scrollTop,
                onChange: setScrollTop
            },
            actions: {
                showMenu: setShowMenu
            }
        }}>
            {children}
        </globalContext.Provider>
    )
}