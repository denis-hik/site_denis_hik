import React from "react";
import {headerHomeText} from "../../../../../modal/configs/text";
import {BodyTitleHome} from "./styled";
import {useTranslate} from "../../../../../locales/useLocales";

const TitleHomeBlock = ():JSX.Element => {
    const translate = useTranslate("homePage.")

    return (
        <BodyTitleHome>
            <h3>{translate("author")}</h3>
            <span>{translate("span0")}<br/> {translate("span1")}</span>
        </BodyTitleHome>
    )
};

export default TitleHomeBlock;