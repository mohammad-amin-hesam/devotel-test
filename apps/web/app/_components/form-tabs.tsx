import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/shared/components/ui/tabs";
import { FormRenderer } from "./form-renderer";
import { FormResponseList } from "@repo/shared/api/forms/types";
import { ModeToggle } from "@repo/shared/components/common/ThemeSwitch";
import { makeZodSchema } from "./schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/shared/components/ui/card";
import Link from "next/link";

interface FormsTabsProps {
  forms: FormResponseList;
}

const FormsTabs: React.FC<FormsTabsProps> = ({ forms }) => {
  return (
    <Card className="mx-auto my-4">
      <CardHeader className="flex flex-col justify-between gap-[10px] lg:flex-row lg:items-center">
        <div className="flex flex-col">
          <CardTitle className="mb-1">Devotel Forms</CardTitle>
          <CardDescription>
            You can change the theme with this button: <ModeToggle />
          </CardDescription>
          <CardDescription>
            Show submissions:{" "}
            <Link href={"/submissions"} className="text-blue-500">
              Submissions Page
            </Link>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue={forms[0]?.formId}
          className="flex w-full flex-col items-center lg:min-w-[700px]"
        >
          <TabsList className="mb-4 w-full">
            {forms.map((form) => (
              <TabsTrigger
                key={form.formId}
                className="flex-1"
                value={form.formId}
              >
                {form.title?.split(" ")?.[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {forms.map((form) => {
            const schema = makeZodSchema(form.fields);

            return (
              <TabsContent
                key={form.formId}
                value={form.formId}
                className="w-full"
              >
                <FormRenderer formDefinition={form} schema={schema} />
              </TabsContent>
            );
          })}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FormsTabs;
