import { Avatar as ShadcnAvatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Smile } from 'lucide-react';
import { PublicTooltip } from './public-tooltip';

const sizeList = {
    xs: 'w-[16px] h-[16px]',
    sm: 'w-[24px] h-[24px]',
    md: 'w-[32px] h-[32px]',
    lg: 'w-[45px] h-[45px]',
    xl: 'w-[55px] h-[55px]',
    card: 'w-[170px] h-[170px] rounded-[4px]'
};

interface AvatarProps {
    tooltip?: string;
    className?: string;
    src?: string;
    size?: keyof typeof sizeList;
}

export function Avatar({ tooltip = '', src = '', size = 'md', className }: AvatarProps) {
    return (
        <PublicTooltip tooltip={tooltip}>
            <ShadcnAvatar
                className={`${sizeList[size]} border-[1px] border-amber-500 ${className}`}>
                {src && (
                    <AvatarImage
                        src={src}
                        alt={tooltip}
                        className={`${sizeList[size]} ${className}`}
                    />
                )}
                <AvatarFallback>
                    <Smile
                        strokeWidth={'1px'}
                        className={`text-amber-600/60 dark:text-amber-500/50 ${sizeList[size]}`}
                    />
                </AvatarFallback>
            </ShadcnAvatar>
        </PublicTooltip>
    );
}

export function Avatars({ picList = [] }: { picList?: AvatarProps[] }) {
    return (
        <div className='inline-flex flex-row-reverse'>
            {picList.map((item, index) => {
                return (
                    <div
                        key={`pic-item-${index}`}
                        style={{
                            transform: `translate(-${index * (item.size === 'lg' ? 15 : 6)}px, 0)`
                        }}>
                        <Avatar {...item} />
                    </div>
                );
            })}
        </div>
    );
}
