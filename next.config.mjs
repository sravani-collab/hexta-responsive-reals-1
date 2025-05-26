import withMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable App Router
  experimental: {
    mdxRs: true,
  },
  // Configure MDX file extensions
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: 'https',
        hostname: 'cdn.hextasphere.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/demos/**',
      },
      {
        protocol: "http",
        hostname: "192.168.69.87",
        port: "9000",
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
      },
    ],
  },
}

const withMDXConfig = withMDX({
  // Configure MDX plugins here
  options: {
    remarkPlugins: [
      remarkGfm, // GitHub Flavored Markdown support
    ],
    rehypePlugins: [
      rehypeSlug, // Add ids to headings
      rehypeHighlight, // Syntax highlighting for code blocks
    ],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

export default withMDXConfig(nextConfig)