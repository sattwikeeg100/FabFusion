const fs = require("fs");
const yaml = require("js-yaml");

const openApi = {
  openapi: "3.0.0",
  info: {
    title: "Your API Title",
    version: "1.0.0",
    description: "A brief description of your API.",
  },
  servers: [{ url: "http://localhost:8000/api" }],
  paths: {},
};

const mergeYamlFiles = (files) => {
  files.forEach((file) => {
    const doc = yaml.load(fs.readFileSync(file, "utf8"));
    Object.assign(openApi.paths, doc.paths);
  });
};

mergeYamlFiles(["./swagger/auth.yaml", "./swagger/blog.yaml", "./swagger/blogCategory.yaml", "./swagger/brand.yaml", "./swagger/coupon.yaml", "./swagger/prodCategory.yaml", "./swagger/product.yaml", "./swagger/upload.yaml"]);

fs.writeFileSync("mergedAPI.yaml", yaml.dump(openApi));
console.log("YAML files merged into mergedAPI.yaml");
