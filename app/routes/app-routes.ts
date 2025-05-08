import express, { Request, Response } from "express"
import appController from "../controllers/app-controller"
const api_router = express.Router();

api_router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Development Server is Active" })
})


api_router.post('/createTodo', appController.apiCreateTodo as any)
api_router.get('/getTodoList',  appController.apiFindTodo as any )
api_router.get('/getTodoListByTitle/:title',  appController.apiFindOneTodo as any)


// api_router.post("/createTodo", async (req: Request, res: Response) => {
//     const { title, description } = req.body;
//     const appServiceResponse = await appController.createTodo({ title, description });
//     res.status(200).json({ data: appServiceResponse })
// })


// api_router.get("/getTodoList", async (req: Request, res: Response) => {
//     const appServiceResponse = await appController.findTodo({}, {}, {});
//     res.status(200).json({ data: appServiceResponse })
// })

// api_router.get("/getTodoListByTitle/:title", async (req: Request, res: Response) => {
//     const title = req.params.title;
//     const appServiceResponse = await appController.findOneTodo({'title':title});
//     res.status(200).json({ data: appServiceResponse })
// })

export = api_router