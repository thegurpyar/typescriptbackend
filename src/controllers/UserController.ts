import { Request, Response } from 'express';
import User, { IUser } from '../models/User.js';
import { validateUser } from "../validators/userValidator.js"
const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { error } = validateUser(req.body);
        if (error) {
            res.status(400).json({ message: 'Invalid input', error: error.message });
            return
        }
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            res.status(400).json({ message: 'Email already in use' });
            return;
        }

        const user: IUser = new User(req.body);
        await user.save();
        res.status(201).json({data:user,message:"Registered successfully"});
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};

const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users: IUser[] = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};


const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {

        const user: IUser | null = await User.findByIdAndUpdate(req.query.id, req.body, { new: true });
        if (user) {
            res.status(200).json({message:"user updated successfully",user});
        } else {
            res.status(404).json({message:'User not found'});
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
}

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user: IUser | null = await User.findByIdAndDelete(req.query.id);
        if (user) {
          res.status(200).json({message:"User deleted successfully"});
        } else {
          res.status(404).json({message:'User not found'});
        }
      } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
      }
}
export { createUser,getUsers,updateUser,deleteUser }