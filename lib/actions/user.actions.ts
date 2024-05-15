'use server';

import { CreateUserParams, UpdateUserParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import User from "../database/models/user.model";
import { revalidatePath } from "next/cache";
import Event from "../database/models/event.model";
import Order from "../database/models/order.model";

//SERVER ACTION: CREATE USER
export const createUser = async (user: CreateUserParams) => {

    try {
        await connectToDatabase();

        const newUser = await User.create(user);

        if(!newUser) throw new Error('User not found');

        return JSON.parse(JSON.stringify(newUser));
        
    } catch (error) {
        handleError(error);
    }
}

//SERVER ACTION: UPDATE USER
export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
    try {
        await connectToDatabase();

        const updatedUser = await User.findOneAndUpdate({clerkId}, user, { new: true })

        if (!updatedUser) throw new Error('User update failed');
    } catch (error) {
        handleError(error);
    }
}

//SERVER ACTION: DELETE USER
export const deleteUser = async (clerkId: string) => {
    try {
        await connectToDatabase();

        //find user to delete
        const userToDelete = await User.findOne({ clerkId });

        if(!userToDelete) {
            throw new Error('User not found');
        }

        //Unlink relationships
        await Promise.all([
             //update the 'events' collection to remove references to user
             Event.updateMany(
                {_id: { $in: userToDelete.events } },
                { $pull: { organizer: userToDelete._id } }
             ),

             //update the 'orders' collection to remove references to user
             Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 }})
        ])

        //Delete User
        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath('/');

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
    } catch (error) {
       handleError(error); 
    }
}

//SERVER ACTION GET USER BY ID
export const getUserbyId = async (userId: string) => {
    try {
        await connectToDatabase();

        const user = await User.findById(userId);

        if(!user) throw new Error ("User not found");

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        handleError(error);
    }
}