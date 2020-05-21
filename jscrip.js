var Crew = function(i_id,b_id,u_id){
  this.b_id = b_id,
  this.i_id = i_id,
  this.u_id = u_id,
  
    this.add_member = function(){
        val = $(i_id).val(),
        ul =$(u_id),
        li = $('<li></li').text("  "+val),
        btn =$("<br><button class='rm btn btn-primary'></button>").text(" Remove "+val),
        $(li).append(btn);
        $(ul).append(li);
    },
    this.remove = function (event){
        if(event.target.type == 'submit') {
            event.target.parentElement.remove();
        }
    }

}
$(document).on("keydown", "form", function(event) { 
    return event.key != "Enter";
});

var gra = new Crew('#GRA','#add_a','#A');


$('#add_a').click(function(){
    gra.add_member();
    check();
});

var characters = [
"Ryuma "+'<img src="images/ryuma.jpg" alt="..." class="img-thumbnail"></img>',
"Gold Roger"+'<img src="images/roger.jpg" alt="..." class="img-thumbnail"></img>',
"Luffy"+'<img src="images/luffy.jpg" alt="..." class="img-thumbnail"></img>',
"Whitebeard"+'<img src="images/wb.jpg" alt="..." class="img-thumbnail"></img>',
"Kaido "+'<img src="images/kaido.jpg" alt="..." class="img-thumbnail"></img>',
"Big Mom "+'<img src="images/bm.jpg" alt="..." class="img-thumbnail"></img>',
"Shanks "+'<img src="images/shanks.jpg" alt="..." class="img-thumbnail"></img>',
"Jinbei "+'<img src="images/jinbei.jpg" alt="..." class="img-thumbnail"></img>',
"Brook "+'<img src="images/brook.jpg" alt="..." class="img-thumbnail"></img>',
"Blackbeard "+'<img src="images/bb.jpg" alt="..." class="img-thumbnail"></img>',
"Shiki "+'<img src="images/shiki.jpg" alt="..." class="img-thumbnail"></img>',
"Garp "+'<img src="images/garp.jpg" alt="..." class="img-thumbnail"></img>',
"Akainu "+'<img src="images/akainu.jpg" alt="..." class="img-thumbnail"></img>',
"Kozuki Oden "+'<img src="images/oden.jpg" alt="..." class="img-thumbnail"></img>',
"Aokiji "+'<img src="images/aokiji.jpg" alt="..." class="img-thumbnail"></img>',
"Mihawk "+'<img src="images/mihawk.jpg" alt="..." class="img-thumbnail"></img>',
"Kizaru "+'<img src="images/kizaru.jpg" alt="..." class="img-thumbnail"></img>',
"Sengoku "+'<img src="images/sengoku.jpg" alt="..." class="img-thumbnail"></img>',
"Ryokugyu "+'<img src="images/ryokugyu.jpg" alt="..." class="img-thumbnail"></img>',
"Fujitora "+'<img src="images/fuji.jpg" alt="..." class="img-thumbnail"></img>',
"Kuma "+'<img src="images/kuma.jpg" alt="..." class="img-thumbnail"></img>',
"Sabo "+'<img src="images/sabo.jpg" alt="..." class="img-thumbnail"></img>',
"Usopp "+'<img src="images/usopp.jpg" alt="..." class="img-thumbnail"></img>',
"King "+'<img src="images/king.jpg" alt="..." class="img-thumbnail"></img>',
"Katakuri "+'<img src="images/katakuri.jpg" alt="..." class="img-thumbnail"></img>',
"Sanji "+'<img src="images/sanji.jpg" alt="..." class="img-thumbnail"></img>',
"Kidd "+'<img src="images/kidd.jpg" alt="..." class="img-thumbnail"></img>',
"Hawkins "+'<img src="images/hawkins.jpg" alt="..." class="img-thumbnail"></img>',
"Queen "+'<img src="https://images-ext-1.discordapp.net/external/ym7CIe6b_kX8dfNllO2dv7up90pxKeXFamjuWSjibJk/https/media.discordapp.net/attachments/691771889747492935/703114865346084914/FUNKY4.png" alt="..." class="img-thumbnail"></img>',
"Jack "+'<img src="images/jack.jpg" alt="..." class="img-thumbnail"></img>',
"Cracker "+'<img src="images/cracker.jpg" alt="..." class="img-thumbnail"></img>',
"Smoothie "+'<img src="images/smoothie.jpg" alt="..." class="img-thumbnail"></img>',
"Zoro "+'<img src="images/zoro.jpg" alt="..." class="img-thumbnail"></img>',
"Ace "+'<img src="images/ace.jpg" alt="..." class="img-thumbnail"></img>',
"Chopper "+'<img src="images/chopper.jpg" alt="..." class="img-thumbnail"></img>',
"xDrake "+'<img src="images/xdr.jpg" alt="..." class="img-thumbnail"></img>',
"Bege "+'<img src="images/bege.jpg" alt="..." class="img-thumbnail"></img>',
"Rayleigh "+'<img src="images/ray.jpg" alt="..." class="img-thumbnail"></img>',
"Moria "+'<img src="images/moria.jpg" alt="..." class="img-thumbnail"></img>',
"Shiryu "+'<img src="images/shiryu.jpg" alt="..." class="img-thumbnail"></img>',   
"Boa Hancock "+'<img src="images/boa.jpg" alt="..." class="img-thumbnail"></img>',     
"Franky "+'<img src="images/franky.jpg" alt="..." class="img-thumbnail"></img>', 
"Flampe "+'<img src="images/flampe.jpg" alt="..." class="img-thumbnail"></img>',  
"Momonosuke "+'<img src="images/momo.jpg" alt="..." class="img-thumbnail"></img>', 
    
]
var PL =[
 10000,//ryuma
 10000,//gold roger
 10000,//luffy
 10000,//wb
 10000,//KAIDO
 10000,//BM
 10000,//shanks
 10000,//jinbe
 10000,//brook
 10000,//bb
 10000,//Shiki
 10000,//garp
 10000,//Akainu
 10000,//Oden
 10000,//Aokiji
 10000,//Mihawk
 10000,//Kizaru
 10000,//Sengoku
 10000,//Ryokugyu
 10000,//Fujitora
 10000,//Kuma
 10000,//Sabo
 10000,//usopp
 10000,//King
 10000,//Katakuri
 10000,//Sanji
 10000,//Kidd
 10000,//HAWKINS
 10000,//Queen
 10000,//Jack
 10000,//cracker
 10000,//Smoothie
 10000,//Zoro
 10000,//Ace
 10000,//Chopper
 10000,//xDrake
 10000,//Bege
 10000,//Rayleigh
 10000,//Moria 
 10000,//Shiryu 
 10000,//Boa Hancock  
 10000,//Franky 
 10000,//Flampe 
 10000//Momonosuke
]



