import Post from './Post.jsx';
const Feed = ({ posts }) => {
    return (
      <div className="p-4">
        
        {posts.map((post, index) => (
          <Post
            key={index}
            username={post.username}
            handle={post.handle}
            timePosted={post.timePosted}
            content={post.content}
            comments={post.comments}
            reposts={post.reposts}
            likes={post.likes}
            media={post.media}
          />
        ))}

      </div>
    );
  };
  export default Feed;
