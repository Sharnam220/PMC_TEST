import appService from "../services/app-service"
import { Request, Response } from "express"

const apiCreateTodo = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const appServiceResponse = await appService.createTodo({ title, description });
        return res.status(200).send({
            status: true,
            data: appServiceResponse,
            message: "apiCreateTodo Success"
        })


        res.status(200).json({ data: appServiceResponse })
    } catch (error: any) {
        return res.status(500).send({
            status: false,
            message: error?.message
        })
    }
}

const apiFindTodo = async (req: Request, res: Response) => {
    try {
        const appServiceResponse = await appService.findTodo({}, {}, {});
        return res.status(200).send({
            status: true,
            data: appServiceResponse,
            message: "apiFindTodo Success"
        })

    } catch (error: any) {
        return res.status(500).send({
            status: false,
            message: error?.message
        })
    }
}

const apiFindOneTodo = async (req: Request, res: Response) => {
    try {
        const title = req.params.title;
        const appServiceResponse = await appService.findOneTodo({ 'title': title });
        return res.status(200).send({
            status: true,
            data: appServiceResponse,
            message: "apiFindOneTodo Success"
        })

        
        res.status(200).json({ data: appServiceResponse })
    } catch (error: any) {
        return res.status(500).send({
            status: false,
            message: error?.message
        })
    }
}


export default { apiCreateTodo, apiFindTodo, apiFindOneTodo }