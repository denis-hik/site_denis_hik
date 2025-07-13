import React from 'react';
import {BodyButtonBlock} from "./styled";

type TButtonProps = {
    className?: string
    url?: string,
    onClick?: React.MouseEventHandler<HTMLDivElement>
    style?: React.CSSProperties
    image?: string
    text: string
}
const Button = (props: TButtonProps) => {

    return (<BodyButtonBlock
        target='example'
        href={props.url}>
        <div className={'body' + ' ' + props.className} onClick={props.onClick} style={props.style}>
            {/* eslint-disable-next-line no-mixed-operators */}
            {props.image ? <div style={{
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundImage: 'url(' + props.image + ')'
            }}/> : ''}
            <h4>{props.text}</h4>
        </div>
    </BodyButtonBlock>)
}

export default Button;