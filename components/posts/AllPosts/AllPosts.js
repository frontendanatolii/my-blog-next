import { PostsGrid } from '../PostsGrid/PostsGrid';
import classes from './AllPosts.module.css';

export const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>
        All posts
      </h1>
      <PostsGrid posts={props.posts} />
    </section>
  )
}