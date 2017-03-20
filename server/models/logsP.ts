import * as mongoose from "mongoose";

interface ILogP{
    hora:string;
    fecha:string;
    CI:string;
    op:string;
}

interface ILogPModel extends ILogP, mongoose.Document{};
var userSchema = new mongoose.Schema({
    hora: String,
    fecha: String,
    CI: String,
    op: String
});

var LogP = mongoose.model<ILogPModel>("logsP", userSchema, "logsP");

export = LogP;