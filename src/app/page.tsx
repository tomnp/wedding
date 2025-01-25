import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  console.log("Index_ENV", process.env.ENV);
  console.log("Index_BASEPATH", process.env.BASEPATH);
  console.log("Index_NEXT_PUBLIC_ENV", process.env.NEXT_PUBLIC_ENV);
  console.log("Index_NEXT_PUBLIC_BASEPATH", process.env.NEXT_PUBLIC_BASEPATH);

  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
