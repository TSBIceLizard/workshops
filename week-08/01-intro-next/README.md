# App architecture

## Data

- Rollercoasters data

## Routing

- Static route --> "/rollercoasters"
- Nested dynamic route --> "/rollercoasters/:rollercoasterId"

## Render data from Supabase

- Connect our DB to our Next.JS app
  - connection string --> from Supabase
  - .env (environment variables) --> .env file
  - pool -- > pg (we will still need that, it doesn't come default with NextJS!)
  - we do not need CORS (Next.JS configures it!)
  - We won't need express either, Next.JS is already a server!

## Navigation with Link components!

## Authentication with Clerk

1. Install Clerk

2. Connect our Clerk application with our Next app

- We'll use environment variables ( .env )

- Add a proxy.js file to your src folder

3. config the middle (proxy) ware file

- Add a proxy.js file to our /src folder (exactly there, not in /src/app)
- Copy the content from the docs https://clerk.com/docs/nextjs/getting-started/quickstart

4. Provide Clerk to our app

- Nest our app within '<ClerkProvider>' in the layout, so all pages have access to it!

Onwards from Step 5, everything is customisation

5. Sign-up and sign-in routes

- Set up catch-all segments to our routes
- Imported SignIn and SignUp components in their respective routes
- Added env vars to prioritise our custom login and to redirect user after authentication

6. User Interface Clerk components

- Check Header.jsx (or your equivilent)

## Improve our error handling

### We can use specific Not-Found pages

### We can use error pages
