import * as mongoose from 'mongoose';
import ticketModel from '../models/ticket';
import { CustomLogger } from '../config/Logger'


export class ticketDao {
    private ticket = ticketModel;
    constructor() { }
public GpSearch(ticketData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(ticketData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.ticket.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(ticketData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpSearchForUpdate')

this.ticket.findOneAndUpdate({ _id: ticketData._id }, ticketData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(ticketData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpUpdate')

this.ticket.findOneAndUpdate({ _id: ticketData._id }, ticketData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpGetAllValues')

this.ticket.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(ticketData, callback){
new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpCreate')
let temp = new ticketModel(ticketData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(ticketId, callback){
new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpDelete')

this.ticket.findByIdAndRemove(ticketId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(ticketId, callback){
new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GpGetNounById')

this.ticket.findById(ticketId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}


}