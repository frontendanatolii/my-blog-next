import { PostItem } from '../PostItem/PostItem';
import classes from './PostsGrid.module.css';

export const PostsGrid = (props) => {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map(post => <PostItem key={post.slug} post={post} />)}
    </ul>
  )
}