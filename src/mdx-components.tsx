import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Main heading - hero style
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight text-center">
        {children}
      </h1>
    ),

    // Section headings
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
        {children}
      </h2>
    ),

    // Sub-section headings
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
        {children}
      </h3>
    ),

    // Smaller headings
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
        {children}
      </h4>
    ),

    h5: ({ children }) => (
      <h5 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
        {children}
      </h5>
    ),

    h6: ({ children }) => (
      <h6 className="text-sm md:text-base font-semibold text-gray-700 mb-2">
        {children}
      </h6>
    ),

    // Paragraph text
    p: ({ children }) => (
      <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-4xl">
        {children}
      </p>
    ),

    // Blockquote - styled like a card
    blockquote: ({ children }) => (
      <blockquote
        className="
        bg-white/60 
        backdrop-blur-sm 
        border-l-4 border-orange-400 
        rounded-lg 
        shadow-lg shadow-orange-700/10 
        p-6 
        my-8 
        italic 
        text-gray-700 
        text-lg 
        leading-relaxed
      "
      >
        {children}
      </blockquote>
    ),

    // Code blocks
    pre: ({ children }) => (
      <pre
        className="
        bg-gray-900 
        text-gray-100 
        rounded-lg 
        p-6 
        my-6 
        overflow-x-auto 
        shadow-lg 
        border border-gray-700
      "
      >
        {children}
      </pre>
    ),

    // Inline code
    code: ({ children }) => (
      <code
        className="
        bg-orange-50 
        text-orange-800 
        px-2 
        py-1 
        rounded 
        font-mono 
        text-sm 
        border border-orange-200
      "
      >
        {children}
      </code>
    ),

    // Unordered lists
    ul: ({ children }) => (
      <ul className="space-y-3 mb-6 text-gray-700 text-lg leading-relaxed">
        {children}
      </ul>
    ),

    // Ordered lists
    ol: ({ children }) => (
      <ol className="space-y-3 mb-6 text-gray-700 text-lg leading-relaxed list-decimal list-inside">
        {children}
      </ol>
    ),

    // List items
    li: ({ children }) => (
      <li className="flex items-start">
        <span className="w-2 h-2 bg-orange-400 rounded-full mt-3 mr-3 flex-shrink-0"></span>
        <span>{children}</span>
      </li>
    ),

    // Links
    a: ({ children, href }) => (
      <a
        href={href}
        className="
          text-orange-700 
          hover:text-orange-800 
          underline 
          underline-offset-2 
          decoration-orange-400 
          hover:decoration-orange-600 
          transition-colors 
          duration-300 
          font-medium
        "
      >
        {children}
      </a>
    ),

    // Strong/Bold text
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),

    // Emphasis/Italic text
    em: ({ children }) => <em className="italic text-gray-800">{children}</em>,

    // Images
    img: (props) => (
      <div className="my-8">
        <Image
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="rounded-lg shadow-lg"
          {...(props as ImageProps)}
        />
      </div>
    ),

    // Horizontal rule
    hr: () => (
      <div className="my-12 flex justify-center">
        <div className="w-24 h-1 bg-orange-400 rounded-full"></div>
      </div>
    ),

    // Tables
    table: ({ children }) => (
      <div className="overflow-x-auto my-8">
        <table className="w-full border-collapse bg-white/60 backdrop-blur-sm rounded-lg shadow-lg">
          {children}
        </table>
      </div>
    ),

    thead: ({ children }) => (
      <thead className="bg-orange-50 border-b border-orange-200">
        {children}
      </thead>
    ),

    tbody: ({ children }) => (
      <tbody className="divide-y divide-orange-100">{children}</tbody>
    ),

    tr: ({ children }) => (
      <tr className="hover:bg-orange-50/50 transition-colors duration-200">
        {children}
      </tr>
    ),

    th: ({ children }) => (
      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
        {children}
      </th>
    ),

    td: ({ children }) => (
      <td className="px-6 py-4 text-sm text-gray-700">{children}</td>
    ),

    // Wrapper for content sections
    section: ({ children }) => (
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">{children}</div>
      </section>
    ),

    // Article wrapper
    article: ({ children }) => (
      <article
        className="
        bg-white/60 
        backdrop-blur-sm 
        border border-orange-200/80 
        rounded-lg 
        shadow-lg shadow-orange-700/10 
        p-8 
        my-8
      "
      >
        {children}
      </article>
    ),

    ...components,
  };
}
