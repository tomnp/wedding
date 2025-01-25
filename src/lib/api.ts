import { Post } from "@/interfaces/post";

const posts: Post[] = [
  {
    slug: "dynamic-routing",
    title: "Dynamic Routing and Static Generation",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.",
    coverImage: "/assets/blog/dynamic-routing/cover.jpg",
    date: "2020-03-16T05:35:07.322Z",
    author: {
      name: "JJ Kasper",
      picture: "/assets/blog/authors/jj.jpeg",
    },
    ogImage: {
      url: "/assets/blog/dynamic-routing/cover.jpg",
    },
  },
  {
    slug: "hello-world",
    title: "Learn How to Pre-render Pages Using Static Generation with Next.js",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.",
    coverImage: "/assets/blog/hello-world/cover.jpg",
    date: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Tim Neutkens",
      picture: "/assets/blog/authors/tim.jpeg",
    },
    ogImage: {
      url: "/assets/blog/hello-world/cover.jpg",
    },
  },
  {
    slug: "preview",
    title: "Preview Mode for Static Generation",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.",
    coverImage: "/assets/blog/preview/cover.jpg",
    date: "2020-03-16T05:35:07.322Z",
    author: {
      name: "Joe Haddad",
      picture: "/assets/blog/authors/joe.jpeg",
    },
    ogImage: {
      url: "/assets/blog/preview/cover.jpg",
    },
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getAllPosts() {
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
