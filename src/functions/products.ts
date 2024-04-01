import { APIGatewayProxyHandler } from "aws-lambda";

const products = [
  {
    id: "651677c0-619f-4b63-8b95-dca2c8af1d20",
    name: "product 1",
  },
  {
    id: "e0bb4238-e18c-4e7b-a1ba-4b3cd572d0b1",
    name: "product 2",
  },
  {
    id: "293974f0-4302-4a9e-95d2-258992c5ac4b",
    name: "product 3",
  },
  {
    id: "ca2b6f07-86c7-45c6-a421-34f81b39e42b",
    name: "product 4",
  },
  {
    id: "106029a3-1674-43b5-977c-dab5045b4bef",
    name: "product 5",
  },
];

const index: APIGatewayProxyHandler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};

const show: APIGatewayProxyHandler = async (event) => {
  const productId = event.pathParameters!.id;
  const product = products.find((p) => p.id == productId);

  if (!product) {
    return {
      statusCode: 404,
      body: JSON.stringify({
        message: `Product ${productId} is not found`,
      }),
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(product),
  };
};

exports.index = index;
exports.show = show;
