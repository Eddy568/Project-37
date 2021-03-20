class Quiz {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':20,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
    display(){
    this.title.html("My Quiz Game")
    this.title.position(350,0);

    this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter? ");
    this.question.position(150,80);
    this.option1.html("1: Everyone ");
    this.option1.html.position(150,100);
    this.option2.html("2: Envelope" );
    this.option2.position(150,120);

    this.input.position(150,230);


}
async start(){
    if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
    question = new Question();
    question.display();
  }
}