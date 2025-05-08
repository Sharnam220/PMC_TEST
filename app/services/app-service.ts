//import { DocumentDefinition, FilterQuery, UpdateQuery } from "mongoose"

import { TodoInterface } from "../interfaces/todo.interface"
import Todo from "../models/todo.model"

const createTodo = async (data: TodoInterface) => {
    try {
        const result = await Todo.create(data)
        return result
    } catch (error: any) {
        throw new Error(error)
    }
}

const findTodo = async (query: any, sort: any, limit: any) => {
    try {
        const result = await Todo.find(query).sort(sort).limit(limit)
        return result
    } catch (error: any) {
        throw new Error(error)
    }
}

/**
 * Author : Sharnam J
 * Date : 04-07-2023
 * Description : find One Surf Mobil Events by findOne Query.
 * @returns
 */
const findOneTodo = async (query: any) => {
    try {
        const result = await Todo.findOne(query)
        return result
    } catch (error: any) {
        throw new Error(error)
    }
}

/**
 * Author : Sharnam J
 * Date : 06-01-2023
 * Description : insert Multiple Surf Mobil Events in one query.
 * @returns
 */
const insertManyTodo = async (payload: any, options: any) => {
    try {
        const insertManyResponse = await Todo.insertMany(payload, options)
        return insertManyResponse
    } catch (error: any) {
        //console.log("insertManyResponseEvents, error", error)
        //throw new Error(error)
    }
}

/**
 * Author : Sharnam J
 * Date : 06-02-2023
 * Description : updates Multiple Surf Mobil Events in one query.
 * @returns
 */
const updateMultipleTodo = async (filter: any, update: any, options: any) => {
    try {
        const updateManyResponse: any = await Todo.updateMany(filter, update, options)
        return updateManyResponse
    } catch (error: any) {
        //console.log("updateMultipleTodo, error", error)
        //throw new Error(error.message)
    }
}

/**
 * Author : Sharnam J
 * Date : 06-02-2023
 * Description : updates one Surf Mobil Events in one query  by updateOne Method.
 * @returns
 */
const updateOneTodo = async (filter: any, update: any, options: any) => {
    try {
        const updateOneResponse: any = await Todo.updateOne(filter, update, options)
        return updateOneResponse
    } catch (error: any) {
        throw new Error(error.message)
    }
}


export default { createTodo, findTodo, findOneTodo, insertManyTodo, updateMultipleTodo, updateOneTodo }