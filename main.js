let h1 = document.getElementById('h1');
        let h2 = document.getElementById('h2');
        let h3 = document.getElementById('h3');
        let p = document.getElementById('p');
        let links = document.getElementById('links');
        let mail = document.getElementById('mail');
        
        
        window.addEventListener('loader',function(){
            loader.style.display="none";
        })

        window.addEventListener('scroll',function(){
            let value = window.scrollY;
            h1.style.marginLeft =  value * 5 + 'px';
            h2.style.marginLeft = value * 1 +'px'
            p.style.marginLeft = value * 0.5 +'px'
            links.style.marginTop = value * 1 + 'px'

            mail.style.marginTop = value * 4 + 'px'
            
        })
        window.addEventListener('scroll',reveal);

        function reveal(){
            var reveals = document.querySelectorAll('.reveal');

            for(var i=0;i<reveals.length;i++){
                var windowheight = window.innerHeight;
                var revealtop = reveals[i].getBoundingClientRect().top;
                var revealpoint = 90;

                if(revealtop<windowheight-revealpoint){
                    reveals[i].classList.add('active');
                }
                else{
                    reveals[i].classList.remove('active');
                }
            }
        }

        var loader = document.getElementById("preloader");

        window.addEventListener("load",function(){
            loader.style.display="none";
        });
        function show(){
            var content =
            document.getElementById("h5");
                if(content.style.display==="block"){
                    content.style.display="none";
                }else{
                    content.style.display="block";
                }
           };