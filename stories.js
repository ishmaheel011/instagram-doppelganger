let accounts = {
    'daphne_kipruto' : "DK",
    'yuto_horigome' : 'YH',
    'shanejoneill' : 'SO',
    'nyjah' : 'NJ',
    'cassacee' : 'CC',
    'kanyewest' : 'YE',
    'streetleague' : 'SL',
    'bardown' : 'BD',
    'primitive_skate' : 'PS',
    'eatmovies' : 'EM',
    'berrics' : 'BR',
    'anguscloud' : 'AC',
    'vincestaples' : 'VS',
    'jordanward' : 'JW',
}

let stories = document.getElementById('stories')

for(handle in accounts){
    let story = document.createElement('div')
    story.setAttribute('class', 'story')

    let storyPFP = document.createElement('p')
    storyPFP.setAttribute('class','story-pfp')
    storyPFP.innerHTML = accounts[handle]

    let storyAccountHandle = document.createElement('div')
    storyAccountHandle.setAttribute('class', 'story-account-handle')
    storyAccountHandle.innerHTML = handle

    //append children
    story.appendChild(storyPFP)
    story.appendChild(storyAccountHandle)

    stories.appendChild(story)


}

console.log('stories says hi')
