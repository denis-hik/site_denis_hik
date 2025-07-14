import {useContext} from 'react';
import {openUrl} from "../../../../modal/functions/gets_funcs";
import {gitUrl, instaUrl, scetchfabUrl, telegramUrl} from "../../../../modal/configs/urls";
import {
    gitImageUrl,
    instaImageUrl,
    langEngUrl, langRusUrl,
    scetchfabeImageUrl,
    telegramImageUrl
} from "../../../../modal/configs/images";
import {BodyPopoutMenu, ButtonLink} from "./styled";
import {globalContext} from "../../../../modal/context";
import {useTranslate} from "../../../../locales/useLocales";
import {RootState} from "../../../../store";
import {useAppDispatch} from "../../../../modal/hooks/appDispatch";
import {changeLang} from "../../../../modal/context/reducer/settingsSlice";
import {useSelector} from "react-redux";

interface propsI {
}

const listName: Array<string> = [
    "equinePage",
    "programmingPage",
    "projectsPage",
    // "modelsPage"
];
const listUrls: Array<string> = ['/equine', '/programming', '/project', "/modeling"]

const langSelector = (root: RootState) => root.settings.lang
const MenuPopup = ({}:propsI):JSX.Element => {
    const translate = useTranslate()
    const dispatch = useAppDispatch()

    const {form, actions} = useContext(globalContext)
    const lang = useSelector(langSelector)

    const closePopup = () => {
        actions.showMenu && actions.showMenu(false)
    }

    return (
        <BodyPopoutMenu show={form.menu} onClick={closePopup} >
            <div className={"body"}>
                {listName.map((name, i) => (
                    <ButtonLink to={listUrls[i]}><h4 id={name}>{translate(`${name}.title`)}</h4></ButtonLink>
                ))}
                <div
                    className={"lang"}
                    onClick={() => dispatch(changeLang(lang === "en" ? "ru" : "en"))}
                >
                    <img
                        src={lang !== "en" ? langEngUrl : langRusUrl}
                        alt={'lang'}
                    />
                    {translate(`lang.${lang === "en" ? "ru" : "en"}`)}
                    <img
                        className={"hidden"}
                    />
                </div>
                <div className={"bodyImagesUrls"}>
                    <img src={gitImageUrl} height={'100%'} alt={'gitHub'} onClick={() => openUrl(gitUrl)}/>
                    <img src={scetchfabeImageUrl} height={'100%'} alt={'gitHub'} onClick={() => openUrl(scetchfabUrl)}/>
                    <img src={telegramImageUrl} height={'100%'} alt={'VK'} onClick={() => openUrl(telegramUrl)}/>
                    <img src={instaImageUrl} height={'100%'} alt={'Insta'} onClick={() => openUrl(instaUrl)}/>
                </div>
            </div>
        </BodyPopoutMenu>
    )
}

export default MenuPopup;