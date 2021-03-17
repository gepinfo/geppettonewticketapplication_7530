
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ticketSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   description: String,
   type: { type: Schema.Types.String, ref: 'servicetypes' },
   severity: { type: Schema.Types.String, ref: 'severity' }
})

const ticketModel = mongoose.model('ticket', ticketSchema, 'ticket');
export default ticketModel;
