import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function postSubmissionPage() {
  async function handleCreatePost(rawFormData) {
    "use server";
    const title = rawFormData.get("title");
    const author = rawFormData.get("author");
    const postContent = rawFormData.get("postcontent");

    await db.query(
      `INSERT INTO wk8_posts (title, author, postcontent) VALUES ($1, $2, $3)`,
      [title, author, postContent],
    );
    console.log("Post is saved!");
    // const rawFormData = {
    //   postAuthor: formData.get("postAuthor"),
    //   topic: formData.get(`topic`),
    //   postContent: formData.get(`postContent`),
    // };
    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <>
      <div>
        <form action={handleCreatePost}>
          <p>
            <label htmlFor="title">Post Title</label>

            <input id="title" name="title" type="text" required />
          </p>
          <p>
            <label htmlFor="author">Post Author</label>
            <input id="author" name="author" required />
          </p>
          <p>
            <label htmlFor="postcontent">Message body</label>
            <textarea id="postcontent" name="postcontent" />
          </p>
          <p>
            <button type="submit">Publish post</button>
          </p>
        </form>
      </div>
    </>
  );
}
