import { Request, Response } from 'express';
import { severityService } from '../service/severityService';
import { CustomLogger } from '../config/Logger'
let severity = new severityService();

export class severityController {
    
    constructor() { }
    
    public GpSearch(req: Request, res: Response) {
severity.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
severity.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
severity.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
severity.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
severity.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpCreate');
    })}
public GpDelete(req: Request, res: Response) {
severity.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into severityController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from severityController.ts: GpDelete');
    })}


}