import TrendingTopic from './TrendingTopic.jsx'
import { Search } from 'lucide-react'

const RightSidebar = ({topics}) => {
    return (
        <div className="w-80 p-4">
            <div className="border border-gray-300 rounded-lg p-2 mb-6 flex items-center">
                <Search size={18} className="text-gray-400 mr-2" />
                <span className="text-gray-400">Search</span>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-bold mb-4">Trending</h3>
                <div className="grid grid-cols-2 gap-2">
                    {topics.map((topic, index) => (
                        <TrendingTopic key={index} topic={topic} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default RightSidebar;
