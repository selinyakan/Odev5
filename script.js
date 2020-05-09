var ul=document.getElementById('ul');
        var btn=document.getElementById('button');
        var scoreCard=document.getElementById('scoreCard');
        var quizBox=document.getElementById('soruBox');
        var op1=document.getElementById('op1');
        var op2=document.getElementById('op2');
        var op3=document.getElementById('op3');
        var op4=document.getElementById('op4');
        var app={
        sorular:[
        {q:'Hangi hayvanların burun izleri, insanların parmak izleri gibi eşsizdir ve birbirlerinin kimliklerini bu şekilde tespit ederler?' ,options:['Kedi','Köpek','Baykuş','Aslan'],answer:2},
        {q:'Toprağın altına sakladıkları meşe palamutlarını nereye koyduklarını unuttukları için her yıl binlerce ağacın yetişmesine neden olan hayvan hangisidir?' , options:['Sincap','Kunduz','Tavşan','Fare'],answer:1},
        {q:'Hangi hayvanın tat alma duyuları ayaklarındadır?' ,options:['Kelebek','Arı','Uğur Böceği',' Sinek '],answer:1},
        {q:'805 km uzaktan algılanabilen alçak frekansta ses dalgaları üreten en gürültücü memeli hangisidir?' ,options:['Ayı','Fil','Goril','Mavi Balina'],answer:4},
        {q:'0dan 96 km hıza 3 saniyede erişen hayvan hangisidir?' ,options:[' Maymun','Jaguar','Çita','Tilki '],answer:3},
        {q:'Hayatları boyunca sadece tek bir eşleri olan hayvan hangisidir?' ,options:['Yunus','Denizanası','Deniz Yıldızı','Denizatı '],answer:4},
        {q:'Güneş kremi ve nemlendirici olarak kendi ciltlerinden kırmızı yağlı bir madde salgılayan hayvan hangisidir?' ,options:['Gergedan','Deniz Fili','Su Aygırı','Denizanası'],answer:3},
        {q:'Günde 9 kg et yiyen hayvan hangisidir?' ,options:['Panter','Sırtlan','Aslan','Kurt'],answer:4},
        {q:'Kanı mavi akan hayvan hangisidir?' ,options:['Karides','Ahtapot','Balina','KöpekBalığı'],answer:2},
        {q:'Dört yıl boyunca uykuda kalabilen hayvan hangisidir?' ,options:['Koala','Salyangoz','Ayı','Tembel Hayvan'],answer:2},],
                    
            index:0,


            load:function(){
                if(this.index<=this.sorular.length-1){
                    quizBox.innerHTML=this.index+1+"."+this.sorular[this.index].q;
                    op1.innerHTML=this.sorular[this.index].options[0];
                    op2.innerHTML=this.sorular[this.index].options[1];
                    op3.innerHTML=this.sorular[this.index].options[2];
                    op4.innerHTML=this.sorular[this.index].options[3];
                    this.scoreCard();
                    }else{
                        quizBox.innerHTML="Soruları tamamladınız.&nbsp;✨ Skorunuz aşağıda yer almaktadır."
                        op1.style.display="none";
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";}},

                    next:function(){
                        this.index++;
                        this.load();

                    },
                    check:function(kontrol){

                        var id=kontrol.id.split('');
                        
                        if(id[id.length-1]==this.sorular[this.index].answer){
                           this.score++;
                           kontrol.className="doğru";
                           kontrol.innerHTML="Doğru";
                           this.scoreCard();
                        }
                        else{
                            kontrol.className="yanlış";
                            kontrol.innerHTML="Yanlış";
                        }
                       

                    },
                    notClickAble:function(){
                        for(let i=0; i<ul.children.length; i++){
                            ul.children[i].style.pointerEvents="none";
                        }
                    },
                    clickAble:function(){
                        for(let i=0; i<ul.children.length; i++){
                            ul.children[i].style.pointerEvents="auto";
                            ul.children[i].className=""
                        }
                    },
                
                
                    score:0,
                    scoreCard:function(){
                        scoreCard.innerHTML=this.sorular.length+"/"+this.score;
                    }
            }
            window.onload=app.load();


            function button(kontrol){
                app.check(kontrol);
                app.notClickAble();
            }
            function next(){
                app.next();
                app.clickAble();
            }



            

