export class FreshnessValueConverter {
    toView(value) {
        if (Math.floor((new Date() - value) / 1000) > 10)
            return "red";
            
        if (Math.floor((new Date() - value) / 1000) > 5)
            return "yellow";
            
        return "white";
    }
}