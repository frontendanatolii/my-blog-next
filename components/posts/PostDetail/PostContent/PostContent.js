import ReactMarkdown from "react-markdown";
import { PostHeader } from "../PostHeader/PostHeader";
import classes from './PostContent.module.css';

export const PostContent = (props) => {
  return (
    <article className={classes.content}>
      <PostHeader title={props.post.title} image={`/images/posts/${props.post.slug}/${props.post.image}`} />
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </article>
  )
}