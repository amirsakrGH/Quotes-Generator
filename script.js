
var quotes = [
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "So many books, so little time.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "لن تستطيع أن تمنع طيور الهمّ أن تُحلّق فوق رأسك، ولكنك تستطيع أن تمنعها أن تُعشّش في رأسك",
    "سلامٌ لأرض خُلقت للسلام، وما رأت يومًا سلاما",
    "البوصلة لن تخطئ الطريق، ستضل تشير إلى فلسطين",
    "أُكلت يوم أكل الثور الأبيض"
]
var author = [
    "― Oscar Wilde",
    "― Albert Einstein",
    "― Frank Zappa",
    "― Mae West",
    "― Mahatma Gandhi",
    "― Mahatma Gandhi",
    "― Love",
    "― Love",
    "― Love",
    "― Love"
]

// var color = [

// ]

// function generate_random_number() {
//     var random_num = Math.floor(Math.random()*10) + 1;//1 ~ 10
//     var get_quote = quotes[random_num - 1];
//     var get_author = author[random_num - 1];
//     document.body.style.backgroundColor = `${get_quote}`;
//     document.getElementById("quote").innerHTML = `${get_quote}`;
//     document.getElementById("author").innerHTML = `${get_author}`;
//     body_background_color();
// }

var current = -1;// any number except from  1 ~ 10

function generate_random_number() {
    var random_num;
    do {
        random_num = Math.floor(Math.random()*10) + 1;//1 ~ 10
    }while(random_num === current)

    current = random_num;

    var get_quote = quotes[current - 1];
    var get_author = author[current - 1];

    document.body.style.backgroundColor = `${get_quote}`;
    document.getElementById("quote").innerHTML = get_quote;
    document.getElementById("author").innerHTML = `${get_author}`;

    body_background_color();
}


function body_background_color() {
    var color_left = generates_random_color();
    var color_right = generates_random_color();
    var gradient = `linear-gradient(to right, ${color_left}, ${color_right})`;
    
    document.body.style.background = gradient;
    document.getElementById("btn_color").style.background = gradient;
    document.getElementById("btn_color").style.boxShadow = gradient;
}

function generates_random_color() {
    var hex_digit = '0123456789ABCDEF';
    var hex_color = '#';

    for (var i = 0; i < 6; i++) {
        hex_color += hex_digit[Math.floor(Math.random() * 15)]; // 0 ~ 15 
    }
    
    return hex_color;
}




