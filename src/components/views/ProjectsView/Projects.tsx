import React from 'react';
import {Slider, TButton} from "../../public/SliderBlock/Slider";
import {getListProj} from "../../../modal/functions/gets_funcs";
import bjProj from "../../../media/bg.jpg";
import {listButtonsProjectSlider, titlePages} from "../../../modal/configs/text";
import {gitUrl} from "../../../modal/configs/urls";
import BodyUI from "../../public/BodyUI";
import {useTranslate} from "../../../locales/useLocales";
import {TitleUI} from "../../public/Title";

let list = getListProj();
let button: TButton = listButtonsProjectSlider

const translatePath = "projectsPage."
const ProjectsView = ():JSX.Element => {
    const translate = useTranslate(translatePath)

    return (
        <BodyUI
            image={bjProj}
            title={translate("title")}
            button={{
                name:"github",
                link: gitUrl,
                translatePath:"buttons."
            }}
        >
            <TitleUI
                style={{color: "#fff"}}
                title={translate("title")}
                defaultBottom={window.innerHeight}
            />
            <Slider
                button={{
                    ...button,
                    translatePath:"buttons."
                }}
                list={list}
                translatePath={translatePath}
            />
        </BodyUI>
    )
}

export default ProjectsView;