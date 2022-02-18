import { Product } from "@interfaces/ProductInterface";
import * as Constants from "./Constants";

export function insertProduct(product: Product) {
  const QUERY = `INSERT INTO 
    ${Constants.BIGQUERY_PROJECT}.${Constants.BIGQUERY_DATASET}.${Constants.BIGQUERY_PRODUCT_TABLE} 
      (name, price, url, ecommerceName)
      VALUES 
      ('${product.name}', ${product.price}, '${product.url}', '${product.ecommerceName}')`
  return QUERY
}