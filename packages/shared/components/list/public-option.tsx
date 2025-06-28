'use client';

import { LucideIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import React from 'react';
import { PublicTooltip } from './public-tooltip';

export interface PublicOptionProps {
    tooltip?: string;
    Icon: LucideIcon;
    iconProps?: React.ComponentProps<LucideIcon>;
    onClick?: () => void;
    buttonProps?: React.ComponentProps<typeof Button>;
    testId?: string;
}

export function PublicOption({
    tooltip = '',
    Icon,
    iconProps = {},
    onClick,
    buttonProps,
    testId
}: PublicOptionProps) {
    return (
        <PublicTooltip tooltip={tooltip}>
            <Button
                type='button'
                onClick={onClick}
                variant={'outline'}
                data-testid={testId}
                {...buttonProps}
                className={`${ buttonProps?.className || '' } h-[45px] w-[65px] p-0 lg:h-[45px] lg:w-[45px]`}>
                <Icon {...iconProps} className={`scale-[1.3] ${iconProps.className || ''}`} />
            </Button>
        </PublicTooltip>
    );
}
