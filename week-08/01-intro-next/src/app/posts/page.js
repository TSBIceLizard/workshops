// import Link from "next/link";

import { db } from "@/utils/dbConnection";

export default async function PostsPage() {
  const rawPostsRows = await db.query(
    `SELECT title, author, postcontent FROM wk8_posts`,
  );
  const convertedData = await rawPostsRows.json();
  const postsRows = convertedData;

  console.log(postsRows);

  return (
    <>
      <div>
        <h2>Posts List</h2>
        {postsRows.map((postRow) => {
          return (
            <div key={postRow.id}>
              <h3>
                {postRow.title} by {postRow.author}
              </h3>
              <p>Content:</p>
              <p>{postRow.postcontent}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
