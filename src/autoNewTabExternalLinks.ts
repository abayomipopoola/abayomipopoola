import { defineHastPlugin } from "satteri";

interface Options {
  domain: string;
}

/**
 * Sätteri HAST plugin: adds target="_blank" rel="noopener noreferrer" to
 * links pointing outside the site's domain (subdomains count as internal).
 */
export const autoNewTabExternalLinks = (options?: Options) => {
  const siteDomain = options?.domain ?? "";

  return defineHastPlugin({
    name: "auto-new-tab-external-links",
    element: {
      filter: ["a"],
      visit(node, ctx) {
        const href = node.properties?.["href"];

        if (href == null || href === "") {
          return;
        }

        if (isExternal(String(href), siteDomain)) {
          ctx.setProperty(node, "target", "_blank");
          ctx.setProperty(node, "rel", "noopener noreferrer");
        }
      },
    },
  });
};

const isExternal = (url: string, domain: string) => {
  try {
    // Resolve against the site origin so relative URLs become internal and
    // protocol-relative ("//host") URLs are classified by their real host.
    const { hostname } = new URL(url, `https://${domain}`);
    return hostname !== domain && !hostname.endsWith(`.${domain}`);
  } catch {
    return false; // unparseable URLs are treated as internal
  }
};
