import React from "react";
import {Body} from "./styled";
import Button from "../ButtonBlock/Button";
import {FadeInSection} from "../FadeInSection";
import {useTranslate} from "../../../locales/useLocales";

type BodyUIType = {
    image?: string;
    title?: string;
    button?: {name: string, onClick?: () => void, link?: string, translatePath?: string};
}

const BodyUI: React.FC<BodyUIType> = ({children, image, title, button = null}) => {
    const translate = useTranslate(button?.translatePath)

    return (
        <Body>
            {image && <img src={image} /> }
            <FadeInSection className={"bottomDiv"}>
                {title && <h1>{title}</h1>}
                {button && <div className={"blockButtons"}>
                    <div/>
                    <Button
                        className={"button"}
                        url={button.link}
                        onClick={button?.onClick}
                        text={translate(button?.name)}
                    />
                </div>}
            </FadeInSection>
            {children}
        </Body>
    )
};

export default BodyUI;