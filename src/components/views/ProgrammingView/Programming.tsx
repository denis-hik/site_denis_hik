import React, {useState} from 'react';
import bgProgUrl from "../../../media/bgProg.jpg";
import {Slider} from "../../public/SliderBlock/Slider";
import {getListProg} from "../../../modal/functions/gets_funcs";
import {ExperiencePopout} from "./components/modals/ExperiencePopout";
import BodyUI from "../../public/BodyUI";
import {useTranslate} from "../../../locales/useLocales";
import {TitleUI} from "../../public/Title";

let listProg = getListProg();

const translatePath = "programmingPage."
const ProgrammingView = () => {
    const translate = useTranslate(translatePath)
    const [visible, setVisible] = useState(false);

    return(
        <div>
            <BodyUI
                button={{name: translate("experience"), onClick: () => setVisible(!visible)}}
                image={bgProgUrl}
                title={translate("title")}
            >
                <TitleUI
                    style={{color: "#fff"}}
                    title={translate("title")}
                    defaultBottom={window.innerHeight}
                />
                <Slider
                    list={listProg}
                    translatePath={translatePath}
                />
            </BodyUI>
            <ExperiencePopout isAdd onClose={() => setVisible(!visible)} visible={visible} />
        </div>
    )
}

export default ProgrammingView;