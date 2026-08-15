import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogCoverArt } from "@/components/blog/blog-cover-art";
import { Container, Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { bookingHref, brandCopy } from "@/lib/constants";
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
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <div className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
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
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--concept-font-heading)] text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
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
          <FadeIn className="mx-auto max-w-3xl">
            <p className="text-xl leading-relaxed text-[var(--concept-foreground)]">
              {post.excerpt}
            </p>
            <div className="silver-rule my-8 w-20" />
            <div className="space-y-5 text-base leading-relaxed text-[var(--concept-muted-foreground)] sm:text-lg">
              {post.content.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-[var(--brand-silver-light)] bg-[var(--brand-off-white)] p-5 sm:p-8">
              <h2 className="font-[family-name:var(--concept-font-heading)] text-xl font-bold text-[var(--concept-foreground)]">
                Ready to put this into practice?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--concept-muted-foreground)]">
                Book a free discovery call and we&apos;ll talk through how coaching can
                help you apply these ideas to your life.
              </p>
              <Button asChild className="mt-5 w-full sm:w-auto">
                <Link href={bookingHref}>
                  {brandCopy.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section variant="muted">
          <Container>
            <FadeIn>
              <h2 className="font-[family-name:var(--concept-font-heading)] text-2xl font-bold text-[var(--concept-foreground)]">
                Keep Reading
              </h2>
              <div className="silver-rule my-4 w-16" />
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="rounded-xl border border-[var(--brand-silver-light)] bg-[var(--brand-off-white)] p-6 transition-all hover:border-[var(--brand-silver)] hover:shadow-md"
                  >
                    <Badge variant="secondary">{item.category}</Badge>
                    <h3 className="mt-3 font-[family-name:var(--concept-font-heading)] text-lg font-semibold text-[var(--concept-foreground)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--concept-muted-foreground)]">
                      {item.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--concept-primary)]">
                      Read article
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}
    </>
  );
}
