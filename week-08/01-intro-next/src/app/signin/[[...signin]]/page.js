import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <h2>Sign in!</h2>
      <SignIn />
    </>
  );
}
