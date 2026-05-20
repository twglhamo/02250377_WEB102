# Practical 5: Infinite Scroll with TanStack Query

## Overview
This practical demonstrates how to implement infinite scrolling in a TikTok-style application using TanStack Query (React Query) with cursor-based pagination. The project improves user experience by loading content continuously as the user scrolls.

The practical includes both backend and frontend implementation:
- Backend support for cursor-based pagination
- Frontend infinite scrolling using `useInfiniteQuery`
- Intersection Observer API for detecting scroll position

---

## Objectives
- Understand cursor-based pagination
- Implement infinite scrolling functionality
- Use TanStack Query for data fetching and caching
- Learn how the Intersection Observer API works
- Improve application performance and user experience

---

## Technologies Used
- Node.js
- Express.js
- Next.js
- TanStack Query (React Query)
- Prisma ORM
- Intersection Observer API

---

## Installation

### Backend Dependencies
```bash
npm install

## Frontend Dependencies 
npm install @tanstack/react-query @tanstack/react-query-devtools

## Backend Implementation
- Step 1: Update Video Controller

- Modified the getAllVideos function in:

src/controllers/videoController.js

# Changes made:

- Replaced page-based pagination with cursor-based pagination
- Added cursor and limit query parameters
- Returned nextCursor and hasNextPage
- Step 2: Update Following Videos Controller

# Updated the getFollowingVideos controller to also support:

- Cursor-based pagination
- Efficient database querying
- Dynamic loading of content
- Frontend Implementation
- Step 1: Configure Query Client

Updated:

src/app/layout.js

Added:

- QueryClient
- QueryClientProvider

# Step 2: Update Video Service

Updated:

src/services/videoService.js

Changes:

- Added support for cursor-based API requests
- Managed nextCursor handling
- Step 3: Create Intersection Observer Hook

Created:

src/hooks/useIntersectionObserver.js

Purpose:

- Detect when the user reaches the bottom of the feed
- Trigger loading of more videos automatically
- Step 4: Update VideoFeed Component

Updated:

src/components/ui/VideoFeed.jsx

Implemented:

- useInfiniteQuery
- Infinite scrolling logic
- Automatic fetching of additional videos
- Key Concepts Learned
- Cursor-Based Pagination

- Cursor-based pagination uses a unique identifier instead of page numbers. It is:

- Faster for large datasets
- More reliable when data changes
- Better suited for infinite scrolling applications
- TanStack Query

# TanStack Query helps with:

- Data fetching
- Caching
- Managing loading and error states
- Infinite queries using useInfiniteQuery
- Intersection Observer API

- This API detects when elements enter the viewport and is more efficient than scroll event listeners.

- Key Differences from Offset-Based Pagination
- Backend
- Replaced page with cursor
- Added nextCursor
- Used Prisma cursor queries
- Implemented the n+1 pattern
- Frontend
- Replaced useQuery with useInfiniteQuery
- Added Intersection Observer
- Managed cursor navigation dynamically

## Outcome

- The infinite scrolling feature was implemented successfully. Videos now load continuously as the user scrolls, providing a smoother and more responsive user experience similar to modern social media applications.