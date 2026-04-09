# Contact Form Lambda

AWS Lambda function that receives contact form submissions from the Spanex website
and sends them via Amazon SES to `info@spanex.com.au`.

## Architecture

```
Website (spanex.com.au)
        |
        v  HTTPS POST (JSON)
API Gateway (HTTP API)
        |
        v
Lambda (spanex-contact-form, Node.js 18)
        |
        v
Amazon SES -> info@spanex.com.au
```

## AWS Resources

| Resource         | Name / ID                                                              |
| ---------------- | ---------------------------------------------------------------------- |
| Region           | `ap-southeast-2`                                                       |
| Lambda           | `spanex-contact-form`                                                  |
| IAM Role         | `spanex-contact-lambda-role`                                           |
| API Gateway      | `spanex-contact-api` (id: `fow53ak54f`)                                |
| API Endpoint     | `https://fow53ak54f.execute-api.ap-southeast-2.amazonaws.com/`         |
| SES Verified ID  | `info@spanex.com.au`                                                   |

## Request Format

`POST /` with JSON body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Acme Inc",
  "interest": "Bio-Capsule Solutions",
  "message": "Hi, I'd like to learn more..."
}
```

Required: `name`, `email`, `message`. Optional: `company`, `interest`.

## Response

- `200 { "success": true, "message": "Message sent successfully" }`
- `400 { "error": "Missing required fields..." }`
- `500 { "error": "Failed to send message", "details": "..." }`

## Deploy

From the repo root:

```bash
cd lambda/contact-form
zip function.zip index.js
aws lambda update-function-code \
  --function-name spanex-contact-form \
  --zip-file fileb://function.zip \
  --region ap-southeast-2
rm function.zip
```

## Notes

- SES is in **sandbox mode**, but works because both sender and recipient are
  the verified address `info@spanex.com.au`. The submitter's email is set as
  `Reply-To`, so replying from the inbox goes back to them.
- The AWS SDK v3 (`@aws-sdk/client-ses`) ships with the Node.js 18 Lambda
  runtime, so no `node_modules` need to be bundled.
