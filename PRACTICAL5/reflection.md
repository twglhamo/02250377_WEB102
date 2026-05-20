
# reflection.md

```md
# Reflection on Practical 5: Infinite Scroll with TanStack Query

## Introduction
This practical provided hands-on experience in implementing infinite scrolling using TanStack Query and cursor-based pagination in a TikTok-style application. The activity helped me understand both frontend and backend integration for handling large amounts of dynamic content efficiently.

---

## What I Learned
Through this practical, I learned the importance of cursor-based pagination and how it improves performance compared to traditional offset-based pagination. I understood that cursor pagination is more reliable when handling continuously changing data, especially in applications like social media platforms.

I also learned how TanStack Query simplifies data fetching and state management. Using the `useInfiniteQuery` hook made it easier to manage loading states, caching, and fetching additional content dynamically.

Another important concept I learned was the use of the Intersection Observer API. It allowed the application to detect when the user reached the bottom of the page and automatically load more content without requiring manual actions.

---

## Skills Gained
During this practical, I gained practical experience in:
- Implementing cursor-based pagination
- Using TanStack Query in React applications
- Managing infinite scrolling functionality
- Creating custom React hooks
- Using the Intersection Observer API
- Integrating frontend and backend components
- Improving application performance and user experience

---

## Challenges Faced
One of the challenges I faced was understanding how cursor-based pagination works differently from page-based pagination. Initially, managing the cursor values and loading additional data was confusing. However, after following the implementation steps and testing the application, I was able to understand the overall flow clearly.

Another challenge was configuring `useInfiniteQuery` correctly and ensuring that new data was appended properly without replacing the existing content.

---

## Conclusion
Overall, this practical was very useful and helped strengthen my understanding of modern web application development techniques. I successfully implemented infinite scrolling functionality and gained valuable experience working with TanStack Query and cursor-based pagination.

The practical also improved my understanding of efficient data loading techniques used in real-world applications such as TikTok, Instagram, and other social media platforms.