var new_arr = [];
var gra_arr = []
var gra_arrr2 = [];
var new2 = [];



check = function(){
    if(($('#A li').length !=0)){
            if(($('#A li').length)>=10 && ($('#A li').length)%2 == 0){
                
        $("#d_butt").attr('class', 'btn btn-success btn-block').text("Looks like you're ready!, Click here to start the Battle");
        $('#d_butt').click(function () {
            $(this).fadeToggle('slow',function(){
                var h1 = '<h1 class = "col"><span>Round 1 </span></h1>'
                $("#d1_p1_E").append(h1);
                $(this).remove();
                
                gra_arr = $("#A li");
                gra_arrr2 = $("#A li");
                rem_remove = function(vett){
                    for(i = 0; i<vett.length;i++){
                        vett[i] = vett[i].firstChild.textContent.trim();
                    }
                    return vett;                        
                }
                 gra_arr = rem_remove(gra_arr);
                 gra_arrr2 = rem_remove(gra_arrr2);
                   

                 start();         
                
            });
        });
    
    }    else{
        $("#d_butt").attr('class', 'btn btn-danger btn-block').text("At least 10 members & number of members must be an even number (ex 12/14/16 etc) to start the battle)");
        
    }
}
}

//REMOVE ELEMENT FROM LIST
$('ul').on('click','li',function () {
    $(this).remove();
    check();
});

