import Link from "next/link";
import type { ComponentProps } from "react";

export type SmartLinkProps = ComponentProps<"a"> & { href: string };

// next/link for site pages; a plain <a> for external links, downloads and new tabs.
export function SmartLink({ href, ...rest }: SmartLinkProps) {
  const isPage = href.startsWith("/") && rest.download === undefined && rest.target === undefined;
  return isPage ? <Link href={href} {...rest} /> : <a href={href} {...rest} />;
}
