import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pillVariants = cva(
    "inline-flex whitespace-nowrap space-x-2 items-center rounded-full cursor-pointer border px-3 py-2 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border bg-white hover:bg-primary/10 hover:text-primary hover:border-primary",
                active:
                    "border-primary bg-primary/5  hover:bg-primary/10 text-primary",
                outline: "text-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface PillProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof pillVariants> {}

function Pill({ className, variant, ...props }: PillProps) {
    return (
        <div className={cn(pillVariants({ variant }), className)} {...props} />
    )
}

export { Pill, pillVariants }
