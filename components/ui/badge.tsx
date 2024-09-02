import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const badgeStyles = cva(
  "inline-block px-2 py-1 text-xs font-semibold rounded-full",
  {
    variants: {
      variant: {
        primary: "text-white bg-blue-500",
        secondary: "text-white bg-gray-600",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeStyles> {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant,
  className,
  children,
}) => {
  return (
    <span className={badgeStyles({ variant, className })}>{children}</span>
  );
};
