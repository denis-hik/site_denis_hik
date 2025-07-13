import React, {CSSProperties} from 'react';
import Button from "../ButtonBlock/Button";
import {Body} from "./styled";
import {FadeInSection} from "../FadeInSection";
import {useTranslate} from "../../../locales/useLocales";

export type TSlider = {
    name: string,
    des: string,
    image?: string,
    button?: boolean | null
    gradient?: string
    styled?: {[key: string]: CSSProperties }
}

export type TButton = {
    text: string[],
    image: string[],
    url: string[],
    translatePath?: string
}

const Slider = (props:{list: TSlider[], button?: TButton, translatePath?: string }) => {
    const translate = useTranslate(props.translatePath);
    const translateButtons = useTranslate(props.button?.translatePath);

    return (
        <Body>
            {props.list && props.list.map((data, index) => (
                <FadeInSection key={index} className={`item`} style={{background: data?.gradient, ...data.styled?.base as CSSProperties}}>
                    {data.image && <img style={data.styled?.image} src={data.image} alt={''}/>}
                    {data.name && <div className={"textBlock"}>
                        {data.name && <h4>{translate(data.name)}</h4>}
                        {data.des && (data.button
                            ? <div className={"div1"}><span>{translate(data.des)}</span></div>
                            : <div className={"div2"}><span>{translate(data.des)}</span></div>)
                        }
                        {props.button && props.button.text[index] &&
                        <a target='example' href={props.button.url[index]}><Button
                            className={"buttons"} style={{position: 'absolute', left: '10px', bottom: '5px'}}
                            image={props.button.image[index]}
                            text={translateButtons(props.button.text[index])}/></a>}
                    </div>}
                </FadeInSection>
            ))}
        </Body>
    )
};

export {Slider};