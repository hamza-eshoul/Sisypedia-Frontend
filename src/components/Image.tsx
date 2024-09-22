import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const imageStyles = cva(["object-cover"], {
  variants: {
    variant: {
      avatar: "w-10 h-10 rounded-full",
      full: "w-full h-full",
    },
  },
  defaultVariants: {
    variant: "full",
  },
});

interface ImageProps extends VariantProps<typeof imageStyles> {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className, variant }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={twMerge(imageStyles({ variant }), className)}
    />
  );
};

export default Image;
