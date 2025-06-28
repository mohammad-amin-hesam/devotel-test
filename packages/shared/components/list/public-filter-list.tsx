'use client';

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../../ui/sheet';
import { FilterFields, FilterForm } from '../filter/filter-form';

export interface PublicFilterListProps {
    open?: boolean;
    setOpen: (isFilterOpen: boolean) => void;
    fields?: (keyof FilterFields)[];
}

export function PublicFilterList({ open, setOpen, fields }: PublicFilterListProps) {
    return (
        <Sheet open={open} onOpenChange={() => setOpen(false)}>
            <SheetContent className='w-[75%] max-w-[350px] px-0' side={'left'}>
                <SheetHeader className='px-4'>
                    <SheetTitle>فیلتر ها</SheetTitle>
                    <SheetDescription>
                        با استفاده از تنظیمات زیر می‌توانید جستجو خود را شخصی سازی کنید
                    </SheetDescription>
                </SheetHeader>
                <FilterForm fields={fields} />
            </SheetContent>
        </Sheet>
    );
}
