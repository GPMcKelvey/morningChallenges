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
                    item: "some item"
                },
                {
                    item: "other item"
                },
            ]
        },
        {
            name: "Dragline",
            age: 30,
            items: [
                {
                    item: "some sort of data"
                },
                {
                    item:"other bit of data"
                }
            ]
        }
    ]
}

let aName = [favoriteMovie].characters[name][0];
console.log(favoriteMovie["nameOfMovie"]);
console.log(favoriteMovie["runTime"]);
console.log(aName);