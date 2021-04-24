String.prototype.toNumber = function(){
    if((typeof this) == 'string') {
        console.log("KKKK" + this.search("/"));
        if(this.search("%") != -1){
            return parseInt((parseInt(this.split('%')[0])/100)*100);
        }
        if(this.search("/") != -1){
            console.log("OK");
            const arr = this.split('/');
            console.log(parseFloat(arr[0]));
            console.log(parseFloat(arr[1]));
            return  parseInt((parseFloat(arr[0])/parseFloat(arr[1]))*100);
        }
        return 0;
    }
    return 0;
};