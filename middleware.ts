import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


//make sure the '/api/webhook/(.*) route is not protected here
/* const isUnprotectedProtected = createRouteMatcher([
    
]); */


export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};