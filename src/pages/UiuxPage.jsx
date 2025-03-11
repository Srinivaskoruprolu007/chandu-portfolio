import React from 'react';

const UiuxPage = () => {
    return (
        <div className="p-6 bg-black  dark:bg-white dark:text-black text-white flex flex-col min-h-screen">
            {/* 🔹 Header Section - Flex Row for Side-by-Side Alignment */}
            <div className="flex justify-start gap-16  text-center items-center w-full max-w-6xl mx-auto mb-10">
                <h1 className="text-4xl dark:text-black font-extrabold text-gray-100">Featured Work</h1>
                <h2 className="text-lg font-bold dark:text-black dark:border-black text-white rounded border border-white px-4 py-1">
                    View more on Behance
                </h2>
            </div>

            <div className="w-full max-w-6xl mx-auto px-6 md:px-16">
                
                {/* 🔹 Item 1 */}
                <div className="flex flex-col md:flex-row items-stretch gap-0 border border-gray-600 rounded-2xl mb-10 bg-gray-900 text-white shadow-lg overflow-hidden">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://picsum.photos/1200/600?random=1"
                            alt="placeholder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 p-6 px-12  bg-gray-100 text-gray-900">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Web Design</h2>
                        <p className="text-lg md:text-xl leading-relaxed  font-semibold text-stone-700">
                            Create visually stunning and user-friendly websites for a powerful online presence.
                        </p>
                    </div>
                </div>

                {/* 🔹 Item 2 */}
                <div className="flex flex-col md:flex-row items-stretch gap-0 border border-gray-600 rounded-2xl mb-10 bg-gray-900 text-white shadow-lg overflow-hidden">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://picsum.photos/1200/600?random=2"
                            alt="placeholder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 p-6 px-12 bg-gray-100 text-gray-900">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">App Design</h2>
                        <p className="text-lg md:text-xl font-semibold leading-relaxed text-stone-700">
                            A Figma app design is an interactive, visually appealing UI/UX layout created for digital applications, focusing on **flow and responsiveness**.
                        </p>
                    </div>
                </div>

                {/* 🔹 Item 3 */}
                <div className="flex flex-col md:flex-row items-stretch gap-0 border border-gray-600 rounded-2xl mb-10 bg-gray-900 text-white shadow-lg overflow-hidden">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://picsum.photos/1200/600?random=3"
                            alt="placeholder"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 p-6  px-12 bg-gray-100 text-gray-900">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">UI/UX Designer</h2>
                        <p className="text-lg md:text-xl leading-relaxed font-semibold text-stone-700">
                            Craft **interactive and engaging digital experiences** using **Figma & Framer**.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UiuxPage;
