const NavTabs = ({ activeTab, setActiveTab }) => {
    return (
      <div className="flex border-b border-gray-200 mb-4">
        <div 
          className={`pb-2 px-4 cursor-pointer ${activeTab === 'discover' ? 'border-b-2 border-black font-bold' : ''}`}
          onClick={() => setActiveTab('discover')}
        >
          Discover
        </div>
        <div 
          className={`pb-2 px-4 cursor-pointer ${activeTab === 'feeds' ? 'border-b-2 border-black font-bold' : ''}`}
          onClick={() => setActiveTab('feeds')}
        >
          Feeds
        </div>
      </div>
    );
  };

  export default NavTabs;