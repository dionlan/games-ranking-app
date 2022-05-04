export interface Player{
    id? : any;
    name: string;
    nickname: string;
    game: {
        totalWins: number;
        totalGames: number;
    }
}