"use client";

import { LucideIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { PublicTooltip } from "./public-tooltip";
import { ReactNode } from "react";

export interface PublicListInformationProps {
  title?: string;
  description?: string;
  content?: ReactNode;
  headerClass?: string;
  descriptionClass?: string;
  Icon?: LucideIcon;
  iconProps?: React.ComponentProps<LucideIcon>;
  containerClass?: string;
}

export function PublicListInformation({
  title,
  description,
  headerClass = "",
  descriptionClass = "",
  containerClass = "",
  Icon,
  content,
  iconProps = {},
}: PublicListInformationProps) {
  return (
    <Card
      className={`max-w-[360px] py-0 ${containerClass} mx-auto flex w-full flex-col
        justify-center`}
    >
      <CardHeader
        className={`justify-center space-y-[4px] px-3 py-[8px] leading-tight
          ${headerClass}`}
      >
        {!!title && (
          <PublicTooltip tooltip={title}>
            <div className="flex items-center gap-[4px]">
              {Icon && (
                <Icon className="h-[12px] w-[12px]" {...iconProps} />
              )}
              <CardTitle className="truncate text-[12px] font-normal text-muted-foreground">
                {title}
              </CardTitle>
            </div>
          </PublicTooltip>
        )}
        {(!!description || !!content) && (
          <PublicTooltip tooltip={description || ""}>
            <CardDescription
              className={`text-[14px] font-medium text-foreground ${descriptionClass}`}
            >
              {content || description}
            </CardDescription>
          </PublicTooltip>
        )}
      </CardHeader>
    </Card>
  );
}

export default PublicListInformation;
