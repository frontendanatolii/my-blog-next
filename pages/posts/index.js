import { AllPosts } from "../../components/posts/AllPosts/AllPosts";
import { getAllPosts } from "../../helpers/posts-util";

function PostsPage(props) {
  return (
    <AllPosts posts={props.posts} />
  )
};

export default PostsPage;

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
    revalidate: 180
  }
}