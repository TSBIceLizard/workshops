//! The sign up page
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <h2>Sign up! It&apos;s free!</h2>
      <SignUp />
    </>
  );
}
