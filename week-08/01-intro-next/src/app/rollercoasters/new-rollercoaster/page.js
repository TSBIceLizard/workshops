//! metadata appears again!
//! metadata is a keyword to correspond with the specific pages metadata!
export const metadata = {
  title: "List of Rollercoasters",
  description:
    "Add your own rollercoaster using the form! Incredible! WOW! Shocking!",
};

//TODO: implement a form to collect data

import { db } from "@/utils/dbConnection";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
//! Outside of the root (globals.css) we import our .css differently!
import formStyles from "./newRollercoaster.module.css";

export default function NewRollerCoasterSubmit() {
  //! Forms in react client --> event (onSubmit), state and useState (store and control form values), track changes (onChange event)
  //! But all the tools we used in the React client to handle form submissions are not available in the NextJS server! :O

  //in the server >
  //Storing form values --> object
  //to handle the form submission --> a server function
  // a server function is an async function that executes in the server specifically
  async function handleRollerSubmit(rawFormData) {
    "use server";
    //the formData parameter will be a placeholder for the user's input
    console.log(rawFormData);
    const formValues = {
      rollercoastername: rawFormData.get("rollercoastername"),
      height: rawFormData.get("height"),
      country: rawFormData.get("country"),
      url: rawFormData.get("url"),
    };

    //insert formValues in the database!
    console.log(formValues);
    db.query(
      `INSERT INTO rollercoasters (name, height, country, url) VALUES ($1, $2, $3, $4)`,
      [
        formValues.rollercoastername,
        formValues.height,
        formValues.country,
        formValues.url,
      ],
    );

    //Sequentially we need to revalidate the data in rollercoasters
    revalidatePath("/rollercoasters");
    //! Extra UX touch: redirect the user to the rollercoasters page
    redirect("/rollercoasters");
  }

  return (
    <>
      <h2 className={formStyles.h2}>Submit a new Rollercoaster!</h2>
      <form
        action={handleRollerSubmit}
        className={formStyles.rollercoasterForm}
      >
        <label htmlFor="rollercoastername">Name of Rollercoaster:</label>
        <input type="text" name="rollercoastername" maxLength={255} required />
        <label htmlFor="height">Height (meters):</label>
        <input type="number" name="height" min={0} required />
        <label htmlFor="country">Situated country:</label>
        <input type="text" name="country" maxLength={255} required />
        <label htmlFor="url">Link to image:</label>
        <input
          type="text"
          name="url"
          required
          placeholder="copy paste an image link here"
        />
        <button>Submit the rollercoaster!</button>
      </form>
    </>
  );
}
