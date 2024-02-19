import { FC, PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/modules/core/lib/cn";

type TypographyKey =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "p"
  | 'subText'
  | 'text'
  | "commonTitle"
  | "title"
  |  "sectitle"
  | "label"
  | "article"
  | "lead"
  | "body"
  | "buttonSmallText"
  | "buttonLargeText"
  | "input"
  | "smallText"
  | "smallCaps"
  | "navigation";

type TypographyVariants = { variant: Record<TypographyKey, string> };

const typographyVariants = cva<TypographyVariants>("font-medium", {
  variants: {
    variant: {
      h1: "text-white",
      h2: "text-xl lg:text-3xl leading-sm",
      h3: "text-3lg lg:text-xl leading-sm",
      h4: "text-sm lg:text-3lg leading-xmd",
      h5: "text-lg lg:text-3lg",
      p: "text-white text-xl font-normal leading-md",
      subText: "text-xl font-semibold leading-md",
      text: "text-xl font-normal leading-md",
      commonTitle: "text-3lg leading-xmd",
      label: "text-4lg leading-sm",
      article: "text-2lg leading-lg font-light",
      lead: "text-2sm lg:text-3sm font-light",
      body: "text-sm leading-lg font-light",
      buttonSmallText: "text-xl font-bold leading- md",
      buttonLargeText: "text-2sm leading-md",
      input: "text-2sm leading-md font-light",
      smallText: "text-2xs leading-md font-normal",
      title: "text-white font-bold text-3xxl leading-xs",
      sectitle: "text-3xxl font-black leading-sm",
      smallCaps: "text-sm lg:text-lg font-medium uppercase",
      navigation: "text-sm font-normal",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export type TypographyProps = {
  Tag: keyof HTMLElementTagNameMap;
  className?: string;
} & PropsWithChildren &
  VariantProps<typeof typographyVariants>;

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  Tag,
  variant,
}) => {
  return (
    <Tag className={cn(typographyVariants({ variant, className }))}>
      {children}
    </Tag>
  );
};
