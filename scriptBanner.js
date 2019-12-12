/*ovde je javascript za baner na pocetnoj strani*/
var id = 1;
/*navedene slike koje se koriste*/
var slike = ["images/slika1.jpg", "images/slika2.jpg", "images/slika3.jpg"];
var intervalID;
/*prva slika ima id, id prve slike je 1, druge 2, trece 3, pomocu ove funkcije menjaj ti menjas vrednost promenljive id, 
var idm i na taj nacin upravljas slikama koje se prikazuju. Ovo je javascript funkcija, a gde god vidis $("#") to
je jquery*/
function menjaj(smer = "napred")
{
    if(smer == "napred")
    {
        id++;
        if(id == 3)
            id = 0;
    }
    else
    {
        id--;
        if(id == -1)
            id = 2;
    }

    /*ovde u slike[id] ti prosledjujes id slike koja zelis da se prikaze, a pomocu ovog #bannerSlika
    kazes na koji se to element u html-u odnosi */
    $("#bannerSlika").animate({opacity: 0}, 500, function () { $("#bannerSlika").attr("src", slike[id]); } );
    $("#bannerSlika").animate({opacity: 1}, 500);
}

function menjajNapred()
{
    window.clearInterval(intervalID);
    menjaj("napred");
    /*ovde postavljas inerval na koliko zelis da ti se promeni slika*/
    intervalID = window.setInterval(menjaj, 3000);
}

function menjajNazad()
{
    window.clearInterval(intervalID);
    menjaj("nazad");
    intervalID = window.setInterval(menjaj, 3000);
}


$(document).ready(function ()
{
    intervalID = window.setInterval(menjaj, 3000);
    $("#levo").click(menjajNazad);
    $("#desno").click(menjajNapred);
});