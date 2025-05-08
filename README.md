# PMC_TEST
test project for PMC

1] Do npm i

2] Run project by "npm run dev"

3] Backend will be serving at http://localhost:8080

Main Dependencies :

Package	and Purpose

express 	-Web server framework

mongoose	-MongoDB ODM for managing models/schemas

bcryptjs	-Hashing passwords

jsonwebtoken	-Generating and verifying JWT tokens

dotenv	-Load environment variables from .env

csv-writer	-For exporting reports as CSV


command : npm install express mongoose bcryptjs jsonwebtoken dotenv csv-writer pdfkit cors


Dev Dependencies :

Package	and Purpose
typescript	-TypeScript language support


ts-node-dev	-TypeScript dev server with live reload

@types/express	-Type definitions for Express

@types/bcryptjs	-Type definitions for bcryptjs

@types/jsonwebtoken	-Type definitions for jsonwebtoken

@types/node	-TypeScript definitions for Node.js

command : npm install -D typescript @types/express @types/bcryptjs @types/jsonwebtoken @types/node ts-node-dev


For Database Mongo DB is used on localhost:27017

Postman : 

Admin and User API : https://.postman.co/workspace/My-Workspace~689d6980-72e3-4d83-88e8-bdb51ad2e79c/collection/44775169-59e0f0e5-e76c-4d31-a3f5-cf9ff895ec3d?action=share&creator=44775169&active-environment=44775169-b905c109-74fa-42f4-b331-a268d26456ee

Categories API : https://.postman.co/workspace/My-Workspace~689d6980-72e3-4d83-88e8-bdb51ad2e79c/collection/44775169-4a4d90c7-2b4e-441c-a332-4502d7f791e1?action=share&creator=44775169&active-environment=44775169-b905c109-74fa-42f4-b331-a268d26456ee

Products API : https://.postman.co/workspace/My-Workspace~689d6980-72e3-4d83-88e8-bdb51ad2e79c/collection/44775169-73a14e34-0f1e-49aa-8ef0-927465da9365?action=share&creator=44775169&active-environment=44775169-b905c109-74fa-42f4-b331-a268d26456ee

Reports API : https://.postman.co/workspace/My-Workspace~689d6980-72e3-4d83-88e8-bdb51ad2e79c/collection/44775169-92132c4a-6a5c-46fa-ab43-f650af878167?action=share&creator=44775169&active-environment=44775169-b905c109-74fa-42f4-b331-a268d26456ee

Stock Management API : https://.postman.co/workspace/My-Workspace~689d6980-72e3-4d83-88e8-bdb51ad2e79c/collection/44775169-7c818114-c699-4ee4-932c-9fe5034b2f52?action=share&creator=44775169&active-environment=44775169-b905c109-74fa-42f4-b331-a268d26456ee


For Postman New Environment is there, where 2 ENV variables are added for the user  token and admin token. Take token from login API and add to the ENV of postman here.

Admin auth is added in report API and few products API, and user auth is added to few products API