
export function CardSkeleton () {
    return (
        <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col 
            overflow-hidden rounded-xl bg-white shadow-md animate-pulse">
            <div className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500">
            </div>
            <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm">
                <div className="w-5 h-5 bg-gray-200 rounded">
                </div>
                <div className="w-5 h-5 bg-gray-200 rounded">
                </div>
            </div>
            <div 
            className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
            >
                <div className="flex gap-2">
                    <span className="p-semibold-14 rounded-full bg-green-100 px-4 py-1 text-green-60">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </span>
                    <p className="p-semibold-14 rounded-full bg-grey-500/10 px-4 py-1 text-grey-500">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </p>
                </div>
                <p className="p-medium-16 p-medium-18 text-grey-500">
                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                </p>
                <div>
                    <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </p>
                </div>
                <div className="flex-between w-full">
                    <p className="p-medium-14 md:p-medium-16 text-grey-600">
                        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                    </p>
                    <div className="flex gap-2">
                        <p className="text-primary-500">
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                        </p>
                        <div>
                            <div className="w-2.5 h-2.5 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}