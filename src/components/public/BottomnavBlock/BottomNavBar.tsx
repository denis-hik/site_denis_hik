import React, {useCallback, useEffect, useState} from 'react';
import {navbar} from "../../../modal/configs/images";
import {NavLink} from "react-router-dom";
import nav0 from '../../../media/nav0.png';
import nav1 from '../../../media/nav1.png';
import nav2 from '../../../media/nav2.png';
import {Body} from "./styled";

type Types = {
    isShow?: boolean;
    mode?: string;
    //высота , когда появляется кнопка
    showHeight?: number;
    bottom?: string;
    customId?: string;
}

const BottomNavBar: React.FC<Types> = ({
   isShow = true,
   mode = 'smooth',
   showHeight = 100,
   bottom,
   customId= 'root',
   children
}) => {

    const [bodyCh, setBodyCh] = useState(<div/>);
    const [visible, setVisible] = useState(false);

    const toggleVisible = useCallback(
        e => {
            if (e.target.id != customId) {
                setBodyCh(e.srcElement);
                const scrolled = e.srcElement.scrollTop;
                if (scrolled > showHeight) {
                    setVisible(true);
                } else if (scrolled <= showHeight) {
                    setVisible(false);
                }
            }
        },
        [customId, showHeight],
    );

    const scrollToTop = () => {
        //@ts-ignore
        bodyCh.scrollTo({
            top: 0,
            behavior: mode,
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible, true);
        return () => {
            window.removeEventListener('scroll', toggleVisible, true);
        };
    }, []);

    if (!visible) return null;

    return (
        <Body>
            <NavLink
                onClick={scrollToTop}
                to={navbar.urls[0]}
            >
                <img alt={'block' + 0} src={nav0}/>
            </NavLink>
            <NavLink
                onClick={scrollToTop}
                to={navbar.urls[1]}
            >
                <img alt={'block' + 1} src={nav1}/>
            </NavLink>
            <NavLink
                to={navbar.urls[2]}
                onClick={scrollToTop}
            >
                <img alt={'block' + 2} src={nav2}/>
            </NavLink>
        </Body>
    )
}

export default BottomNavBar;