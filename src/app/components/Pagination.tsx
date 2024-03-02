"use client";
import Link from "next/link";

export default function Pagination({page , limit , total , next , previous , pages}: any) {
  return (
    <nav aria-label="Page navigation example" className="mt-10">
      <ul className="list-style-none flex justify-center">
          <li>
              <Link
                  className="pointer-events-none relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400"
                  {...previous ? {href: `/page/${previous.page}`} : {href: "#!"}}
                  >
                    Previous
                </Link>
          </li>
          {
            Array.from({length: pages}, (_, i) => {
              return (
                <li key={i}>
                  <Link
                      className={`relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${page === i + 1 ? 'bg-primary-100 text-primary-700' : ''}`}
                      href={`/page/${i + 1}`}>{i + 1}</Link>
                </li>
              );
            })
          }
            <li>
                <Link
                    className="relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    {...next ? {href: `/page/${next}`} : {href: "#!"}}
                    >
                        Next
                    </Link>
            </li>
      </ul>
  </nav>
  );
}