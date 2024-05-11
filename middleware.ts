import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


//make sure the '/api/webhook/(.*) route is not protected here
const isUnprotectedProtected = createRouteMatcher([
    "/",
    "/api/webhook/(.*)",
    "/api/webhook/clerk",
    "/api/webhook/stripe"
]);


export default clerkMiddleware((auth, req, res) => {
    if(!isUnprotectedProtected(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};