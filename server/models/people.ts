import * as mongoose from "mongoose";

interface IPeople{
   CI:string;
   nombre:string;
   edad:string;
   sede:string;
   carrera:string;
   enCampus:string;
   mtrAuto:string;
}

interface IPeopleModel extends IPeople, mongoose.Document{};
var peopleSchema = new mongoose.Schema({
    CI: String,
    nombre: String,
    edad: Number,
    sede: String,
    carrera: String,
    enCampus: Boolean,
    mtrAuto: String,
});

var People = mongoose.model<IPeopleModel>("personas", peopleSchema);

export = People;