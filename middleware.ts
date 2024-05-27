import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


//make sure the '/api/webhook/(.*) route is not protected here
/* const isUnprotectedProtected = createRouteMatcher([
    
]); */

const isPrivateRoute = createRouteMatcher([
  '/events/create',
]);


export default clerkMiddleware((auth, request) => {

  if(isPrivateRoute(request)) {
    auth().protect();
  }

});

//export default clerkMiddleware();

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};