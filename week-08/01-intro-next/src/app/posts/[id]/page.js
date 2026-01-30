import Link from "next/link";

export default async function PostPage({ params }) {
  const slug = await params;
  return (
    <>
      <div>
        <h2>Posts Page for Post {slug.id}</h2>
        <h3>Comments below:</h3>
        <p>
          <Link href="/posts/1/2">Comment 2</Link>
        </p>
      </div>
    </>
  );
}
