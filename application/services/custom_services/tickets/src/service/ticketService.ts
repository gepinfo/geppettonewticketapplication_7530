import { Request, Response } from 'express';
import {ticketDao} from '../dao/ticketDao';
import { CustomLogger } from '../config/Logger'
let ticket = new ticketDao();

export class ticketService {
    
    constructor() { }
    
    public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpSearch')
     const  ticketData = req.query;
     ticket.GpSearch(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpSearchForUpdate')
     const  ticketData = req.body;
     ticket.GpSearchForUpdate(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpUpdate')
     const  ticketData = req.body;
     ticket.GpUpdate(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpGetAllValues')
     
     ticket.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpCreate')
     const  ticketData = req.body;
     ticket.GpCreate(ticketData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpCreate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpDelete')
     const  ticketId = req.params.id;
     ticket.GpDelete(ticketId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpDelete')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into ticketService.ts: GpGetNounById')
     const  ticketId = req.params.id;
     ticket.GpGetNounById(ticketId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from ticketService.ts: GpGetNounById')
         callback(response);
         });
    }


}