import { Request, Response } from 'express';
import {severityDao} from '../dao/severityDao';
import { CustomLogger } from '../config/Logger'
let severity = new severityDao();

export class severityService {
    
    constructor() { }
    
    public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpSearch')
     const  severityData = req.query;
     severity.GpSearch(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpSearchForUpdate')
     const  severityData = req.body;
     severity.GpSearchForUpdate(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpUpdate')
     const  severityData = req.body;
     severity.GpUpdate(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpGetAllValues')
     
     severity.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpCreate')
     const  severityData = req.body;
     severity.GpCreate(severityData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpCreate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into severityService.ts: GpDelete')
     const  severityId = req.params.id;
     severity.GpDelete(severityId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from severityService.ts: GpDelete')
         callback(response);
         });
    }


}