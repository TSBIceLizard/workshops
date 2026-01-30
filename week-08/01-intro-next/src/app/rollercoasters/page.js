//!metadata is a keyword to correspond with the specific pages metadata!
export const metadata = {
  title: "List of Rollercoasters",
  description:
    "A list of all the rollercoasters available in our website. Incredible! WOW! Shocking!",
};

//TODO: render a list of rollercoasters from the DB

import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function RollercoastersPage() {
  const { rows } = await db.query(`SELECT * FROM rollercoasters`);
  console.log(rows);

  return (
    <>
      <div>Rollercoasters List</div>
      <div>
        {rows.map((row) => {
          return (
            <Link key={row.id} href={`/rollercoasters/${row.id}`}>
              <div>
                <h2>{row.name}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
