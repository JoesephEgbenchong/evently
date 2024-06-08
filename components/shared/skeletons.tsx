//Loading animation
const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton (){
    return (
        <div className={`${shimmer} relative overflow-hidden group flex min-h-[380px] w-full max-w-[400px] flex-col rounded-xl bg-white shadow-md md:min-h-[438px]`}>
            <div className="flex-center flex-grow bg-gray-300 bg-cover bg-center text-grey-500 animate-pulse"></div>
            <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4">
                <div className="flex gap-2">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-36 my-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="flex justify-between w-full">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="flex gap-2 items-center">
                        <div className="h-4 bg-gray-200 rounded w-24"></div>
                        <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function CardsSkeleton () {
    return (
        <div className={`${shimmer} grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10 `}>
            <CardSkeleton />
            <CardSkeleton/>
            <CardSkeleton />
        </div>
    )
}

export function SearchSkeleton () {
    return (
        <div className={`${shimmer} flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2 `}>
            <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded mx-2 flex-grow animate-pulse"></div>
        </div>
    )
}

export function CategoryFilterSkeleton () {
    return (
        <div className={`${shimmer} flex-center min-h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2 `}>
            <div className="h-6 bg-gray-200 rounded mx-2 flex-grow animate-pulse"></div>
            <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
    );
}

export function EventsTextSectionSkeleton () {
    return (
        <div className={`${shimmer}`}>
            <div className="h-6 bg-gray-200 rounded w-1/5 mb-3 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>
    )
}

export function HeroSectionSkeleton () {
    return (
        <section className={`${shimmer} bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10`}>
            <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                <div className="flex flex-col justify-center gap-8">
                    <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-full mt-2 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 rounded w-full mt-2 animate-pulse"></div>
                </div>

                <div className="max-h-[80vh] h-[40vh] object-contain object-center 2xl:max-h-[70vh] ml-6">
                    <div className="h-full w-full bg-gray-200 rounded-2xl animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}

export function SecondHeroSectionSkeleton () {
    return (
        <section className={`${shimmer} wrapper my-8 flex flex-col gap-8 md:gap-12`}>
            <EventsTextSectionSkeleton />

            <div className="flex w-full flex-col gap-5 md:flex-row">
                <SearchSkeleton />
                <CategoryFilterSkeleton />
            </div>

            <CardsSkeleton />
        </section>
    );
}

export function HomePageSkeleton () {

    return (
        <>
            <HeroSectionSkeleton />
            <SecondHeroSectionSkeleton />
        </>
    )
}

export function CreateEventHeroSkeleton () {
    
    return (
        
        <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10 animate-pulse">
            <div className="wrapper h3-bold text-center sm:text-left h-6 bg-gray-200 rounded w-1/3 mx-auto sm:w-1/4 sm:mx-0"></div>
        </section>
    );
}

export function FormSectionSkeleton () {
    return (
        <div className="wrapper">
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent"></div>
                <div className="w-full bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent"></div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-72 bg-gray-200 rounded-2xl"></div>
                    <div className="h-6 bg-gray-200 rounded w-full mt-2"></div>
                </div>
                <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-72 bg-gray-200 rounded-2xl"></div>
                    <div className="h-6 bg-gray-200 rounded w-full mt-2"></div>
                </div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent"></div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent"></div>
                <div className="w-full bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent"></div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent"></div>
                <div className="w-full bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent"></div>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
                <div className="w-full bg-grey-50 h-[54px] focus-visible:ring-offset-0 placeholder:text-grey-500 rounded-full p-regular-16 px-4 py-3 border-none focus-visible:ring-transparent"></div>
            </div>
        </div>
    )
}

export function CreateEventSkeleton () {
    return (
        <>
            <CreateEventHeroSkeleton />
            <FormSectionSkeleton />
        </>
    )
}

export function TicketsAndEventsOrganizedHeroSkeleton () {

    return (
        <section className='bg-primary-50 bg-cover bg-dotted-pattern bg-center py-5 md:py-10 animate-pulse'>
            <div className='wrapper flex items-center justify-center sm:justify-between'>
                <div className='h-8 bg-gray-200 rounded w-1/3'></div>
                <div className="h-10 bg-gray-200 rounded hidden sm:flex w-1/4"></div>
            </div>
        </section>
    );
}

export function ProfileSkeleton () {

    return (
        <>
            <TicketsAndEventsOrganizedHeroSkeleton />
            <section className="wrapper my-8">
                <CardsSkeleton />
            </section>

            <TicketsAndEventsOrganizedHeroSkeleton />
            <section className="wrapper my-8">
                <CardsSkeleton />
            </section>
        </>
    );
}

export function EventDetailsSkeleton () {

    return (
        <>
            <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain animate-pulse">
                <div className='grid grid-cols-1 md:grid-cols-2 2x:max-w-7xl'>
                    <div className="h-full min-h-[300px] bg-gray-200"></div>

                    <div className='flex w-full flex-col gap-8 p-5 md:p-10'>
                        <div className='flex flex-col gap-6'>
                            <div className='h-6 bg-gray-200 w-3/4'></div>

                            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
                                <div className='flex gap-3'>
                                    <div className='h-6 bg-gray-200 w-24'></div>
                                    <div className='h-6 bg-gray-200 w-24'></div>
                                </div>
                                <div className='h-6 bg-gray-200 w-48'></div>
                            </div>
                        </div>

                        <div className="h-12 bg-gray-200 w-full"></div>

                        <div className='flex flex-col gap-5'>
                            <div className='h-6 bg-gray-200 w-48'></div>
                            <div className='h-6 bg-gray-200 w-48'></div>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <div className='h-4 bg-gray-200 w-2/3'></div>
                            <div className='h-24 bg-gray-200'></div>
                            <div className='h-6 bg-gray-200 w-1/2'></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="wrapper my-8 flex flex-col gap-8 md:gap-12 animate-pulse">
                <div className="h-6 mb-4 bg-gray-200 rounded w-1/3"></div>
                <CardsSkeleton />
            </section>
        </>
    )
}