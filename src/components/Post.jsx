import { useState } from "react";
import { MessageSquare, Repeat, Heart, Image, Play, User } from "lucide-react";
const Post = ({ username, handle, timePosted, content, comments, reposts, likes, media }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likes);
    
    const handleLike = () => {
      if (isLiked) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1); 
      }
      setIsLiked(!isLiked);
    };
    
    return (
      <div className="border border-gray-200 p-4 mb-4 rounded">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center mr-3">
          <User size={24} className="text-gray-400" />
          </div>
          <div>
            <div className="flex items-center">
              <span className="font-bold mr-2">{username}</span>
              <span className="text-gray-500">{handle}</span>
              <span className="text-gray-500 ml-2">· {timePosted}</span>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm">{content}</p>
          
          {media && (
            <div className="mt-3 rounded overflow-hidden bg-gray-100">
              {media.type === 'image' ? (
                <div className="h-48 flex items-center justify-center">
                  <Image size={48} className="text-gray-400" />
                  <span className="ml-2 text-gray-500">Image: {media.description}</span>
                </div>
              ) : media.type === 'video' ? (
                <div className="h-48 flex items-center justify-center">
                  <Play size={48} className="text-gray-400" />
                  <span className="ml-2 text-gray-500">Video: {media.description}</span>
                </div>
              ) : null}
            </div>
          )}
        </div>
        
        <div className="flex justify-between text-gray-500">
          <div className="flex items-center">
            <MessageSquare size={18} />
            <span className="ml-2">{comments}</span>
          </div>
          <div className="flex items-center">
            <Repeat size={18} />
            <span className="ml-2">{reposts}</span>
          </div>
          <div className="flex items-center cursor-pointer" onClick={handleLike}>
            <Heart size={18} fill={isLiked ? "red" : "none"} color={isLiked ? "red" : "currentColor"} />
            <span className="ml-2">{likeCount}</span>
          </div>
        </div>
      </div>
    );
  };

export default Post;