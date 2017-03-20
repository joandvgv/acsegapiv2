import * as mongoose from "mongoose";

interface IUser{
    username:string;
    password:string;
}

interface IUserModel extends IUser, mongoose.Document{};
var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

var User = mongoose.model<IUserModel>("User", userSchema);

export = User;