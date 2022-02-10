## Project Description 
Still thinking of a name but for right now im calling it Game with friends. I was inspired by the fact me and a close friend are always looking for Games to play together and this seemed like a cool way to fix that problem by making this site to help us find game we might try to play.


## Link to the API you plan to use
https://www.freetogame.com/api-doc
or
free-to-play-games-database.p.rapidapi.com

## Example data response you plan to use
```
[
    {
        "id": 1,
        "title": "Dauntless",
        "thumbnail": "https://www.freetogame.com/g/1/thumbnail.jpg",
        "short_description": "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.",
        "game_url": "https://www.freetogame.com/open/dauntless",
        "genre": "MMORPG",
        "platform": "PC (Windows)",
        "publisher": "Phoenix Labs",
        "developer": "Phoenix Labs, Iron Galaxy",
        "release_date": "2019-05-21",
        "freetogame_profile_url": "https://www.freetogame.com/dauntless"
    },
    {
        "id": 2,
        "title": "World of Tanks",
        "thumbnail": "https://www.freetogame.com/g/2/thumbnail.jpg",
        "short_description": "If you like blowing up tanks, with a quick and intense game style you will love this game!",
        "game_url": "https://www.freetogame.com/open/world-of-tanks",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Wargaming",
        "developer": "Wargaming",
        "release_date": "2011-04-12",
        "freetogame_profile_url": "https://www.freetogame.com/world-of-tanks"
    },
    {
        "id": 3,
        "title": "Warframe",
        "thumbnail": "https://www.freetogame.com/g/3/thumbnail.jpg",
        "short_description": "A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ",
        "game_url": "https://www.freetogame.com/open/warframe",
        "genre": "Shooter",
        "platform": "PC (Windows)",
        "publisher": "Digital Extremes",
        "developer": "Digital Extremes",
        "release_date": "2013-03-25",
        "freetogame_profile_url": "https://www.freetogame.com/warframe"
    }
]
```

## Visual of your component hierarchy

![Component Heir](https://media.git.generalassemb.ly/user/40656/files/29447d00-8a6f-11ec-880e-5afa2d28f6fc)



## Wire Frames

![WireFramev2](https://media.git.generalassemb.ly/user/40656/files/15008000-8a6f-11ec-85d5-82e42e637b00)




## User Stories
-As a user I want to be able to see games I can play and the most recommend by genre or over all.

-I want to be able to search games by type and see a list of games that match with the title and picture of the game.

-When I click on the games i want to see Information about the games maybe a link to where i can get the game.

### MVP Goals
have a home page that displays static top 5 or 10 games per genre  

simple menu that take you to a list of game by genre where you can scroll through the games or by pages 


### Stretch Goals
create a user login to save a watch list of games.
create dynamic scrolling windows for top 20 lists components
create a search bar that can uses the filters to narrow down a list of games.
maybe have another game api to add more to the details page.
