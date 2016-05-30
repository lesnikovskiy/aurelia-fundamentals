export class Jobs {
    canActivate(params, routeConfig, navigationInstruction) {
        let promise = new Promise((resolve, reject) => {
           setTimeout(_ => resolve(false), 3000); 
        });
        return promise;
    }
}