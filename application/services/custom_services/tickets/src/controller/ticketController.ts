import { Request, Response } from 'express';
import { ticketService } from '../service/ticketService';
import { CustomLogger } from '../config/Logger'
let ticket = new ticketService();

export class ticketController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
ticket.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
ticket.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
ticket.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
ticket.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
ticket.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpCreate');
    })}
public GpDelete(req: Request, res: Response) {
ticket.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into ticketController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from ticketController.ts: GpDelete');
    })}


}