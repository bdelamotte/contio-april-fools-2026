import Image from "next/image";

export function MeatingOSLogo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/meatingos-logo.png"
      alt="MeatingOS"
      width={200}
      height={40}
      className={className}
      priority
    />
  );
}
