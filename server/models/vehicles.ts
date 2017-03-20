import * as mongoose from "mongoose";

interface IVehicle{
    mtrAuto:string;
    enCampus:string;
}

interface IVehicleModel extends IVehicle, mongoose.Document{};
var vehicleSchema = new mongoose.Schema({
    mtrAuto: String,
    enCampus: Boolean
});

var Vehicles = mongoose.model<IVehicleModel>("vehiculos", vehicleSchema);

export = Vehicles;