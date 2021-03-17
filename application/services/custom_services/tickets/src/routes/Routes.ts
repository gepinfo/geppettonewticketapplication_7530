import { Request, Response, NextFunction } from "express";
import { ticketController } from '../controller/ticketController';


export class Routes {
    private ticket: ticketController = new ticketController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/ticket/get/search').get(this.ticket.GpSearch);
app.route('/ticket/get/update').put(this.ticket.GpSearchForUpdate);
app.route('/ticket').put(this.ticket.GpUpdate);
app.route('/ticket').get(this.ticket.GpGetAllValues);
app.route('/ticket').post(this.ticket.GpCreate);
app.route('/ticket/:id').delete(this.ticket.GpDelete);
app.route('/ticket/:id').get(this.ticket.GpGetNounById);
     }

}