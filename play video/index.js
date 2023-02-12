$(document).ready(function(){
   
    $(".tugma").click(function(){
        $(".rasm1").css({
            "width":"250px",
            "borderRadius":"15px",
            "boxShadow":"0px 18px 18px gray",
            "marginRight":"35px",
        
        })
    });
    $(".matn1").click(function(){
        $(".matn1").css({
            "color":"blue",
            "fontSize":"20px",
            "fontFamily":"cursive",
        })
       
    });
    $(".tugma2").click(function(){
        $(".audio").css({
            "display":"none"
        }

        )

    });

    $(".tugma2").click(function(){
        auo.src="Nasheed.mp3"



        
    });

    

   
    $(".tugma3").click(function(){
        vid.src="asmo.mp4",

        $("#vid").css({
    
            "width":"530px",
            "border-radius":"20px",
            "box-shadow":"0 7px 6px 4px gray",
    
        
           
            
        });



    
         
    });


   

     
    
   
        
   


    
  








})