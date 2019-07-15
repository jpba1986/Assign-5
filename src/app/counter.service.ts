export class CounterService{
    activeToInactiveCounter = 0 ;
    inactiveToInactiveCounter = 0 ;

    incrementeIA(){
        this.inactiveToInactiveCounter++;
        console.log('Inactive to Active :'+this.inactiveToInactiveCounter);
    }
    incrementeAI(){
        this.activeToInactiveCounter++;
        console.log('Active to Inactive:'+this.activeToInactiveCounter);
    }
}