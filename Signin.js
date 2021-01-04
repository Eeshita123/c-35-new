class Signin {

    constructor(){
    
        this.input = createInput("");
        this.input1 = createInput("");
        
        this.button = createButton('Sign In and Proceed to Survey');
    
    }
    
    hide(){
    
        this.title.hide();
        this.title1.hide();
        this.title2.hide();
        this.input.hide();
        this.input1.hide();
        
        this.button.hide();
        this.error.hide();
    
    }
    
        update(name){
    
            
            database.ref("voters").set({
    
                votersNames:name
                
    
            })
    
        }

        
        update1(email){
    
            
            database.ref("votersId").set({
    
               
                Id:email
    
            })
    
        }
        
    display(){
    
        
        
        
        var title = createElement('h1');
        title.html("Welcome to the Survey App . Sign In with your valid details");
        title.position(displayWidth/3-300, displayHeight/3-70);
    
        var title1 = createElement('h2');
        title1.html("Username - ");
        title1.position(displayWidth/3-200, displayHeight/3+30);
    
        var title2 = createElement('h2');
        title2.html("EmailId - ");
        title2.position(displayWidth/3-200, displayHeight/3 + 120);
    
    
        var error = createElement('h3');
        
        this.input.position(displayWidth/3-70, displayHeight/3 + 52);
        this.input1.position(displayWidth/3-90, displayHeight/3 + 143);
        
        this.button.position(displayWidth/4, displayHeight/2 + 250 );
       
        this.button.mousePressed(()=>{
    
            var name = this.input.value();
            var email = this.input1.value();

            console.log(name);
            console.log(email);
    
            if(name === "" && email === ""){
    
                
                error.html("Please write your Valid details before Signing In and Proceeding");
                strokeWeight(2);
                stroke("red");
                error.position(displayWidth/2 - 250, displayHeight/2 + 90 );
    
            }
            else{
    
            title.hide();
            title1.hide();
            title2.hide();
            this.input.hide();
            this.input1.hide();
            
           this.button.hide();
           error.hide();
            
           verify = new Verifation();
           verify.display();

            signin.update(name);
            signin.update1(email);
            
        
            }
    
            })
    
    
    }
    
    
    }