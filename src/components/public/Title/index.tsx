import {TitleBody} from "./styled";
import React, {useContext, useEffect, useMemo, useState} from "react";
import {globalContext} from "../../../modal/context";
import {getPercents} from "../../views/VlogView/supply/getPercents";

type TitleUIProps = {
    title?: string
    defaultBottom?: number
}  & React.HTMLAttributes<HTMLDivElement>
export const TitleUI = ({title, defaultBottom = 1074, ...props}:TitleUIProps) => {
    const {scrollTop} = useContext(globalContext)

    const bottom = useMemo(() => defaultBottom * (1 - getPercents(100, 0, scrollTop.value)), [scrollTop.value])

    console.log({defaultBottom, bottom, result: Math.abs(bottom) <= defaultBottom})
    return (
        <TitleBody bottom={bottom} defaultBottom={defaultBottom} style={{...props.style}} {...props}>
            <h1>{title}</h1>
        </TitleBody>
    )
}