import katex from "katex";
import { defineHastPlugin, htmlToHast } from "satteri";

/**
 * Sätteri HAST plugin: renders inline (`code.math-inline`) and display
 * (`pre > code.math-display`) math nodes produced by Sätteri's math parser
 * into static HTML + accessible MathML using KaTeX at build time.
 */
export const katexMathPlugin = () =>
  defineHastPlugin({
    name: "katex-math",
    element: {
      filter: ["pre", "code"],
      visit(node, ctx) {
        if (node.tagName === "pre") {
          const codeChild = node.children?.find(
            (c) => c.type === "element" && c.tagName === "code",
          );
          if (!codeChild || codeChild.type !== "element") return;
          const childClasses = Array.isArray(
            codeChild.properties?.["className"],
          )
            ? codeChild.properties["className"]
            : [];
          if (!childClasses.includes("math-display")) return;

          const tex = ctx.textContent(codeChild).trim();
          const html = katex.renderToString(tex, {
            displayMode: true,
            throwOnError: false,
            output: "htmlAndMathml",
          });
          const tree = htmlToHast(html, { fragment: true });
          if ("children" in tree && tree.children.length > 0) {
            ctx.replaceNode(node, tree.children);
          }
          return;
        }

        if (node.tagName === "code") {
          const classes = Array.isArray(node.properties?.["className"])
            ? node.properties["className"]
            : [];
          if (!classes.includes("math-inline")) return;

          const tex = ctx.textContent(node).trim();
          const html = katex.renderToString(tex, {
            displayMode: false,
            throwOnError: false,
            output: "htmlAndMathml",
          });
          const tree = htmlToHast(html, { fragment: true });
          if ("children" in tree && tree.children.length > 0) {
            ctx.replaceNode(node, tree.children);
          }
        }
      },
    },
  });
