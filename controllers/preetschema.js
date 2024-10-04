// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const PreetSchema = require('../models/preetschemaSchema');

// CRUD operations for preetSchema
// Create Controller 
const createPreetSchema = async (req, res) => { 
    const { field1, field2 } = req.body;
    try {
        const preetschema = await PreetSchema.create({ field1, field2 }) 
        await preetschema.save();
        res.status(201).json(preetschema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updatePreetSchema = async (req, res) => { 
    const _id=req.params.id;
    const { field1, field2 } = req.body;
    try {
        const preetschema = await PreetSchema.findByIdAndUpdate( _id, { field1, field2 },{new:true}) 
        if (!preetschema) {
            return res.status(404).send('preetschema not found');
        }
        await preetschema.save();
        res.status(201).json(preetschema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deletePreetSchema = async (req, res) => { 
    const _id=req.params.id;
    try {
        const preetschema = await PreetSchema.findById(_id)
        if (!preetschema) {
            return res.status(404).send('preetschema not found');
        }
        await PreetSchema.deleteOne({_id: _id})
        await preetschema.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getPreetSchema = async (req, res) => { 
    const _id=req.params.id;
    try {
        const preetschema = await PreetSchema.findById(_id)
        if (!preetschema) {
            return res.status(404).send('preetschema not found');
        }
        res.status(201).json(preetschema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllPreetSchema = async (req, res) => { 
    try {
        const preetschema = await PreetSchema.find({})
        if (!preetschema) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(preetschema);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createPreetSchema,
    updatePreetSchema,
    deletePreetSchema,
    getPreetSchema,
    getAllPreetSchema
}