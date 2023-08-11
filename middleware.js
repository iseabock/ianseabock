import { NextResponse } from 'next/server';

export default function middleware(request) {
    return NextResponse.rewrite(new URL('/', request.url));
}

// Supports both a single string value or an array of matchers
export const config = {
    matcher: ['/']
};
