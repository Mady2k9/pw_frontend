import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pillVariants = cva(
    "inline-flex whitespace-nowrap space-x-2 items-center rounded-full cursor-pointer border px-3 py-2 text-sm font-medium transitionAll200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border bg-white hover:bg-zinc-50 hover:border-zinc-800",
                active:
                    "border-zinc-800 bg-zinc-50  hover:bg-zinc-50",
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
