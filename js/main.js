$(document).ready(function () {
        
   // slider

    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 2000
        });
    }
    
    //posts

    if(window.location.href.indexOf('index') > -1){    
    var posts = [
        {
            title: 'Test 1',
            date: "Publicacdo el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nostrum itaque recusandae modi impedit quae minus. Aliquam illo explicabo tempora molestiae assumenda minus deleniti facilis. Et, nam recusandae nostrum neque illum, accusamus quas quod, ullam dolores reprehenderit voluptatem saepe. Odit dolorem vel temporibus repellendus! Eos incidunt iusto velit unde placeat sit debitis similique praesentium dolores! Rem dolorum architecto cumque nesciunt at ea totam cum perspiciatis voluptate, iusto quae praesentium doloribus, repellat optio quibusdam. Voluptate, reprehenderit, illo asperiores aspernatur ipsa debitis possimus, laboriosam quo vel mollitia sunt temporibus. Quae qui cupiditate consectetur, aliquid voluptate optio excepturi fugit deleniti temporibus nihil culpa.'
        },
        
        {
            title: 'Test 2',
            date: "Publicacdo el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nostrum itaque recusandae modi impedit quae minus. Aliquam illo explicabo tempora molestiae assumenda minus deleniti facilis. Et, nam recusandae nostrum neque illum, accusamus quas quod, ullam dolores reprehenderit voluptatem saepe. Odit dolorem vel temporibus repellendus! Eos incidunt iusto velit unde placeat sit debitis similique praesentium dolores! Rem dolorum architecto cumque nesciunt at ea totam cum perspiciatis voluptate, iusto quae praesentium doloribus, repellat optio quibusdam. Voluptate, reprehenderit, illo asperiores aspernatur ipsa debitis possimus, laboriosam quo vel mollitia sunt temporibus. Quae qui cupiditate consectetur, aliquid voluptate optio excepturi fugit deleniti temporibus nihil culpa.'
        },
        
        {   title: 'Test 3',
            date: "Publicacdo el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nostrum itaque recusandae modi impedit quae minus. Aliquam illo explicabo tempora molestiae assumenda minus deleniti facilis. Et, nam recusandae nostrum neque illum, accusamus quas quod, ullam dolores reprehenderit voluptatem saepe. Odit dolorem vel temporibus repellendus! Eos incidunt iusto velit unde placeat sit debitis similique praesentium dolores! Rem dolorum architecto cumque nesciunt at ea totam cum perspiciatis voluptate, iusto quae praesentium doloribus, repellat optio quibusdam. Voluptate, reprehenderit, illo asperiores aspernatur ipsa debitis possimus, laboriosam quo vel mollitia sunt temporibus. Quae qui cupiditate consectetur, aliquid voluptate optio excepturi fugit deleniti temporibus nihil culpa.'
        },
        
        {
            title: 'Test 4',
            date: "Publicacdo el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nostrum itaque recusandae modi impedit quae minus. Aliquam illo explicabo tempora molestiae assumenda minus deleniti facilis. Et, nam recusandae nostrum neque illum, accusamus quas quod, ullam dolores reprehenderit voluptatem saepe. Odit dolorem vel temporibus repellendus! Eos incidunt iusto velit unde placeat sit debitis similique praesentium dolores! Rem dolorum architecto cumque nesciunt at ea totam cum perspiciatis voluptate, iusto quae praesentium doloribus, repellat optio quibusdam. Voluptate, reprehenderit, illo asperiores aspernatur ipsa debitis possimus, laboriosam quo vel mollitia sunt temporibus. Quae qui cupiditate consectetur, aliquid voluptate optio excepturi fugit deleniti temporibus nihil culpa.'
        },
        
        {
            title: 'Test 5',
            date: "Publicacdo el dia " + moment().day() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nostrum itaque recusandae modi impedit quae minus. Aliquam illo explicabo tempora molestiae assumenda minus deleniti facilis. Et, nam recusandae nostrum neque illum, accusamus quas quod, ullam dolores reprehenderit voluptatem saepe. Odit dolorem vel temporibus repellendus! Eos incidunt iusto velit unde placeat sit debitis similique praesentium dolores! Rem dolorum architecto cumque nesciunt at ea totam cum perspiciatis voluptate, iusto quae praesentium doloribus, repellat optio quibusdam. Voluptate, reprehenderit, illo asperiores aspernatur ipsa debitis possimus, laboriosam quo vel mollitia sunt temporibus. Quae qui cupiditate consectetur, aliquid voluptate optio excepturi fugit deleniti temporibus nihil culpa.'
        }
    ];
    
    posts.forEach((item, index)=>{
        var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Read more</a>
                </article>
        `;

        console.log(post);

        $("#posts").append(post);
    });
    }
   // Selector de thema

    var theme = $('#theme');
    
   $('#to-green').click(function () { 
    theme.attr('href','css/green.css')
   });

   $('#to-red').click(function () { 
    theme.attr('href','css/red.css')
   });

   $('#to-blue').click(function () { 
    theme.attr('href','css/blue.css')
   });

    //scroll arriba, subir

    $(".subir").click(function (e) { 
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        
        return false;
    });

    //Login Falso

    $('#login form').submit(function (e) { 
        e.preventDefault();
        
        var form_name = $('#form_name').val();

        localStorage.setItem("form_name", form_name);

        var form_name = localStorage.getItem('form_name');

    if (form_name != null && form_name != "undefined") {
        var about_parrafo = $('#about p');

        about_parrafo.html("<hr> <strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append('<a href="#" id="logout">Cerrar sesion</a>');

        $('#login form').hide();

        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        });
    }
    });


    
    
    // Acordeon

   //!Hecho

   //Reloj

   if(window.location.href.indexOf('reloj') > -1){
    setInterval(() => {
        var reloj = moment().format("h:mm:ss");
        $("#reloj").html(reloj);
    }, 1000);
    
   }

   // Validacion
   if(window.location.href.indexOf('contacto') > -1){
    $( function() {
        $( "#datepicker" ).datepicker({
            dateFormat: 'dd/mm/yy'
        });
      } );
    $.validate({
        lang: 'es',
        errorMessagePosition: 'top',
        scrollToTopOnError: true
   });
    }

});