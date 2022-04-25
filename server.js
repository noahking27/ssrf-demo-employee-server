const express = require("express");
const bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes");
const app = express();
const port = 4312;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contoso Retirement API with Swagger",
      version: "0.1.0",
      description:
        "This is the Contoso Retirement API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Contoso Development Team",
        url: "https://contoso.com",
        email: "info@contosodev.com",
      },
    },
    servers: [
      {
        url: "http://localhost:4312/",
      },
    ],
  },
  apis: ["./routes/index.js"],
};

const specs = swaggerJsdoc(options);
app.use("/", routes);
app.use("/docs", swaggerUi.serve,   swaggerUi.setup(specs, { explorer: true }));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
