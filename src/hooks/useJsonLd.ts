import { useEffect } from "react";

/**
 * Inject a JSON-LD <script> into <head> for the current route.
 * Cleans up on unmount so per-route schemas don't stack.
 */
export function useJsonLd(schema: Record<string, unknown> | Record<string, unknown>[]) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.routeJsonld = "true";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [schema]);
}
