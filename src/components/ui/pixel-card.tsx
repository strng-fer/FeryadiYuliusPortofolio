import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import type { HTMLAttributes } from "react";

const PixelCard = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <Card className={cn("bg-card/80 backdrop-blur-sm pixel-border-interactive", className)} {...props}>
    {children}
  </Card>
);

export { PixelCard };
