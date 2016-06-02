var method = "updateSource";

export class InterceptorBindingBehavior {
    bind(binding, scope, interceptor) {
        binding[`intercepted-${method}`] =  binding[method];
        let update = binding[method].bind(binding);
        binding[method] = interceptor.bind(binding, method, update);
    }
    
    unbind(binding, scope) {
        binding[method] = binding[`intercepted-${method}`];
        binding[`intercepted-${method}`] = null;
    }
}