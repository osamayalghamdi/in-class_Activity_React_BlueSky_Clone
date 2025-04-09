import { useState } from 'react'

import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import Feed from './components/Feed'
import NavTabs from './components/NavTabs'
import './App.css'

export default function App() {
  const [activeTab, setActiveTab] = useState('discover');
  const language = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Russian', 'Arabic', 'Hindi'];
  const postData = [
    {
      username: "Mavs Fan",
      handle: "@username.bsky.social",
      timePosted: "14h",
      content: "Mavs just traded Luka Doncic for AD.",
      comments: 549,
      reposts: 341,
      likes: 6300
    },
    {
      username: "Nuggets Fan",
      handle: "@username.bsky.social",
      timePosted: "1h",
      content: "The nuggets just fired Malone!!",
      comments: 549,
      reposts: 341,
      likes: 6300
    },
    {
      username: "Heats Fan",
      handle: "@photolover.bsky.social",
      timePosted: "23h",
      content: "The heat traded Jimmy Butler for Wiggins.",
      comments: 124,
      reposts: 87,
      likes: 1200,
      media: {
        type: 'image',
        description: 'Jimmy Butler in a new jersey'
      }
    }
  ];
  const trendingTopics = ['topic1', 'topic2', 'topic3', 'topic4'];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex h-[90%] w-[90%] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Sidebar */}

        <LeftSidebar language={language}/>


        {/* Main content */}
        <div className="flex-1 border-r border-gray-200">
          <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Feed component */}
          <Feed posts={postData} />
        </div>

        {/* Right sidebar */}
        <RightSidebar topics={trendingTopics} />
      </div>
    </div>
  );
}