import { Metadata } from "next";
import BlogClient from "./BlogClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CyberCanvas from "@/components/canvas/CyberCanvas";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog | Deepak P S — Cybersecurity Research & Insights",
  description: "Research papers, technical write-ups, CTF solutions, and cybersecurity insights from real-world engagements.",
};

export default function BlogPage() {
  const postsData = getAllPosts();
  const posts = postsData.map(p => ({ ...p.meta, slug: p.slug }));

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CyberCanvas />
      <Navbar />
      <main>
        <BlogClient posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
