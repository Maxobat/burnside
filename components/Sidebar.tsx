import { Suspense } from "react";
import { Nav } from "./Nav";
import Link from "next/link";

type SidebarProps = {
  params?: Record<string, string>;
};

export const Sidebar: React.FC<SidebarProps> = ({ params }) => {
  return (
    <div className="w-64 bg-[var(--arc-palette-maxContrastColor)] min-h-full my-3 rounded-r-2xl shadow-lg border-y-3 border-r-3 border-[var(--arc-palette-foregroundSecondary)] p-3">
      <Link href="/">
        <img
          src="/flow-logo-dark.svg"
          alt="Text 'Flow' with arrow over the top."
          className="w-20 mb-3"
        />
      </Link>

      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error SUSPENSE BANDAID */}
        <Nav params={params} />
      </Suspense>
    </div>
  );
};
