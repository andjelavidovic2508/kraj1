var num1, num2;
var poruka;

function generateExpression()
{
    num1 = parseInt((Math.random() * 10) + 1);
    num2 = parseInt((Math.random() * 10) + 1);
    // Math.random() vraca nasumican realan broj u intervalu (0, 1)
    poruka = "Koliko je " + num1 + " + " + num2 + "?";
    $("#izraz").attr("placeholder", poruka);
}

$(document).ready(function ()
{
    generateExpression();
    
    $("#name").focus(function ()
    {
        $("#name").css("border", "solid black 1px");
    });
    
    $("#name").blur(function ()
    {
        $("#name").css("border", "solid gray 1px");
    });
    
    $("#surname").focus(function ()
    {
        $("#surname").css("border", "solid black 1px");
    });
    
    $("#surname").blur(function ()
    {
        $("#surname").css("border", "solid gray 1px");
    });
    
    $("#email").focus(function ()
    {
        $("#email").css("border", "solid black 1px");
    });
    
    $("#email").blur(function ()
    {
        $("#email").css("border", "solid gray 1px");
    });
    
    $("#pwd").focus(function ()
    {
        $("#pwd").css("border", "solid black 1px");
    });
    
    $("#pwd").blur(function ()
    {
        $("#pwd").css("border", "solid gray 1px");
    });
    
    $("#message").focus(function ()
    {
        $("#message").css("border", "solid black 1px");
    });
    
    $("#message").blur(function ()
    {
        $("#message").css("border", "solid gray 1px");
    });
    
    $("#izraz").focus(function ()
    {
        $("#izraz").css("border", "solid black 1px");
    });
    
    $("#izraz").blur(function ()
    {
        $("#izraz").css("border", "solid gray 1px");
    });
    
    /*ovde je funkcija za submit */
    $("#form").submit(function ()
    {
        /*uzima promenljive iz odgovarajucih polja i postavlja na pocetku flag na true*/
        var name = $("#name").val();
        var surname = $("#surname").val();
        var password = $("#pwd").val();
        var email = $("#email").val();
        var flag = true;
        
        /*ovo regexName ti je forma u kojoj mora da se unese ime, 
        tj mora da sadrzi samo slova*/
        var regexName = /^[A-Z]/;
        /*ako nije lepo uneto, to polje ce se zacrveneti i flag je false, isto i ako je prazno
        dalje su validacije iste za sve, menja se samo forma u kojoj treba da se unese, i
        za password proveravamo da li je duzina veca od 6 karaktera*/
        if(regexName.test(name) === false)
        {
            $("#name").css("border", "solid red 1px");
            flag = false;
        }
        
        if(regexName.test(surname) === false)
        {
            $("#surname").css("border", "solid red 1px");
            flag = false;
        }
        
        var regexEmail = /^[a-z0-9\.]{1,}\@{1}([a-z]{1,}\.{1}[a-z]{2,4})$/;
        if(regexEmail.test(email) === false)
        {
            $("#email").css("border", "solid red 1px");
            flag = false;
        }
        
        if(password.length < 7)
        {
            $("#pwd").css("border", "solid red 1px");
            flag = false;
        }
        
        var message = $("#message").val();
        if(message === "")
        {
            $("#message").css("border", "solid red 1px");
            flag = false;
        }
        
        /*ovde proveravamo da li je lepo sabrao dva broja*/
        var sol = parseInt($("#izraz").val());
        if(sol !== num1 + num2)
        {
            $("#izraz").css("border", "solid red 1px");
            flag = false;
        }
        
        /*ako nije, generisemo novi izraz*/
        if(flag === false)
        {
            $("#izraz").val("");
            generateExpression();
        }
        
        return  flag;
    });
});