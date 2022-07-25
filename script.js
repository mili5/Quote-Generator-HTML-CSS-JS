var quotes=[
    'Doubt kills more dreams than failure ever will.-Suzy Kassem',
    'Keep your face always toward the sunshine, and shadows will fall behind you-Walt Whitman',
    'Whether you think you can or think you cant, you are right.- Henry Ford',
    'Your talent determines what you can do. Your motivation determines how much you are willing to do. Your attitude determines how well you do it. —Lou Holtz',
    'The happiness of your life depends on the quality of your thoughts.-Marcus Aurelius',
    'Happiness is not something readymade. It comes from your own actions.-Dalai Lama'

]

function randomQuote(){
    var randomNum= Math.floor(Math.random()*(quotes.length));
    document.getElementById('btn').innerHTML=quotes[randomNum];
}