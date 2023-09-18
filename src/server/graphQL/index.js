import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// db
import db from './schema/sampleData.js'

// types
import { typeDefs } from './schema/schema.js'

// GraphQL Resolvers
const resolvers = {
    Query: {
        month(_, args) {
            // return db.schedules[0].year1.aug
            return {...db.schedules[0].year1.aug, ...db.schedules[0].year1.sep}
        },
        // days(){
        //     return db.schedules[0].year1.sep
        // },
        // currMonthDays(){
        // },
        
        games() {
            return db.games
        },
        game(_, args){
            return db.games.find((game) => game.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_, args){
            return db.authors.find((author) => author.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_, args){
            return db.reviews.find((review) => review.id === args.id)
        }
    },
    // Month: {
    //     prevMonthDays(){
    //         return db.schedules[0].year1.aug
    //         return {...db.schedules[0].year1.aug, ...db.schedules[0].year1.sep}
    //     },
    //     currMonthDays(){
    //         return {...db.schedules[0].year1.aug, ...db.schedules[0].year1.sep}
    //     },
    //     nextMonthDays(){
    //         return db.schedules[0].year1.oct
    //     }
    // },
    // prevMonthDays: {
    //     dayNum(parent){
    //         return parent.dayNum
    //         return db.schedules[0].year1.aug[0].dayNum
    //     },
    //     dayMonth(parent){
    //         return parent.dayMonth
    //         return db.schedules[0].year1.aug[0].dayMonth
    //     },
    //     dayYear(parent){
    //         return parent.dayYear
    //         return db.schedules[0].year1.aug[0].dayYear
    //     },
    //     events(parent){
    //         return parent.events
    //         return db.schedules[0].year1.aug[0].events
    //     },
    //     dayType(parent){
    //         return parent.dayType
    //         return db.schedules[0].year1.aug[0].dayType
    //     },
    // },
    currMonthDays: {
        dayNum(){
            return db.schedules[0].year1.sep[0].dayNum
        },
        dayMonth(){
            return db.schedules[0].year1.sep[0].dayMonth
        },
        dayYear(){
            return db.schedules[0].year1.sep[0].dayYear
        },
        events(){
            return db.schedules[0].year1.sep[0].events
        },
        dayType(){
            return db.schedules[0].year1.sep[0].dayType
        },
    },
    // /////////////////////////////////////////////////////////////////////
    Game: {
        reviews(parent) {
            return db.reviews.filter((r) => r.game_id === parent.id)
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((r) => r.author_id === parent.id)
        }
    },
    Review: {
        author(parent) {
            return db.authors.find((a) => a.id === parent.author_id)
        },
        game(parent) {
            return db.games.find((g) => g.id === parent.game_id)
        }
    },
    Mutation: {
        deleteGame(_, args) {
            db.games = db.games.filter((g) => g.id !==  args.id)
            return db.games
        },
        addGame(_, args) {
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.games.push(game)
            return game
        },
        updateGame(_, args) {
            db.games = db.games.map((g) => {
                if (g.id === args.id) {
                    return { ...g, ...args.edits}
                }
                return g
            })
            return db.games.find((g) => g.id === args.id)
        }
    }
}

const aplServer = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(aplServer, {
    listen: { port: 4000 }
})
console.log('Server ready at port', 4000, db.schedules[0].year1.aug)