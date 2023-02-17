# Remix HMR Example

This repo shows off Remix HMR + Hot Data Revalidation 🔥

## Run it

```sh
npm run dev
```

Open up `localhost:3000` to see your app

## Change things!

Try changing things and getting hot updates!

### Styles

Add a `className` to the `<h1/>` in `app/routes/index.tsx`:

```tsx
<h1 className="bg-red-600">Welcome to Remix</h1>
```

Save the file and see them hot update.
Feel free to keep changing them!

### Markup

Add an `<h2/>` to `app/routes/index.tsx`:

```tsx
<h2>blah</h2>
```

Or change the content in the `<h1/>`:

```tsx
<h1 className="bg-red-600">Welcome to HMR + HDR 🔥</h1>
```

### Data fetching

This is where the magic ✨ of HDR comes in.

Add a loader:

```tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export let loader = () => json({ hello: "world" });

export default function Index() {
  let { hello } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <h2>{hello}</h2>
      {/* rest of the code */}
    </div>
  );
}
```

Then try changing the loader data:

```tsx
export let loader = () => json({ hello: "planet" });
```
