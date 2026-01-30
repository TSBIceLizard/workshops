//TODO: We want to render a single rollercoaster's data
import { db } from "@/utils/dbConnection";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { rollercoasterId } = await params;
  const query = await db.query(`SELECT * FROM rollercoasters WHERE id = $1`, [
    rollercoasterId,
  ]);
  const data = query.rows[0];
  return {
    title: `${data.name} - ${rollercoasterId}`,
    description: `Rollercoaster entry for ${data.name} located in ${data.country}`,
  };
}

export default async function RollercoasterId({ params }) {
  const { rollercoasterId } = await params;
  const queryRoller = await db.query(
    `SELECT * FROM rollercoasters WHERE id = $1`,
    [rollercoasterId],
  );

  const data = queryRoller.rows[0];

  // If the rollercoaster ID can't be found/doesn't exist - we render the not-found error page!
  // Check if the data ARRAY is EMPTY or NOT
  // if (!rollercoasterId) {
  // trigger not-found logic }

  if (queryRoller.rows.length === 0) {
    notFound();
  }

  return (
    <>
      <div>Rollercoaster Page</div>
      <div>
        <h2>{data.name}</h2>
        <Image src={data.url} alt={data.name} width={512} height={512} />
        <p>{data.height} meters tall</p>
        <p>{data.country}</p>
        <Link href={`/rollercoasters/${rollercoasterId}/edit`}>
          Edit this entry
        </Link>
        <Link href={`/rollercoasters/${rollercoasterId}/delete`}>
          Delete this entry
        </Link>
      </div>
    </>
  );
}
