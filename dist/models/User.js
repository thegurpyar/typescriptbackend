import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});
export default mongoose.model('User', userSchema);
//# sourceMappingURL=User.js.map