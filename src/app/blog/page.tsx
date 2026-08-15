import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/layout/section";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BlogCoverArt } from "@/components/blog/blog-cover-art";
import { NewsletterSignup } from "@/components/integrations/newsletter-signup";
import { blogPosts } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on confidence, relationships, work-life balance, and personal growth for men — from Sarah Angelo.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <PageHeader
        title="Blog"
        description="Practical insights on confidence, relationships, communication, and living with purpose."
      />

      <Section>
        <Container>
          <FadeIn>
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <BlogCoverArt
                  category={featured.category}
                  className="min-h-[240px] lg:min-h-full"
                />
                <CardContent className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                  <Badge className="w-fit">{featured.category}</Badge>
                  <h2 className="mt-4 font-[family-name:var(--concept-font-heading)] text-2xl font-bold sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-[var(--concept-muted-foreground)] leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-sm text-[var(--concept-muted-foreground)]">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featured.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--concept-primary)] hover:underline"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </div>
            </Card>
          </FadeIn>

          <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                  <BlogCoverArt category={post.category} className="h-40" />
                  <CardContent className="p-6">
                    <Badge variant="secondary">{post.category}</Badge>
                    <h3 className="mt-3 font-[family-name:var(--concept-font-heading)] text-lg font-semibold leading-snug">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-[var(--concept-muted-foreground)]">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-[var(--concept-muted-foreground)]">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--concept-primary)] hover:underline"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <FadeIn className="mx-auto max-w-xl text-center">
            <h2 className="font-[family-name:var(--concept-font-heading)] text-2xl font-bold">
              Get Insights Delivered
            </h2>
            <p className="mt-2 text-[var(--concept-muted-foreground)]">
              Subscribe for practical coaching tips and personal growth strategies.
            </p>
            <div className="mt-6">
              <NewsletterSignup />
            </div>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
