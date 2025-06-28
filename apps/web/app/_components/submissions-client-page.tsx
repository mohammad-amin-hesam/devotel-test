"use client";

import { ResponsiveTable } from "@repo/shared/components/list/responsive-table";
import { useFormsColumns } from "@repo/shared/components/hooks/use-forms-columns";
import { useSubmissions } from "@repo/shared/api/forms/use-forms";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/shared/components/ui/card";
import Link from "next/link";
import { ModeToggle } from "@repo/shared/components/common/ThemeSwitch";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@repo/shared/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@repo/shared/components/ui/button";
import { PublicColumn } from "@repo/shared/components/list/models";

export function SubmissionsClientPage() {
  const { data, isLoading } = useSubmissions();
  const { formsColumns, disabledColumns, toggleColumn } =
    useFormsColumns();

  return (
    <div className="mx-auto my-4 max-w-5xl p-6">
      <Card>
        <CardHeader className="flex flex-col justify-between gap-[10px] lg:flex-row lg:items-center">
          <div className="flex flex-col">
            <CardTitle className="mb-1">
              Devotel Submissions
            </CardTitle>
            <CardDescription>
              You can change the theme with this button:{" "}
              <ModeToggle />
            </CardDescription>
            <CardDescription>
              Show forms:{" "}
              <Link href={"/"} className="text-blue-500">
                Forms Page
              </Link>
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex px-6 mb-2 items-center justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {data?.columns.map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column}
                      className="capitalize"
                      checked={!disabledColumns.includes(column)}
                      onCheckedChange={() => toggleColumn(column)}
                    >
                      {column}
                    </DropdownMenuCheckboxItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ResponsiveTable
            data={data?.data || []}
            isLoading={isLoading}
            columns={formsColumns as PublicColumn[]}
          />
        </CardContent>
      </Card>
    </div>
  );
}
