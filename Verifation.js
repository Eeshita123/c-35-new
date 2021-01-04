class Verifation {

    constructor(){
    
        this.button2 = createButton('Submit & Proceed');
    
    }
    
    hide(){
    
        this.button2.hide();
        
        this.title2.hide();
        this.age.hide();
        this.title3.hide();
        this.gender.hide();
        this.title4.hide();
       
        this.symptoms.hide();
        this.symptoms1.hide();
        this.symptoms2.hide();
        this.symptoms3.hide();
        this.symptoms4.hide();
        this.symptoms5.hide();
        this.symptoms6.hide();
        this.symptoms7.hide();
        
    }
    
    update(option){
    
            
        database.ref("votersAnswers1").set({

           
            ans1:option

        })

    }
    update1(option1){
    
            
        database.ref("votersAnswers2").set({

           
            ans2:option1

        })

    }
    update2(option2){
    
            
        database.ref("votersAnswers3").set({

           
            ans3:option2

        })

    }
    
    display(){
    
        var title1 = createElement('h1');
        title1.html("Survey");
        title1.position(510,150);
    
        var title2 = createElement('h2');
        title2.html("1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        title2.position(155,305);
    
        var option = createSelect();
        option.position(230,360);
        option.option("Yes");
        option.option("No");
        
        option.changed(()=>{
    
            OPTION = option.value();
    
            console.log(OPTION);
    
        });
    
        var title3 = createElement('h2');
        title3.html("2. Would you be willing to contribute a small amount every month for such a program?");
        title3.position(155,380);
    
        var option1 = createSelect();
        option1.position(230,435);
        option1.option("Yes");
        option1.option("No");
        
        option1.changed(()=>{
    
            OPTION1 = option1.value();
    
            console.log(OPTION1);
    
        });
    
        var title4 = createElement('h2');
        title4.html("3.  How much per month would you be willing to pay?");
        title4.position(155,455);
        
        var option2 = createSelect();
        option2.position(230 , 510);
        option2.option("100");
        option2.option("500");
        option2.option("1000");
        option2.option("More");
    
        option2.changed(()=>{
    
            if(this.checked){
    
                OPTION2 = option1.value();
                console.log(OPTION2);
    
            }
    
        });
        
        this.button2.position(600,825);
    
        this.button2.mousePressed(()=>{ 
    
            this.button2.hide();
        
        title2.hide();
        option.hide();
        title3.hide();
        option1.hide();
        title4.hide();
        option2.hide()
        
           thanks = new Thanks();
           thanks.display();

           verify.update(option);
           verify.update1(option1);
           verify.update2(option2);
    
            })
    
    }
    
    }