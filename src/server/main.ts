import express from "express";
import ViteExpress from "vite-express";
import productsRouter from "./routes/productsRouter.js";

const app = express();
app.use(productsRouter);

async function transformer(html: string, req: express.Request) {
  return html.replace(
    "<!-- placeholder -->",
    `<title>Producto</title><meta name="description" content="${req.url}"/>`
  );
}

ViteExpress.config({ transformer });

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
