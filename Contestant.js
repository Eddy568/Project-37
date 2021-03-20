class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
    }
  
    getCount(){
      var ContestantCountRef = database.ref('playerCount');
      ContestantCountRef.on("value",(data)=>{
        ContestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        ContestantCount: count
      });
    }
  
    update(){
      var ContestantIndex = "Constestants/contestant" + this.index;
      database.ref(Contestant).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getContestantInfo(){
      var ContestantInfoRef = database.ref('Contestants');
      ContestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
  }
  