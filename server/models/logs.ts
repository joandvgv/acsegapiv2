import * as mongoose from "mongoose";

interface ILog{
    hora:string;
    fecha:string;
    mtrAuto:string;
    op:string;
}

interface ILogModel extends ILog, mongoose.Document{};
var userSchema = new mongoose.Schema({
    hora: String,
    fecha: String,
    mtrAuto: String,
    op: String
});

var Log = mongoose.model<ILogModel>("logs", userSchema);

export = Log;