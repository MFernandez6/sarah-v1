import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlogCoverArt } from "@/components/blog/blog-cover-art";
import { Container, Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/constants";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <>
      <div className="relative overflow-hidden py-16 sm:py-20">
        <BlogCoverArt category={post.category} className="absolute inset-0" />
        <div className="absolute inset-0 bg-[var(--brand-navy)]/40" />
        <Container className="relative">
          <FadeIn>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-white/80 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            <Badge className="mt-6 bg-white/20 text-white">{post.category}</Badge>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--concept-font-heading)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-white/80">
              {post.date} · {post.readTime}
            </p>
          </FadeIn>
        </Container>
      </div>

      <Section>
        <Container>
          <FadeIn className="prose prose-lg mx-auto max-w-3xl">
            <p className="text-xl leading-relaxed text-[var(--concept-muted-foreground)]">
              {post.excerpt}
            </p>
            <div className="mt-8 space-y-4 text-[var(--concept-muted-foreground)] leading-relaxed">
              <p>
                This is a placeholder blog article for demo purposes. When Sarah is
                ready to launch, this content will be replaced with full articles
                covering topics like {post.category.toLowerCase()}, personal growth
                strategies, and coaching insights.
              </p>
              <p>
                Regular blog content helps establish Sarah as a trusted voice in
                men&apos;s personal development — driving organic traffic and
                building credibility with potential coaching clients.
              </p>
              <p>
                Each article will include actionable takeaways, real-world examples,
                and invitations to book a discovery call for personalized guidance.
              </p>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
