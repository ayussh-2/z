import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "blue" | "slate" | "purple" | "emerald"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-primary text-primary-foreground": variant === "default",
          "bg-blue-100 text-blue-700": variant === "blue",
          "bg-slate-200 text-slate-700": variant === "slate",
          "bg-purple-100 text-purple-700": variant === "purple",
          "bg-emerald-100 text-emerald-700": variant === "emerald",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
