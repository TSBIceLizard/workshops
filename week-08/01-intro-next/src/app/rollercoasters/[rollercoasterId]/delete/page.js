//TODO: Delete a specific rollercoaster
//Tools we need:
// -SQL query to delete
// Must specify the WHERE
// Server function
// form -->

// Server component by default
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePage({ params }) {
  const { rollercoasterId } = await params;
  async function handleDelete() {
    //Delete logic
    "use server";
    db.query(`DELETE FROM rollercoasters WHERE id = $1`, [rollercoasterId]);
    //EXTRA
    revalidatePath("/rollercoasters");
    redirect("/rollercoasters");
  }

  return (
    <>
      <h2>Delete Rollercoaster</h2>
      <form action={handleDelete}>
        <button className="text-red-600">Delete this Rollercoaster</button>
      </form>
    </>
  );
}
