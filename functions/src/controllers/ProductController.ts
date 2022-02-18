import { Request, Response } from 'express'
import { BigQuery } from '@google-cloud/bigquery'
import * as ProductQueries from '@utils/ProductQueries'
import { Product } from '@interfaces/ProductInterface'

export async function createHandler(request: Request, response: Response) {
  const PRODUCT_BODY = request.body as Product
  const ECOMMERCE_NAME = request.query.ecommerce as string

  if (ECOMMERCE_NAME === undefined || ECOMMERCE_NAME === "") {
    response.status(400).json({
      data: 'ecommerce param is required'
    })
  }

  PRODUCT_BODY.ecommerceName = ECOMMERCE_NAME

  const BIG_QUERY = new BigQuery()
  const QUERY = ProductQueries.insertProduct(PRODUCT_BODY)

  try {
    await BIG_QUERY.query(QUERY)
    response.status(200).json({
      data: "Record with success"
    })
  } catch (error) {
    response.status(400).json({
      data: error
    })
  }
}