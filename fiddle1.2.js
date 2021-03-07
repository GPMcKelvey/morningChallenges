let favoriteMovie = {
    nameOfMovie: "Cool Hand Luke",
    runTime: 127,
    genre: "Drama",
    characters: [
        {
            name: "Luke",
            age: 25,
            items: [
                    {
                        item: "Nothing is a real cool hand"
                    },
                    {
                        item: "Hard boiled champion" 
                    }
            ]
            
        },
        {
            name: "Dragline",
            age: 30,
            items: [
                {
                    item: "Leader of the pack"
                 },
                 {
                    item: "Assigner of nicknames"
                }
            ]
        }
    ]
}

console.log(favoriteMovie.nameOfMovie);
console.log(favoriteMovie.runTime);
console.log(favoriteMovie.characters[0].name);
console.log(favoriteMovie.characters[1].items[1].item);