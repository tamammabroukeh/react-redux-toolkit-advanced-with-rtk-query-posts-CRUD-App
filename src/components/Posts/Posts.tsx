import { useSelector } from "react-redux";
import {
  getPostsError,
  getPostsStatus,
  selectAllPosts,
  selectPostIds,
} from "../../app/posts/postsSlice";
import { IPost } from "../../interfaces/interfaces";
import PostExcerpt from "./PostExcerpt";

const Posts = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  console.log(posts);
  // To order posts by date
  let content;
  if (postsStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else {
    content = <p>{postsError}</p>;
  }

  return <section>{content}</section>;
};

export default Posts;
