import express from 'express'
import { User } from '../Models/user.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generateCookie } from '../utils/feature.js';

export const userRegister = async (req, res) => {

    const { name, email, password } = req.body

    let user = await User.findOne({ email });

    if (user) return res.status(404).json({
        success: false,
        message: "User Already Exists.."
    })

    const hashPassword = await bcrypt.hash(password, 10)

    user = await User.create({
        name,
        email,
        password: hashPassword,
    })

    generateCookie(user, res, 201,"User Registered Successfully");
    
}

export const userLogin = async (req, res) => {

    const { email, password } = req.body

    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({
        success: false,
        message: "User does not Exists, Register first"
    })

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) return res.status(400).json({
        success: false,
        message: "Password does not match, try again"
    })

    generateCookie(user,res,201,`Welcome ${user.name}`)

}

export const userLogout = async(req,res)=>{
    res.status(200).cookie("token","",{
        expires:new Date(Date.now())
    }).json({
        succes:"true",
        message:'Logged Out Succesfully'
    })
}

export const userHome = (req, res) => {
    res.json({
        success: true,
        message: 'we are in home route',
        shivansh: "Mehta"
    })
}

export const getMyProfile = (req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user
    })
}