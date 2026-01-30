export default async function CommentPage({ params }) {
  const slug = await params;
  console.log(slug);
  return (
    <>
      <h1>Comment {slug.commentId}</h1>
    </>
  );
}
