import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, icon, ...props }, ref) => {
        return (
            <div className="relative flex-1 w-full text-on-surface">
                {icon && (
                    <span className="absolute inset-y-0 left-3 flex items-center text-outline">
                        {icon}
                    </span>
                )}
                <input
                    type={type}
                    className={cn(
                        "w-full bg-surface-container-lowest border-none rounded-lg py-2 text-sm focus:ring-1 focus:ring-primary/40 focus-visible:outline-none",
                        icon ? "pl-9 pr-4" : "px-4",
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    },
);
Input.displayName = "Input";

export { Input };
