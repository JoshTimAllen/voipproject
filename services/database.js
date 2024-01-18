import mongoose from "mongoose";
import { User } from '../models/useraccess_models.js'


// Replace the uri string with your connection string.
const uri = "mongodb+srv://admin:F8QtpGj3GncZSdbcrZGrmjUNRzM58S4VSqfiaVY3N6tdZk7HPAhq2Ry@cluster0.echv6.gcp.mongodb.net/project_voip?retryWrites=true&w=majority";

export class Database {
    async Start() {
        mongoose.connect(uri).then((result) => {
            console.log("Connected to database");
        }).catch((error) => {
            console.log(error);
        });
        await User.exists({
            username: 'josh'
        }).then(result => {
            if (result == null) {
                var u = new User({
                    username: "josh",
                    email: "Hgvhg@jhnjk.com"
                });
                u.save();
                return u;
            }
            else {
                return result;
            }
        }).catch(reason => {

        });
    }
    async AddUser(user = new User()) {
        if (User.exists({
            username: user.username
        })) {

        }
        return await user.save();
    }
}