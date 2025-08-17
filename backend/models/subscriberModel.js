/************************* imports *************************/
import mongoose, {model, Schema} from 'mongoose';

const subscriberSchema = new Schema({
      email: {type: String, required: true, unique: true},
      createdAt: {type: Date, default: Date.now}
   },
   {timestamps: true}
);

const Subscriber = new model('Subscriber', subscriberSchema);
export default Subscriber;