import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/"]);
export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    // If the route is protected and user not authenticated, redirect to login page or any other path you want...   return NextResponse.redirect("/login"); } else if (!request || request?.pathname === "/"){  /* Redirection for homepage */
    auth().protect();
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
