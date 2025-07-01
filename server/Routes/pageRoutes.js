import express from "express"
import {loginUser, signupUser} from "../Controller/pageController.js"

const pageRoutes=express.Router();
pageRoutes.post("/login", loginUser)
pageRoutes.post("/signup", signupUser)


export default pageRoutes;