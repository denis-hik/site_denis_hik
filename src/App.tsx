import React, {useContext} from "react";
import MenuPopup from "./components/Header/components/Menu/popupMenu";
import HomeView from "./components/views/HomeView/Home";
import EquineView from "./components/views/EquineView/Equine";
import ProgrammingView from "./components/views/ProgrammingView/Programming";
import Header from "./components/Header/Header";
import ProjectsView from "./components/views/ProjectsView/Projects";
import BottomNavBar from "./components/public/BottomnavBlock/BottomNavBar";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {globalContext, GlobalContextProvider} from "./modal/context";
import './App.css';
import BlogView from "./components/views/VlogView";
import {Navigate, Route, Routes} from "react-router-dom";
import ModelsView from "./components/views/ModelsView/ModelsView";

const App: React.FC = () => {
    const {scrollTop} = useContext(globalContext)
    return (
            <Scrollbars
                autoHide
                onUpdate={e => scrollTop.onChange && scrollTop.onChange(e.scrollTop)}
                style={{width: '100vw', height: '100vh'}}
                id={'display'}
            >
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path='/' Component={HomeView}/>
                        <Route path='/equine' Component={EquineView}/>
                        <Route path='/programming' Component={ProgrammingView}/>
                        <Route path='/modeling' Component={ModelsView}/>
                        <Route path='/project' Component={ProjectsView}/>
                        <Route path='/blog' Component={BlogView}/>
                        <Route path="*" Component={() => <Navigate to="/" replace={true} />} />
                    </Routes>
                    <MenuPopup/>
                    <BottomNavBar
                        showHeight={50}
                        customId={'display'}
                    />
                </div>
            </Scrollbars>

    );
}

export default () => <GlobalContextProvider>
    <App />
</GlobalContextProvider>;
