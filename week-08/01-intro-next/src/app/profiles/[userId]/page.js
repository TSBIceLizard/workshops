//nested dynamic route --> "/profile/:username"
// in the React client previously, we used the useParams hook, to destructure the value of the dynamic params
//! But we cannot use hooks in the server! :(
// In the server we had the request object, where params were stored
// In Next.js, we have access to the params object!

//! params only available in dynamic routes!!! :O
import Link from "next/link";

export default async function ProfilePage({ params }) {
  // const { username } = await params; //username is the name of our dynamic route/(folder)
  // const slug = await params;
  const { userId } = await params;
  const response = await fetch(`https://dummyjson.com/users/${userId}`);
  const data = await response.json();

  return (
    <>
      <h1>Individual person page</h1>
      <h2>
        {data.firstName} {data.lastName}
      </h2>
      <h3>{data.email}</h3>
      <img src={data.image} alt={`Image of ${data.firstName}`} />
      <Link href={"/profiles"}>Go back</Link>
    </>
  );
}
