import { FC, HTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const paragraphVariants = cva(
  "max-w-prose text-slate-800 dark:text-slate-300 mb-2 text-center",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        sm: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface paragraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph: FC<paragraphProps> = forwardRef<
  HTMLParagraphElement,
  paragraphProps
>(({ className, size, children, ...props }, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={cn(paragraphVariants({ size, className }))}
    >
      {children}
    </p>
  );
});

Paragraph.displayName = "Paragraph";

export default Paragraph;
