import * as mongoose from 'mongoose';
import severityModel from '../models/severity';
import { CustomLogger } from '../config/Logger'


export class severityDao {
    private severity = severityModel;
    constructor() { }
public GpSearch(severityData, callback){
new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(severityData).forEach(
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
this.severity.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(severityData, callback){
new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpSearchForUpdate')

this.severity.findOneAndUpdate({ _id: severityData._id }, severityData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(severityData, callback){
new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpUpdate')

this.severity.findOneAndUpdate({ _id: severityData._id }, severityData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpGetAllValues')

this.severity.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(severityData, callback){
new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpCreate')
let temp = new severityModel(severityData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(severityId, callback){
new CustomLogger().showLogger('info', 'Enter into severityDao.ts: GpDelete')

this.severity.findByIdAndRemove(severityId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from severityDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}


}