import { Suspense } from "react";
import { Nav } from "./Nav";

export const Sidebar = () => {
  return (
    <div className="w-64 bg-[var(--arc-palette-maxContrastColor)] min-h-full my-3 rounded-r-2xl shadow-lg border-y-3 border-r-3 border-[var(--arc-palette-foregroundSecondary)] p-3">
      <img
        src="/flow-logo-dark.svg"
        alt="Text 'Flow' with arrow over the top."
        className="w-20 mb-3"
      />

      <Suspense fallback={<p>Loading...</p>}>
        {/* @ts-expect-error SUSPENSE BANDAID */}
        <Nav />
      </Suspense>
    </div>
  );
};
