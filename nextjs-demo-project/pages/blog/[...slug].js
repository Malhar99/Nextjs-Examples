/** 
 * Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets. 
 * For example:
        pages/post/[...slug].js matches /post/a, but also /post/a/b, /post/a/b/c and so on.
*/

import { useRouter } from "next/router";

const BlogPage = () => {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>Blog Page</h1>
    </div>
  );
};

export default BlogPage;
