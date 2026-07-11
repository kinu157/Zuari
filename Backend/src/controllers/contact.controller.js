import mongoose from "mongoose"
import { Contact } from "../models/contact.model.js"
import {Apierror} from "../utils/Apierror.js"
import {Apiresponse} from "../utils/Apiresponse.js"
import {asynchandler} from "../utils/asynchandler.js"

const createContact = asynchandler(async (req, res) => {
    const { name, email, title, message } = req.body || {};

    if (!name?.trim() || !email?.trim() || !title?.trim() || !message?.trim()) {
        throw new Apierror(400, "All fields are required");
    }

    const contact = await Contact.create({ name, email, title, message });
    return res.status(201).json(new Apiresponse(201, contact, "Contact created successfully"));
});

export { createContact };