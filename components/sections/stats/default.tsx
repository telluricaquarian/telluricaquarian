import { cn } from "@/lib/utils";
import { Section } from "../../ui/section";

type StatItem = {
  label: string;
  value: number | string;
  suffix?: string;
  description?: string;
};

interface StatsProps {
  items?: StatItem[] | false;
  className?: string;
}

export default function Stats({
  items = [
    {
      label: "used by",
      value: 1.5,
      suffix: "k",
      description: "designers, builders & founders",
    },
    {
      label: "components",
      value: 40,
      suffix: "+",
      description: "production-ready UI pieces",
    },
    {
      label: "sections",
      value: 20,
      suffix: "+",
      description: "hero, pricing, FAQ & more",
    },
  ],
  className = "",
}: StatsProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        {items !== false && items.length > 0 && (
          <dl className="grid gap-6 sm:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/60 bg-background/60 p-6 text-left"
              >
                <dt className="text-sm font-medium text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="mt-2 flex items-baseline gap-1 text-3xl font-semibold">
                  <span>{item.value}</span>
                  {item.suffix && (
                    <span className="text-xl text-muted-foreground">
                      {item.suffix}
                    </span>
                  )}
                </dd>
                {item.description && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </dl>
        )}
      </div>
    </Section>
  );
}
