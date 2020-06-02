import {
  APIGatewayProxyEvent,
  Context,
} from 'https://deno.land/x/lambda/mod.ts';

const ok = (body: any, statusCode: number = 200) => {
  return {
    statusCode,
    body: JSON.stringify(body),
  };
};

export const handler = (event: APIGatewayProxyEvent, context: Context) => {
  console.log('Running Deno Serverless --- 🎸');
  console.log(event)
  return ok({ body: 'Hello World! from Serverless Lambda with Deno Layer' });
};
