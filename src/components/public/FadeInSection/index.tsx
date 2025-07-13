import React from 'react';
import useInView from './useInView';
import {FadeBody} from "./styled";

type FadeInSectionProps = {
    customStyles?: string;
    threshold?: number;
    children: any;
} & React.HTMLAttributes<HTMLDivElement>

export const FadeInSection: React.FC<FadeInSectionProps> = ({ children, threshold=  0.1, className, customStyles, ...props }) =>  {
    const {ref, isVisible} = useInView({
        threshold
    });

    return (
        <FadeBody
            ref={ref}
            isVisible={isVisible}
            className={className}
            customStyles={customStyles}
            {...props}
        >
            {children}
        </FadeBody>
    );
}