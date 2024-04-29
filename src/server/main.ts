import express from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

function transformer(html: string, req: express.Request) {
  return html.replace(
    "<!-- placeholder -->",
    `<meta name="custom" content="${req.url}"/>`
  );
}

ViteExpress.config({ transformer });

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
