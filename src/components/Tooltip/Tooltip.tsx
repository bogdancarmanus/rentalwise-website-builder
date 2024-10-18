import React, { useRef } from 'react';
import { TooltipProps } from './types';
import { useTooltip } from './hooks/useTooltip';
import { TooltipContext } from './hooks/useTooltipContext';
import TooltipTrigger from './TooltipTrigger';
import TooltipContent from './TooltipContent';

const Tooltip = ({
    children,
    content,
    placement = 'top',
    classNames = {},
    light,
}: TooltipProps) => {
    const arrowRef = useRef(null);
    const tooltip = useTooltip({
        placement,
        arrowRef,
        light,
    });

    return (
        <TooltipContext.Provider value={tooltip}>
            <TooltipTrigger className={classNames.trigger}>
                {children}
            </TooltipTrigger>
            <TooltipContent>{content}</TooltipContent>
        </TooltipContext.Provider>
    );
};

export default Tooltip;
