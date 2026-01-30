import Link from "next/link";

//TODO: Render a list of users data
//TODO: Sort user links in alphabetical order
//sort data: sorting logic / query strings
// /users?sort=asc // /users?sort=desc
// in searchParams, we can have access to the query strings key and value

export default async function ProfilesPage({ searchParams }) {
  // SearchParams is async
  const queryString = await searchParams;

  //No use for useEffect or state as we are in the server!! :)
  const response = await fetch("https://dummyjson.com/users");
  const dummyData = await response.json();
  const { users } = dummyData;
  //Wrangle more?
  // const users = data.users;

  //Sorting logic below --> This logic sorts our users in alphabetical order through the power of Middle Earth Magic
  if (queryString.sort === "desc") {
    users.sort((a, b) => {
      return b.firstName.localeCompare(a.firstName);
    });
  } else if (queryString.sort === "asc") {
    users.sort((a, b) => {
      return a.firstName.localeCompare(b.firstName);
    });
  }
  return (
    <>
      <h2>Select profile below</h2>
      <div>
        <h3>
          <Link href="/profiles/arron">Arron</Link>
        </h3>
        <h3>
          <Link href="/profiles/bartholemeux">Bartholemeux</Link>
        </h3>
        <h3>
          <Link href="/profiles/nigel">Nigel</Link>
        </h3>
      </div>
      <div>
        <h2>Recent users</h2>
        <Link href={"/profiles?sort=asc"}>Ascending alphabetically</Link>
        <Link href={"/profiles?sort=desc"}>Descending alphabetically</Link>
        <div>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <Link href={`/profiles/${user.id}`} className="text-amber-200">
                  {user.firstName} {user.lastName}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
