import express from "express";
import ViteExpress from "vite-express";
import productsRouter from "./routes/productsRouter.js";
import url from "url";
import { getProductSeo, getProductsSeo } from "./services/productsService.js";

const app = express();
app.use(productsRouter);

async function transformer(html: string, req: express.Request) {
  if (req.url.includes("items?search")) {
    const path = req.originalUrl;
    const parsedUrl = url.parse(path, true);
    const search = parsedUrl.query.search as string;
    const res = await getProductsSeo(search);
    return html.replace(
      "<!-- placeholder -->",
      `<title>Productos</title><meta name="description" content="${res.categories?.join(
        ","
      )}"/><meta property="og:image" content="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.6.41/mercadolibre/logo_large_25years_v2.png"/>`
    );
  }

  if (req.url.includes("items")) {
    const id = req.url.replace("/items/", "");
    const res = await getProductSeo(id);
    return html.replace(
      "<!-- placeholder -->",
      `<title>Producto</title>
      <meta name="description" content="${res.title}"/>
      <meta property="og:image" content="${res.picture}"/>`
    );
  }

  return html.replace(
    "<!-- placeholder -->",
    `<title>Home</title><meta name="description" content="${req.url}"/>`
  );
}

ViteExpress.config({ transformer });

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