start = function () { 

    new_arr[0] = gra_arr;
    new_arr[1] = characters;
    new_arr[2] = PL; 
    new_arr[3] = []; 
    new_arr[4] = [];  
    function shuffle(array) {
        var currentIndex = array[1].length, temporaryValue, randomIndex;
        var currentIndex2 =array[2].length,temporaryValue2;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          currentIndex2 -=1;
      
          // And swap it with the current element.
          temporaryValue = array[1][currentIndex];
          array[1][currentIndex] = array[1][randomIndex];
          array[1][randomIndex] = temporaryValue;

          temporaryValue2 = array[2][currentIndex2];
          array[2][currentIndex2] = array[2][randomIndex];
          array[2][randomIndex] = temporaryValue2;
        }
      
        return array;
      }
      
      
      
      
      
      shuffle(new_arr);

      set1 = function (array1){
          
          for(i = 0; i<array1[0].length;i++){
              new_arr[0][i] = new_arr[0][i] + " - "+new_arr[1][i];
              
          }
        }
        set1(new_arr);
       
          print_list = function(div_id,grp_vett,grp,powerL){
            var ul = $("<ul>");
            var h1 = $("<h1>")
            var span = $("<span>").text(grp);
            h1.append(span);
            $(div_id).append(ul);
            $(div_id).prepend(h1);
            for(i = 0; i< grp_vett[0].length;i++){
    
                var h12 = $("<h3>").html(grp_vett[0][i]+ powerL +grp_vett[2][i] );
                var li =$("<li>").append(h12);
                ul.append(li);
                
            }
        }

        print_list("#gra1",new_arr,"Assignments",'Starting Power Level = ');

       
        //RESHUFFLE
        function shuffle2(array) {
            var currentIndex = array[0].length, temporaryValue, randomIndex;
            var currentIndex2 =array[0].length,temporaryValue2;
            var currentIndex3 =array[0].length,temporaryValue3;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              currentIndex2 -= 1;
              currentIndex3 -=1;
          
              // And swap it with the current element.
              temporaryValue = array[0][currentIndex];
              array[0][currentIndex] = array[0][randomIndex];
              array[0][randomIndex] = temporaryValue;
    
              temporaryValue2 = array[1][currentIndex2];
              array[1][currentIndex2] = array[1][randomIndex];
              array[1][randomIndex] = temporaryValue2;

              temporaryValue3 = array[2][currentIndex3];
              array[2][currentIndex3] = array[2][randomIndex];
              array[2][randomIndex] = temporaryValue3;
            }
          
            return array;
          }

          shuffle2(new_arr);
    
          //console.log(new_arr[0].length);
          //console.log(new_arr[1].length);
          //console.log(new_arr[2].length);
        var round = 0;    
         // new2 = JSON.parse(JSON.stringify( new_arr ));
          new_arr[2] = new_arr[2].slice(new_arr[0][0],new_arr[0].length)
          new_arr[1] = new_arr[1].slice(new_arr[0][0],new_arr[0].length)
          //console.log(new_arr[0].length);
          //console.log(new_arr[1].length);
          //console.log(new_arr[2].length);
        matches = function(){
            
            var newD = $('<div class="row"> <div id="breakR1" class"col"> </div> </div>')
            
            breakR = function () { 
                var x = $("#r1");
                x.append(newD);
                var h122 = $('<h1>Equipment</h1>');
                $("#breakR1").append(h122);
                for(i = 0; i<new_arr[0].length;i++){
                    //
                    //+
                    var eventsRng = 
                    [
                        new_arr[0][i] +" finds a pistol "+'<img src="images/weapons/pistol.jpg" alt="..." class="img-thumbnail"></img> PL + 95 000',//0
                        new_arr[0][i] +" finds a sword "+'<img src="images/weapons/sword1.jpg" alt="..." class="img-thumbnail"></img> PL + 97 000',//1
                        new_arr[0][i] +" finds an O Wazamono "+'<img src="images/weapons/sword2.jpg" alt="..." class="img-thumbnail"></img> PL + 108 000',//2
                        new_arr[0][i] +" finds a Saijo o Wazamono "+'<img src="images/weapons/sword3.jpg" alt="..." class="img-thumbnail"></img> PL + 135 000',//3
                        new_arr[0][i] +" finds a Raid Suit "+'<img src="images/weapons/rs.jpg" alt="..." class="img-thumbnail"></img> PL + 110 000',//4
                        new_arr[0][i] +" unlocks CoO "+'<img src="images/weapons/acoo.jpg" alt="..." class="img-thumbnail"></img> PL + 180 000',//5
                        new_arr[0][i] +" unlocks CoA "+'<img src="images/weapons/coa.jpg" alt="..." class="img-thumbnail"></img> PL + 180 000',//6
                        new_arr[0][i] +" unlocks CoC "+'<img src="images/weapons/coc.jpg" alt="..." class="img-thumbnail"></img> PL + 200 000',//7
                        new_arr[0][i] +" unlocks advanced CoO "+'<img src="images/weapons/coo.jpg" alt="..." class="img-thumbnail"></img> PL + 220 000',//8
                        new_arr[0][i] +" unlocks advanced CoA "+'<img src="images/weapons/acoa.jpg" alt="..." class="img-thumbnail"></img> PL + 220 000',//9
                        new_arr[0][i] +" unlocks advanced CoC "+'<img src="images/weapons/acoc.jpg" alt="..." class="img-thumbnail"></img> PL + 250 000',//10
                        new_arr[0][i] +" unlocks all 3 types of Haki "+'<img src="images/weapons/3h.jpg" alt="..." class="img-thumbnail"></img> PL + 300 000',//11
                        new_arr[0][i] +" takes some energy steroids "+'<img src="images/weapons/est.jpg" alt="..." class="img-thumbnail"></img> PL + 177 000',//12
                        new_arr[0][i] +" finds an impact dial "+'<img src="images/weapons/dial.jpg" alt="..." class="img-thumbnail"></img> PL + 167 000',//13
                        new_arr[0][i] +" finds a Reject Dial "+'<img src="images/weapons/dial.jpg" alt="..." class="img-thumbnail"></img> PL + 191 000',//14

                        
                    ]
                    var rng = Math.floor(Math.random() * eventsRng.length-1)+1
                    if(rng == 0){
                        (new_arr[2][i]=new_arr[2][i]+95000)
                        new_arr[3][i] = " pistol "+'<img src="images/weapons/pistol.jpg" alt="..." class="img-thumbnail"></img>';
                        new_arr[4][i] = 0;
                    }else if(rng == 1){
                        (new_arr[2][i]=new_arr[2][i]+97000)
                        new_arr[3][i] = " sword "+'<img src="images/weapons/sword1.jpg" alt="..." class="img-thumbnail"></img>';
                        new_arr[4][i] = 1;
                    }else if(rng == 2){
                        (new_arr[2][i]=new_arr[2][i]+108000)
                        new_arr[3][i] = " O Wazamono "+'<img src="images/weapons/sword2.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 2
                    }
                    else if(rng == 3){
                        (new_arr[2][i]=new_arr[2][i]+135000)
                        new_arr[3][i] = " Saijo O Wazamono "+'<img src="images/weapons/sword3.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 3
                    }
                    else if(rng == 4){
                        (new_arr[2][i]=new_arr[2][i]+110000)
                        new_arr[3][i] = " Raid Suit "+'<img src="images/weapons/rs.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 4
                    }else if(rng == 5){
                        (new_arr[2][i]=new_arr[2][i]+180000)
                        new_arr[3][i] = " CoO "+'<img src="images/weapons/acoo.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 5
                    }
                    else if(rng == 6){
                        (new_arr[2][i]=new_arr[2][i]+180000)
                        new_arr[3][i] = "CoA "+'<img src="images/weapons/coa.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 6
                    }
                    else if(rng == 7){
                        (new_arr[2][i]=new_arr[2][i]+200000)
                        new_arr[3][i] = " CoC "+'<img src="images/weapons/coc.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 7
                    }
                    else if(rng == 8){
                        (new_arr[2][i]=new_arr[2][i]+220000)
                        new_arr[3][i] = " advanced CoO "+'<img src="images/weapons/coo.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 8
                    }
                    else if(rng == 9){
                        (new_arr[2][i]=new_arr[2][i]+220000)
                        new_arr[3][i] = " advanced CoA "+'<img src="images/weapons/acoa.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 9
                    }
                    else if(rng == 10){
                        (new_arr[2][i]=new_arr[2][i]+250000)
                        new_arr[3][i] = " advanced CoC "+'<img src="images/weapons/acoc.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 10
                    }
                    else if(rng == 11){
                        (new_arr[2][i]=new_arr[2][i]+300000)
                        new_arr[3][i] = " 3 types of haki "+'<img src="images/weapons/3h.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 11
                    }else if(rng == 12){
                        (new_arr[2][i]=new_arr[2][i]+177000)
                        new_arr[3][i] = " energy steroids "+'<img src="images/weapons/est.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 12
                    }else if(rng == 13){
                        (new_arr[2][i]=new_arr[2][i]+167000)
                        new_arr[3][i] = " impact dial "+'<img src="images/weapons/dial.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 13
                    }else if(rng == 14){
                        (new_arr[2][i]=new_arr[2][i]+191000)
                        new_arr[3][i] = " reject dial "+'<img src="images/weapons/dial.jpg" alt="..." class="img-thumbnail"></img>'
                        new_arr[4][i] = 14
                    }

                    var h123 = $('<h1>').append(eventsRng[rng] +" = "+new_arr[2][i]);
                    $("#breakR1").append(h123);
                }
                print_list("#breakR1",new_arr," -Pre Fight- ",' New Power Level = ');
             }
             breakR();


             var x = $("#r1");
             var h2 = $('<h1>').html("---------- Round 1(clashes)---------- ");
             x.append(h2);
             for(i = 0; i<new_arr[0].length;i+=2){
                var h1 = $('<h1>').html(new_arr[0][i] +" (Power Left) = " +new_arr[2][i] + " VS " + new_arr[0][i+1]+" (Power Left) = " +new_arr[2][i+1]);
                x.append(h1);
                 if(new_arr[2][i] >= new_arr[2][i+1]){
                     if(new_arr[4][i] == 0){
                         
                         var rngE = 
                         [
                             new_arr[0][i] + " fires a shot with his "+ new_arr[3][i] +" " + new_arr[0][i+1] + " is hurt but he can still fight",
                             new_arr[0][i] + " fires a shot with his "+ new_arr[3][i] +" but his gun is jammed " 
                         ] 
                         
                         var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                         if(rng1 == 0){
                            var rngval = Math.floor(Math.random() * 27000)+1
                            new_arr[2][i+1] -=rngval;
                            var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i+1] + " PL - "+ rngval +" = " + new_arr[2][i+1]);
                            x.append(h1);
                         }else{
                            var h1 = $('<h1>').html(rngE[rng1] );
                            x.append(h1);

                         }
                     }else if(new_arr[4][i] == 1){
                        var rngE = 
                        [
                            new_arr[0][i] + " charges with his new "+ new_arr[3][i] +" and manages to give " + new_arr[0][i+1] + " a big scar on his face ",
                            new_arr[0][i] + " charges with his new "+ new_arr[3][i] +" but "+ new_arr[0][i+1] +" blocks all of his attacks and steals " + new_arr[0][i] +"'s" + new_arr[3][i]
                        ] 
                        
                        var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                        if(rng1 == 0){
                        var rngval = Math.floor(Math.random() * 27000)+1
                           new_arr[2][i+1] -=rngval;
                           var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i+1] + " PL -"+rngval+" = " + new_arr[2][i+1]);
                           x.append(h1);
                        }else{
                            var rngval = Math.floor(Math.random() * 37000)+1
                            new_arr[2][i] -=rngval;
                            new_arr[2][i+1] +=rngval;
                           var h1 = $('<h1>').html(rngE[rng1] + " " + new_arr[0][i] + " PL -"+rngval + " " + new_arr[0][i+1] + " PL +"+rngval);
                           x.append(h1);

                        }

                     }else if(new_arr[4][i] == 2){
                        var rngE = 
                        [
                            new_arr[0][i] + " charges with his new "+ new_arr[3][i] +" and manages to give " + new_arr[0][i+1] + " a big scar on his chest ",
                            new_arr[0][i] + " charges with his new "+ new_arr[3][i] +" but "+ new_arr[0][i+1] +" blocks all of his attacks and steals " + new_arr[0][i] +"'s" + new_arr[3][i]
                        ] 
                        
                        var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                        if(rng1 == 0){
                            var rngval = Math.floor(Math.random() * 40000)+1
                           new_arr[2][i+1] -=rngval;
                           var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i+1] + " PL -"+rngval +" = " + new_arr[2][i+1]);
                           x.append(h1);
                        }else{
                            var rngval = Math.floor(Math.random() * 40000)+1
                            new_arr[2][i] -=rngval;
                            new_arr[2][i+1] +=rngval;
                           var h1 = $('<h1>').html(rngE[rng1] + " " + new_arr[0][i] + " PL -"+rngval + " " + new_arr[0][i+1] + " PL +"+rngval);
                           x.append(h1);

                        }

                     }else if(new_arr[4][i] == 3){
                        var rngE = 
                        [
                            new_arr[0][i] + " charges with his new "+ new_arr[3][i] +" and manages to cut " + new_arr[0][i+1] + "'s arm ",
                            new_arr[0][i] + " charges with his new "+ new_arr[3][i] +" but "+ new_arr[0][i+1] +" blocks all of his attacks and steals " + new_arr[0][i] +"'s" + new_arr[3][i]
                        ] 
                        
                        var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                        if(rng1 == 0){
                            var rngval = Math.floor(Math.random() * 40000)+1
                           new_arr[2][i+1] -=rngval;
                           var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i+1] + " PL -"+rngval +" = " + new_arr[2][i+1]);
                           x.append(h1);
                        }else{
                            var rngval = Math.floor(Math.random() * 55000)+1
                            new_arr[2][i] -=rngval;
                            new_arr[2][i+1] +=rngval;
                           var h1 = $('<h1>').html(rngE[rng1] + " " + new_arr[0][i] + " PL -"+rngval + " " + new_arr[0][i+1] + " PL +"+rngval);
                           x.append(h1);
                        }
                     }else if(new_arr[4][i] == 4){
                        var rngE = 
                        [
                            new_arr[0][i] + " wear his "+ new_arr[3][i] +" and sends " + new_arr[0][i+1] + " flying away ",
                            new_arr[0][i] + " wear his "+ new_arr[3][i] +" but "+ new_arr[0][i+1] +" blocks his transformation and damages " + new_arr[0][i] +"'s" + new_arr[3][i]
                        ] 
                        
                        var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                        if(rng1 == 0){
                            var rngval = Math.floor(Math.random() * 20000)+1
                           new_arr[2][i+1] -=rngval;
                           var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i+1] + " PL -"+ rngval+" = " + new_arr[2][i+1]);
                           x.append(h1);
                        }else{
                            var rngval = Math.floor(Math.random() * 10000)+1
                            new_arr[2][i] -=rngval;
                            
                           var h1 = $('<h1>').html(rngE[rng1] + " " + new_arr[0][i] + " PL -"+rngval);
                           x.append(h1);

                        }

                     }else if(new_arr[4][i] == 5){
                        var rngE = 
                        [
                            new_arr[0][i] + " dodges all of "+ new_arr[0][i+1] + " 's attacks "  +" with his exceptional "+ new_arr[3][i],
                        ] 
                           var h1 = $('<h1>').html(rngE[0]);
                           x.append(h1);
                     }else if(new_arr[4][i] == 6){
                        var rngE = 
                        [
                            new_arr[0][i] + " blocks all of "+ new_arr[0][i+1] + " 's attacks "  +" with his exceptional "+ new_arr[3][i],
                        ] 
                           var h1 = $('<h1>').html(rngE[0]);
                           x.append(h1);
                     }else if(new_arr[4][i] == 7){
                        var rngE = 
                        [
                            new_arr[0][i] + " almost makes "+ new_arr[0][i+1] + " faint "  +" with his exceptional "+ new_arr[3][i],
                        ] 
                           var h1 = $('<h1>').html(rngE[0]);
                           x.append(h1);
                     }else if(new_arr[4][i] == 8){
                        var rngE = 
                        [
                            new_arr[0][i+1] + " charges at "+ new_arr[0][i] + " with his "+  new_arr[3][i+1] +" but "+  new_arr[0][i] + " sees the future and lands a blow before " +new_arr[0][i+1] +" can even realize what is going on",
                            

                        ] 
                        var rngval = Math.floor(Math.random() * 40000)+1
                        new_arr[2][i+1] -=rngval;
                        var h1 = $('<h1>').html(rngE[0] + " "+ new_arr[0][i+1] + " PL -"+rngval+" = " + new_arr[2][i+1]);
                           x.append(h1);
                     }else if(new_arr[4][i] == 9){
                        var rngE = 
                        [
                            new_arr[0][i+1] + " hits "+new_arr[0][i] + " with his "+ new_arr[3][i+1]  +" but "+ new_arr[0][i]+ " "+ new_arr[3][i] + "is so strong that " +new_arr[0][i+1] + " hurts himself",
                        ] 
                        var rngval = Math.floor(Math.random() * 40000)+1
                        new_arr[2][i+1] -=rngval;
                        var h1 = $('<h1>').html(rngE[0] + " "+ new_arr[0][i+1] + " PL -"+rngval+"= " + new_arr[2][i+1]);
                           x.append(h1);
                     }else if(new_arr[4][i] == 10){
                        var rngE = 
                        [
                            new_arr[0][i] + "unleashes his legendary "+ new_arr[3][i] + " but it's so powerful that it hurts both of them",
                        ] 
                        var rngval = Math.floor(Math.random() * 55000)+1
                        new_arr[2][i] -=rngval;
                        new_arr[2][i+1] -=rngval;
                       var h1 = $('<h1>').html(rngE[0] + " " + new_arr[0][i] + " PL -"+rngval + " " + new_arr[0][i+1] + " PL -"+rngval);
                       x.append(h1);
                     }else if(new_arr[4][i] == 11){
                        var rngE = 
                        [
                            new_arr[0][i] + " shows off his "+ new_arr[3][i] + " "+ new_arr[0][i+1] + " decides to retreat",
                        ] 
                           var h1 = $('<h1>').html(rngE[0]);
                           x.append(h1);
                     }
                     else if(new_arr[4][i] == 12){
                        var rngE = 
                        [
                            new_arr[0][i] + " overwhelms "+ new_arr[0][i+1] +" thanks to the power of the "+new_arr[3][i] + " but their side effetcs damage him too",
                        ] 
                        var rngval = Math.floor(Math.random() * 15000)+1
                        var rngval2 = Math.floor(Math.random() * 30000)+1
                        new_arr[2][i] -=rngval;
                        new_arr[2][i+1] -=rngval2;
                       var h1 = $('<h1>').html(rngE[0] + " " + new_arr[0][i] + " PL -"+rngval + " " + new_arr[0][i+1] + " PL -"+rngval2);
                       x.append(h1);
                     }
                     else if(new_arr[4][i] == 13){
                        var rngE = 
                        [
                            new_arr[0][i] + " releases the "+ new_arr[3][i] + " 's energy that destroys"+ new_arr[0][i+1] + " 's "+ new_arr[3][i+1],
                        ] 
                        var rngval = Math.floor(Math.random() * 27000)+1
                        new_arr[2][i+1] -=rngval;
                       var h1 = $('<h1>').html(rngE[0] + " " + new_arr[0][i+1] + " PL -"+rngval);
                       x.append(h1);
                     }
                     else if(new_arr[4][i] == 14){
                        var rngE = 
                        [
                            new_arr[0][i] + " unleashes the power of his "+ new_arr[3][i] + " "+ new_arr[0][i+1] + " is hurt but " + new_arr[0][i] + " is exhausted ",
                        ] 
                        var rngval = Math.floor(Math.random() * 9000)+1
                        var rngval2 = Math.floor(Math.random() * 18000)+1
                        new_arr[2][i] -=rngval;
                        new_arr[2][i+1] -=rngval2;
                       var h1 = $('<h1>').html(rngE[0] + " " + new_arr[0][i] + " PL -"+rngval + " " + new_arr[0][i+1] + " PL -"+rngval2);
                       x.append(h1);
                     }

                 }else{
                    if(new_arr[4][i+1] == 0){
                        
                        var rngE = 
                        [
                            new_arr[0][i+1] + " fires a shot with his "+ new_arr[3][i+1] +" " + new_arr[0][i] + " is hurt but he can still fight",
                            new_arr[0][i+1] + " fires a shot with his "+ new_arr[3][i+1] +" but his gun is jammed " 
                        ] 
                        
                        var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                        if(rng1 == 0){
                           new_arr[2][i] -=15000;
                           var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i] + " PL -15 000 = " + new_arr[2][i]);
                           x.append(h1);
                        }else{
                           var h1 = $('<h1>').html(rngE[rng1] );
                           x.append(h1);

                        }
                 }else if(new_arr[4][i+1] == 1){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " charges with his new "+ new_arr[3][i+1] +" and manages to give " + new_arr[0][i] + " a big scar on his face ",
                        new_arr[0][i+1] + " charges with his new "+ new_arr[3][i+1] +" but "+ new_arr[0][i] +" blocks all of his attacks and steals " + new_arr[0][i] +"'s" + new_arr[3][i]
                    ] 
                    
                    var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                    if(rng1 == 0){
                       new_arr[2][i] -=13000;
                       var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i] + " PL -13 000 = " + new_arr[2][i]);
                       x.append(h1);
                    }else{
                        new_arr[2][i+1] -=25000;
                        new_arr[2][i] +=25000;
                       var h1 = $('<h1>').html(rngE[rng1] + " " + new_arr[0][i+1] + " PL -25 000" + " " + new_arr[0][i] + " PL +25 000");
                       x.append(h1);

                    }

                }else if(new_arr[4][i+1] == 2){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " charges with his new "+ new_arr[3][i+1] +" and manages to give " + new_arr[0][i] + " a big scar on his chest ",
                        new_arr[0][i+1] + " charges with his new "+ new_arr[3][i+1] +" but "+ new_arr[0][i] +" blocks all of his attacks and steals " + new_arr[0][i] +"'s" + new_arr[3][i]
                    ] 
                    
                    var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                    if(rng1 == 0){
                       new_arr[2][i] -=23000;
                       var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i] + " PL -23 000 = " + new_arr[2][i]);
                       x.append(h1);
                    }else{
                        new_arr[2][i+1] -=35000;
                        new_arr[2][i] +=35000;
                       var h1 = $('<h1>').html(rngE[rng1] + " " + new_arr[0][i+1] + " PL -35 000" + " " + new_arr[0][i] + " PL +35 000");
                       x.append(h1);

                    }

                 }else if(new_arr[4][i+1] == 3){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " charges with his new "+ new_arr[3][i+1] +" and manages to cut " + new_arr[0][i] + "'s arm ",
                        new_arr[0][i+1] + " charges with his new "+ new_arr[3][i+1] +" but "+ new_arr[0][i] +" blocks all of his attacks and steals " + new_arr[0][i] +"'s" + new_arr[3][i]
                    ] 
                    
                    var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                    if(rng1 == 0){
                       new_arr[2][i] -=43000;
                       var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i] + " PL -23 000 = " + new_arr[2][i]);
                       x.append(h1);
                    }else{
                        new_arr[2][i+1] -=55000;
                        new_arr[2][i] +=55000;
                       var h1 = $('<h1>').html(rngE[rng1] + " " + new_arr[0][i+1] + " PL -55 000" + " " + new_arr[0][i] + " PL +55 000");
                       x.append(h1);

                    }

                 }else if(new_arr[4][i+1] == 4){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " wear his "+ new_arr[3][i+1] +" and sends " + new_arr[0][i] + " flying away ",
                        new_arr[0][i+1] + " wear his "+ new_arr[3][i+1] +" but "+ new_arr[0][i] +" blocks his transformation and damages " + new_arr[0][i+1] +"'s" + new_arr[3][i+1]
                    ] 
                    
                    var rng1 = Math.floor(Math.random() * rngE.length-1)+1
                    if(rng1 == 0){
                       new_arr[2][i] -=10000;
                       var h1 = $('<h1>').html(rngE[rng1] + " "+ new_arr[0][i] + " PL -10 000 = " + new_arr[2][i]);
                       x.append(h1);
                    }else{
                        new_arr[2][i+1] -=5000;
                        
                       var h1 = $('<h1>').html(rngE[rng1] + " " + new_arr[0][i+1] + " PL -5 000");
                       x.append(h1);

                    }

                 }
                 else if(new_arr[4][i+1] == 5){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " dodges all of "+ new_arr[0][i] + " 's attacks "  +" with his exceptional "+ new_arr[3][i+1],
                    ] 
                       var h1 = $('<h1>').html(rngE[0]);
                       x.append(h1);
                 }else if(new_arr[4][i+1] == 6){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " blocks all of "+ new_arr[0][i] + " 's attacks "  +" with his exceptional "+ new_arr[3][i+1],
                    ] 
                       var h1 = $('<h1>').html(rngE[0]);
                       x.append(h1);
                 }else if(new_arr[4][i+1] == 7){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " almost makes "+ new_arr[0][i] + " faint "  +" with his exceptional "+ new_arr[3][i+1],
                    ] 
                       var h1 = $('<h1>').html(rngE[0]);
                       x.append(h1);
                 }else if(new_arr[4][i+1] == 8){
                    var rngE = 
                    [
                        new_arr[0][i] + " charges at "+ new_arr[0][i+1] + " with his "+  new_arr[3][i] +" but "+  new_arr[0][i+1] + " sees the future and lands a blow before " +new_arr[0][i] +" can even realize what is going on",
                        
                    ] 
                    new_arr[2][i] -=20000;
                    var h1 = $('<h1>').html(rngE[0] + " "+ new_arr[0][i] + " PL -20 000 = " + new_arr[2][i]);
                       x.append(h1);
                 }else if(new_arr[4][i+1] == 9){
                    var rngE = 
                    [
                        new_arr[0][i] + " hits "+new_arr[0][i+1] + " with his "+ new_arr[3][i]  +" but "+ new_arr[0][i+1]+ " "+ new_arr[3][i+1] + "is so strong that " +new_arr[0][i] + " hurts himself",
                    ] 
                    new_arr[2][i+1] -=27000;
                    var h1 = $('<h1>').html(rngE[0] + " "+ new_arr[0][i] + " PL -27 000 = " + new_arr[2][i]);
                       x.append(h1);
                 }else if(new_arr[4][i+1] == 10){
                    var rngE = 
                    [
                        new_arr[0][i+1] + "unleashes his legendary "+ new_arr[3][i+1] + " but it's so powerful that it hurts both of them",
                    ] 
                    new_arr[2][i+1] -=35000;
                    new_arr[2][i] -=35000;
                   var h1 = $('<h1>').html(rngE[0] + " " + new_arr[0][i+1] + " PL -35 000" + " " + new_arr[0][i] + " PL -35 000");
                   x.append(h1);
                 }else if(new_arr[4][i+1] == 11){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " shows off his "+ new_arr[3][i+1] + " "+ new_arr[0][i] + " decides to retreat",
                    ] 
                       var h1 = $('<h1>').html(rngE[0]);
                       x.append(h1);
                 }
                 else if(new_arr[4][i+1] == 12){
                    var rngE = 
                    [
                        new_arr[0][i] + " overwhelms "+ new_arr[0][i] +" thanks to the power of the "+new_arr[3][i+1] + " but their side effetcs damage him too",
                    ] 
                    new_arr[2][i+1] -=9000;
                    new_arr[2][i] -=17000;
                   var h1 = $('<h1>').html(rngE[0] + " " + new_arr[0][i+1] + " PL -9 000" + " " + new_arr[0][i] + " PL -17 000");
                   x.append(h1);
                 }
                 else if(new_arr[4][i+1] == 13){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " releases the "+ new_arr[3][i+1] + " 's energy that destroys"+ new_arr[0][i] + " 's "+ new_arr[3][i],
                    ] 
                    
                    new_arr[2][i] -=18000;
                   var h1 = $('<h1>').html(rngE[0] + " " + new_arr[0][i] + " PL -18 000");
                   x.append(h1);
                 }
                 else if(new_arr[4][i+1] == 14){
                    var rngE = 
                    [
                        new_arr[0][i+1] + " unleashes the power of his "+ new_arr[3][i+1] + " "+ new_arr[0][i] + " is hurt but " + new_arr[0][i+1] + " is exhausted ",
                    ] 
                    new_arr[2][i+1] -=3000;
                    new_arr[2][i] -=11000;
                   var h1 = $('<h1>').html(rngE[0] + " " + new_arr[0][i+1] + " PL -3 000" + " " + new_arr[0][i] + " PL -11 000");
                   x.append(h1);
                 }


             }
            }

             
            shuffle2(new_arr);
            while(new_arr[0].length>1){      
                round += 1;     
                var x = $("#r1");
                var h2 = $('<h1>').html("----------Round "+round + " Eliminations ---------- ");
                x.append(h2);
                if(new_arr[0].length %2 == 0){
                    //console.log('iF LENGTH '+ (new_arr[0].length))
                    for(i = 0; i<new_arr[0].length;i= i+2){    
                        var h1 = $('<h1>').html(new_arr[0][i] +" (Power Left) = " +new_arr[2][i] + " VS " + new_arr[0][i+1]+" (Power Left) = " +new_arr[2][i+1]);
                        x.append(h1);
                        if(new_arr[2][i]>=new_arr[2][i+1]){  
                            var fight_result = [
                                new_arr[0][i]+' defeated ' +new_arr[0][i+1],
                                new_arr[0][i]+' massacred ' +new_arr[0][i+1] ,
                                new_arr[0][i]+' crushed ' +new_arr[0][i+1],
                                new_arr[0][i]+'  destroyed '+new_arr[0][i+1],
                                new_arr[0][i]+' maked '+new_arr[0][i+1] +' cry ',
                                new_arr[0][i]+' crushes '+new_arr[0][i+1] +"'s dreams"
                            ]
                            new_arr[2][i] =new_arr[2][i] -new_arr[2][i+1];
                            var h1 = $('<h1>').html(fight_result[Math.floor(Math.random() * fight_result.length-1)+1] +" , Power left after this fight " +new_arr[2][i]);
                            x.append(h1);
                            new_arr[0][i+1] = "defeated";
                            new_arr[1][i+1] = "defeated";
                            new_arr[2][i+1] = "defeated";
                            
                        }else{
                            var fight_result = [
                                new_arr[0][i+1]+' defeated ' +new_arr[0][i],
                                new_arr[0][i+1]+' massacred ' +new_arr[0][i] ,
                                new_arr[0][i+1]+' crushed ' +new_arr[0][i],
                                new_arr[0][i+1]+'  destroyed '+new_arr[0][i],
                                new_arr[0][i+1]+' maked '+new_arr[0][i] +' cry ',
                                new_arr[0][i+1]+' crushes '+new_arr[0][i] +"'s dreams"
                            ]
                            new_arr[2][i+1] =new_arr[2][i+1] -new_arr[2][i];  
                            var h1 = $('<h1>').html(fight_result[Math.floor(Math.random() * fight_result.length-1)+1] +", Power left after this fight " +new_arr[2][i+1]);
                            x.append(h1);
                            new_arr[0][i] = "defeated";
                            new_arr[1][i] = "defeated";
                            new_arr[2][i] = "defeated";
                            
                            }   
                    }
                    for(var i = new_arr[0].length -1; i >= 0; i--){

                        var x = new_arr[0][i];                          
                        if(x=="defeated"){
                            new_arr[0].splice(i,1);
                            new_arr[1].splice(i,1);
                            new_arr[2].splice(i,1);
                            }
                            
                    }
                    
                    
                    shuffle2(new_arr);
                }else{
                     //console.log(new_arr[0][0]+ "NEW ARR 0")
                    new_arr[0].push('PANDAMAN'+'<img src="https://i.imgur.com/x9uvu1I.jpg" alt="..." class="img-thumbnail"></img>')
                    new_arr[1].push('')
                    new_arr[2].push(0);
                    //console.log(new_arr[0].length)
                    for(i = 0; i<new_arr[0].length;i= i+2){    
                       
                        var h1 = $('<h1>').html(new_arr[0][i] +" (Power Left) = " +new_arr[2][i] + " VS " + new_arr[0][i+1]+" (Power Left) = " +new_arr[2][i+1]);
                        x.append(h1);
                        if(new_arr[2][i]>=new_arr[2][i+1]){ 
                            var fight_result = [
                                new_arr[0][i]+' defeated ' +new_arr[0][i+1],
                                new_arr[0][i]+' massacred ' +new_arr[0][i+1] ,
                                new_arr[0][i]+' crushed ' +new_arr[0][i+1],
                                new_arr[0][i]+'  destroyed '+new_arr[0][i+1],
                                new_arr[0][i]+' maked '+new_arr[0][i+1] +' cry ',
                                new_arr[0][i]+' crushes '+new_arr[0][i+1] +"'s dreams"
                            ] 
                            new_arr[2][i] =new_arr[2][i] -new_arr[2][i+1];
                            var h1 = $('<h1>').html(fight_result[Math.floor(Math.random() * fight_result.length-1)+1] +", Power left after this fight " +new_arr[2][i]);
                            x.append(h1);
                            
                            new_arr[0][i+1] = "defeated";
                            new_arr[1][i+1] = "defeated";
                            new_arr[2][i+1] = "defeated";
                            
                        }else{
                            var fight_result = [
                                new_arr[0][i+1]+' defeated ' +new_arr[0][i],
                                new_arr[0][i+1]+' massacred ' +new_arr[0][i] ,
                                new_arr[0][i+1]+' crushed ' +new_arr[0][i],
                                new_arr[0][i+1]+'  destroyed '+new_arr[0][i],
                                new_arr[0][i+1]+' maked '+new_arr[0][i] +' cry ',
                                new_arr[0][i+1]+' crushes '+new_arr[0][i] +"'s dreams"
                            ]
                            new_arr[2][i+1] =new_arr[2][i+1] -new_arr[2][i];  
                            var h1 = $('<h1>').html(fight_result[Math.floor(Math.random() * fight_result.length-1)+1] +", Power left after this fight " +new_arr[2][i+1]);
                            x.append(h1);
                            
                            new_arr[0][i] = "defeated";
                            new_arr[1][i] = "defeated";
                            new_arr[2][i] = "defeated";
                            
                            }   
                    }
                    for(var i = new_arr[0].length -1; i >= 0; i--){
                        var x = new_arr[0][i];                          
                        if(x=="defeated"){
                            new_arr[0].splice(i,1);
                            new_arr[1].splice(i,1);
                            new_arr[2].splice(i,1);
                            }
                    }

                    shuffle2(new_arr);
  
                }

                if(new_arr[0].length==1){
                    var x = $("#r1");
                    var h1 = $('<h1>').html(new_arr[0][0]+" wins this tournament with "+new_arr[2][0]+ " Power Left")
                    x.append(h1);
                    return 0;
                }
                /*$("#r1").append('<h1> BREAK </h1>')
                for(i = 0; i<new_arr[0].length;i++){
                    
                    //+(new_arr[2][i]=new_arr[2][i]+150000)
                    var eventsRng = 
                    [
                        new_arr[0][i] +" gets grunk before the match, power level - 10 000 ",
                        new_arr[0][i] +" finds an O Wazamono, Power level + 150 000 " ,
                        new_arr[0][i] +" test3",
                        new_arr[0][i] +" test4"
                    ]
                    var rng = Math.floor(Math.random() * eventsRng.length-1)+1;
                    if(rng == 0){
                        (new_arr[2][i]=new_arr[2][i]-10000)
                    }else if(rng == 1){
                        (new_arr[2][i]=new_arr[2][i]+150000)
                    }
                    var h123 = $('<h1>').append(eventsRng[rng]+ " PL = "+new_arr[2][i]);
                    $("#r1").append(h123);
                }*/
                
            }
              
        }   
        matches();
 }




