import { PostContent } from "../../components/posts/PostDetail/PostContent/PostContent";
import { getAllPosts, getPostData } from "../../helpers/posts-util";

function PostDetailPage(props) {
  return (
    <PostContent post={props.post} />
  )
}

export default PostDetailPage;

export function getStaticPaths() {
  const allPosts = getAllPosts();
  const paths = allPosts.map(post => ({
    params: {
      slug: post.slug,
    }
  }));

  return {
    paths: paths,
    fallback: 'blocking'
  }
}

export function getStaticProps(context) {
  const fileName = context.params.slug;
  const post = getPostData(`${fileName}.md`);

  return {
    props: {
      post: post,
    },
    revalidate: 180
  }
}