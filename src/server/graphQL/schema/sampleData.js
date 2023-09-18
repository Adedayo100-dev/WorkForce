let games = [
  {id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch']},
  {id: '2', title: 'Final Fantasy 7 Remake', platform: ['PS5', 'Xbox']},
  {id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC']},
  {id: '4', title: 'Mario Kart', platform: ['Switch']},
  {id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC']},
]

let authors = [
  {id: '1', name: 'mario', verified: true},
  {id: '2', name: 'yoshi', verified: false},
  {id: '3', name: 'peach', verified: true},
]

let reviews = [
  {id: '1', rating: 9, content: 'lorem ipsum', author_id: '1', game_id: '2'},
  {id: '2', rating: 10, content: 'lorem ipsum', author_id: '2', game_id: '1'},
  {id: '3', rating: 7, content: 'lorem ipsum', author_id: '3', game_id: '3'},
  {id: '4', rating: 5, content: 'lorem ipsum', author_id: '2', game_id: '4'},
  {id: '5', rating: 8, content: 'lorem ipsum', author_id: '2', game_id: '5'},
  {id: '6', rating: 7, content: 'lorem ipsum', author_id: '1', game_id: '2'},
  {id: '7', rating: 10, content: 'lorem ipsum', author_id: '3', game_id: '1'},
]
let schedules = [
  {
    year1: {
        aug: [
            {
                "dayNum": 30,
                "dayMonth": {
                    "num": 7,
                    "name": "July"
                }, 
                "dayYear": 2023,
                "events": [

                ],
                "dayType": "prev-month"
            },
            {
                "dayNum": 31,
                "dayMonth": {
                    "num": 7,
                    "name": "July"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons +", "time": "10:00 - 06:00", "type": "is-work"}
                ],
                "dayType": "prev-month"
            }
        ],
        sep:  [
            {
                "dayNum": 1,
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:00 - 06:00", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 2,
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:00 - 06:00", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 3,
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                ],
                "dayType": "current"
            },
            {
                "dayNum": 4, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:00 - 06:00", "type": "is-work"}
                    
                ],
                "dayType": "current"
            },
            {
                "dayNum": 5, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:00 - 06:00", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 6, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 7, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 8, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [

                ],
                "dayType": "current"
            },
            {
                "dayNum": 9,
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023, 
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 10, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 11, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 12, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                ],
                "dayType": "current"
            },
            {
                "dayNum": 13, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                ],
                "dayType": "current"
            },
            {
                "dayNum": 14, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 15, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 16, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 17, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                ],
                "dayType": "current"
            },
            {
                "dayNum": 18, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"},
                    {"short_Desc": "Loan", "time": "14:00 - 14:30", "type": "is-appointment"},
                    {"short_Desc": "Passport Application", "time": "", "type": ""}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 19, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 20, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 21, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 22, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    
                ],
                "dayType": "current"
            },
            {
                "dayNum": 23, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 24, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 25, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 26, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    
                ],
                "dayType": "current"
            },
            {
                "dayNum": 27, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    
                ],
                "dayType": "current"
            },
            {
                "dayNum": 28, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 29, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 30, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "current"
            },
            {
                "dayNum": 31, 
                "dayMonth": {
                    "num": 8,
                    "name": "August"
                }, 
                "dayYear": 2023,
                "events": [
                    
                ],
                "dayType": "current"
            }
        ],
        oct:[
            {
                "dayNum": 1, 
                "dayMonth": {
                    "num": 9,
                    "name": "September"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "next-month"
            },
            {
                "dayNum": 2, 
                "dayMonth": {
                    "num": 9,
                    "name": "September"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "next-month"
            },
            {
                "dayNum": 3, 
                "dayMonth": {
                    "num": 9,
                    "name": "September"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "next-month"
            },
            {
                "dayNum": 4, 
                "dayMonth": {
                    "num": 9,
                    "name": "September"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "next-month"
            },
            {
                "dayNum": 5, 
                "dayMonth": {
                    "num": 9,
                    "name": "September"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons Retirement Community", "time": "10:30 - 06:30", "type": "is-work"}
                ],
                "dayType": "next-month"
            },
            {
                "dayNum": 6, 
                "dayMonth": {
                    "num": 9,
                    "name": "September"
                }, 
                "dayYear": 2023,
                "events": [
                ],
                "dayType": "next-month"
            },
            {
                "dayNum": 7, 
                "dayMonth": {
                    "num": 9,
                    "name": "September"
                }, 
                "dayYear": 2023,
                "events": [
                ],
                "dayType": "next-month"
            },
            {
                "dayNum": 8, 
                "dayMonth": {
                    "num": 9,
                    "name": "September"
                }, 
                "dayYear": 2023,
                "events": [
                ],
                "dayType": "next-month"
            },
            {
                "dayNum": 9, 
                "dayMonth": {
                    "num": 9,
                    "name": "September"
                }, 
                "dayYear": 2023,
                "events": [
                    
                ],
                "dayType": "next-month"
            }
        ]
    }  
  },
  {
    year2: {
        aug: [
            {
                "dayNum": 30,
                "dayMonth": {
                    "num": 7,
                    "name": "July"
                }, 
                "dayYear": 2023,
                "events": [
    
                ],
                "dayType": "prev-month"
            },
            {
                "dayNum": 31,
                "dayMonth": {
                    "num": 7,
                    "name": "July"
                }, 
                "dayYear": 2023,
                "events": [
                    {"short_Desc": "Seasons +", "time": "10:00 - 06:00", "type": "is-work"}
                ],
                "dayType": "prev-month"
            }
        ],
    }
  }
]

export default { games, authors, reviews, schedules }