import type {MDXComponents} from "mdx/types";
export function useMDXComponents(components:MDXComponents):MDXComponents{return {h1:({children})=><h1 className="display text-6xl">{children}</h1>,h2:({children})=><h2 className="display text-3xl">{children}</h2>,...components}}
