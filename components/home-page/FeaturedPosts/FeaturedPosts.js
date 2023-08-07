import { PostsGrid } from '../../posts/PostsGrid/PostsGrid';
import classes from './FeaturedPosts.module.css';

export const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>
        Featured posts
      </h2>
      <PostsGrid posts={props.posts} />
    </section>
  )
}