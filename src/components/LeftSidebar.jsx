const LeftSidebar = (language) => {
    return (
        <div className="w-64 p-4 border-r border-gray-200">
            <div className="w-16 h-16 border-2 border-gray-400 mb-4 flex items-center justify-center">
                <div className="text-2xl text-gray-400">X</div>
            </div>

            <div className="mb-6">
                <p className="text-sm mb-2">Join the conversation</p>
                <button className="border border-gray-300 rounded px-3 py-1 mb-2 w-full text-left">
                    Create account
                </button>
                <button className="border border-gray-300 rounded px-3 py-1 mb-4 w-full text-left">
                    Sign in
                </button>

                <div className="relative inline-block">
                    <button className="border border-gray-300 rounded px-3 py-1 flex items-center">
                        <span>{language[0]}</span>
                        <span className="ml-2">▼</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar;
