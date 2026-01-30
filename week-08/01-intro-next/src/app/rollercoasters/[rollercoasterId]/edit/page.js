//TODO I want to update an existing rollercoaster entry on the DB!
// We need:
// Correct data
// To target the exact row
// We need to tell the user that all fields (columns) are necessary, not just a single one
//- form --> user UI
// server function --> Trigger the update
//- SQL query to update
//- params

//EXTRA: pre-fill form for better UX
// Get DB Data 'first'
// pre-fill form with current data from DB --> We can do this with defaultValue

import formStyles from "@/app/rollercoasters/new-rollercoaster/newRollercoaster.module.css";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function EditPage({ params }) {
  const { rollercoasterId } = await params;

  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    rollercoasterId,
  ]);

  const data = query.rows[0];
  console.log(data);

  async function handleUpdate(formData) {
    "use server";
    const formValues = {
      name: formData.get("rollercoastername"),
      height: formData.get("height"),
      country: formData.get("country"),
      URL: formData.get("url"),
    };
    db.query(
      `UPDATE rollercoasters SET name = $1, height = $2, country = $3, url = $4, WHERE id = $5`,
      [
        formValues.name,
        formValues.height,
        formValues.country,
        formValues.URL,
        rollercoasterId,
      ],
    );
    revalidatePath("/rollercoasters");
    revalidatePath(`/rollercoasters/${rollercoasterId}`);
    redirect(`/rollercoasters/${rollercoasterId}`);
  }
  return (
    <>
      <h2>Edit the rollercoaster</h2>
      <form action={handleUpdate} className={formStyles.rollercoasterForm}>
        <label htmlFor="rollercoastername">Name of Rollercoaster:</label>
        <input
          type="text"
          name="rollercoastername"
          maxLength={255}
          defaultValue={data.name}
          required
        />
        <label htmlFor="height">Height (meters):</label>
        <input
          type="number"
          name="height"
          min={0}
          defaultValue={data.height}
          required
        />
        <label htmlFor="country">Situated country:</label>
        <input
          type="text"
          name="country"
          maxLength={255}
          defaultValue={data.country}
          required
        />
        <label htmlFor="url">Link to image:</label>
        <input
          type="text"
          name="url"
          required
          placeholder="copy paste an image link here"
          defaultValue={data.url}
        />
        <button>Submit the EDIT of the rollercoaster!</button>
      </form>
    </>
  );
}
