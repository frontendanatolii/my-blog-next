import { FeaturedPosts } from "../components/home-page/FeaturedPosts/FeaturedPosts";
import { Hero } from "../components/home-page/Hero/Hero";
import { getFeaturedPosts } from "../helpers/posts-util";

function HomePage(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 180,
  }
}
