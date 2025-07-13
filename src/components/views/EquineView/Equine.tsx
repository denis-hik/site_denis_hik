import React from 'react';
import {Slider, TSlider} from "../../public/SliderBlock/Slider";
import bgEquineUrl from "../../../media/bgEquine.jpg";
import {getListEquine} from "../../../modal/functions/gets_funcs";
import {titlePages} from "../../../modal/configs/text";
import BodyUI from "../../public/BodyUI";
import {useTranslate} from "../../../locales/useLocales";
import {TitleUI} from "../../public/Title";

let listEquine: TSlider[] = getListEquine();

const translatePath = "equinePage."
const Equine = () => {
    const translate = useTranslate(translatePath)

    return (
        <div>
            <BodyUI
                image={bgEquineUrl}
                title={translate("title")}
                button={{name: "insta", link: "https://instagram.com/denis_hik", translatePath: "buttons."}}
            >
                <TitleUI
                    style={{color: "#fff"}}
                    title={translate("title")}
                    defaultBottom={786}
                />
                <Slider
                    list={listEquine}
                    translatePath={translatePath}
                />
            </BodyUI>
        </div>
    )
}

export default Equine;