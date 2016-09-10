angular.module("IOM", [])
    .controller("dankTroller", dankController)
    .controller("keyboardCatroller", keyController)
    .factory("dankTank", dankFactory);

dankController.$inject = ["dankTank", "$timeout"];
keyController.$inject  = ["dankTank", "$timeout"];

function dankController (dankTank, $timeout) {
    console.info('Hello from the dank controller', dankTank);
    // dankTank, when we inject it is EXACTLY the return statement from the factory

    var dCtrl = this;
    // dCtrl.greeting = "Welcome to the Internet of Memes!";

    dCtrl.memes = dankTank.memeList; //Pulling the info from the factory object

    $timeout(function(){
        dCtrl.memes.push({
            name : 'Dat Boi',
            about : 'Here comes dat boi',
            funniness : 1,
            picture : 'http://tse1.mm.bing.net/th?id=OIP.M14e870d51f93ea3abae543a6bcc1e69co0&w=129&h=105&c=7&rs=1&qlt=90&pid=3.1&rm=2',
            price : 0.37
        });
    }, 4000);

}

function keyController (dankTank, $timeout){
    console.info('Hello from the key controller', dankTank);
    var kCtrl = this;
    // kCtrl.greeting = "Welcome to the Internet of Memes!";
    kCtrl.memes = dankTank.memeList;



    // Changing filters after some event
    // kCtrl.memeFilter = cheapo;
    // $timeout(function(){
    //     kCtrl.memeFilter = fancyPants
    // }, 5000)
    function fancyPants (element, index){
        if( element.price >= 1 ){
            return true
        }
        else{
            return false
        }
    }
    function cheapo (element, index){
        if( element.price < 1 ){
            return true
        } else {
            return false
        }
    }
}


// Factories
    // Angular components like controllers / modules / directives
    // Like controllers, factories are registed to a MODULE
    // What are factories used for?
        // Because controllers cannot talk to one another, factories were created to be the middleman
        // Factories hold common data / methods that can be shared among controllers
        // Factories are largely used for the M (model) in MVC
    // Factories are SINGLETONS - they are only instantiated ONCE
        // Factories are created when a controller INJECTS it into themselves.
        // All controllers injecting that factory get the SAME OBJECT (passed by reference)

function dankFactory () {

    // This is where we will put our data / ways to retrieve data from some external source
    var memeList = [
        {
            name : 'Xzibit',
            about : 'Repetition and Recursion',
            funniness :1,
            picture : 'http://i.qkme.me/3pl0a1.jpg',
            price : 3.50
        },
        {
            name : 'Scumbag Steve',
            about : 'Being a scumbag',
            funniness : 0.5,
            picture : 'http://tse1.mm.bing.net/th?&id=OIP.Md86ea21153056c67aeb2064cb044bcfeo2&w=300&h=300&c=0&pid=1.9&rs=0&p=0&r=0',
            price : 1
        },
        {
            name : 'PePe',
            about : 'Spaghetti in his pocket, EVERYTHING',
            funniness : 3,
            picture : 'http://tse4.mm.bing.net/th?id=OIP.M56c9003443a234e32ac7228c786b7cado0&w=178&h=178&c=7&rs=1&qlt=90&o=4&pid=1.1',
            price : -10
        },
    ];

    // The only thing you ABSOLUTELY NEED in a factory is a RETURN statement
    return {
        memeList : memeList,
    }
    // 99.999999999% you will be returning an OBJECT

    // When you INJECT a factory into a controller.  The value you get access to IS THE RETURN OBJECT

}


// Filters
    // Filters are used to FORMAT values
        // They take an input value and provide a transformed output
        // Does not change your data - only the display
    // Smooshing playdoh through shape holes

    // Built in filters :
        // currency
        // number
        // date
        // uppercase
        // lowercase

    // Special built in filters : (most often used with ngRepeats)
        // orderBy
        // filter

    // {{ expression | filter:arg }}
    // {{ myCtrl.price | currency }}
    // ng-repeat="ITEM in LIST | filter:arg"