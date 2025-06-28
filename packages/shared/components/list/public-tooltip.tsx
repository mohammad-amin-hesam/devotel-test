"use client";

import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export interface PublicTooltipProps {
  tooltip: string;
  children: ReactNode;
}

export function PublicTooltip({
  tooltip,
  children,
}: PublicTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild color="secondary">
          {children}
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent className="bg-secondary text-secondary-foreground">
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
