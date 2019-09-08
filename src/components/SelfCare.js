import React, { Component, Fragment } from 'react';

// import SelfCareData from '../sourceData'

class SelfCare extends Component {
    state={
        searchTerm:"Active",
        ideas:[]
    }

    filterOptions=(event)=>{
        this.setState({searchTerm:event.target.value})
    }

    // filterOptions=(event)=>{
    //     console.log('wre',event.target.innerText);
        
    //     this.setState({searchTerm:event.target.innerText})
    //     const allIdeas = [
    //         {
    //             "Name": "Dance",
    //             "Tags": "active"
    //         },
    //         {
    //             "Name": "Eat something healthy",
    //             "Tags": "nourishing"
    //         },
    //         {
    //             "Name": "Go for a bike ride",
    //             "Tags": "active"
    //         },
    //         {
    //             "Name": "Practice yoga",
    //             "Tags": "active, relaxing"
    //         },
    //         {
    //             "Name": "Play a game",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Draw",
    //             "Tags": "creative"
    //         },
    //         {
    //             "Name": "Go to the gym",
    //             "Tags": "active"
    //         },
    //         {
    //             "Name": "Exercise",
    //             "Tags": "active"
    //         },
    //         {
    //             "Name": "Sing",
    //             "Tags": "creative"
    //         },
    //         {
    //             "Name": "Drink tea or your favorite warm drink",
    //             "Tags": "quick fix, nourishing"
    //         },
    //         {
    //             "Name": "Go swimming",
    //             "Tags": "active"
    //         },
    //         {
    //             "Name": "Try aromatherapy",
    //             "Tags": "relaxing, quick fix"
    //         },
    //         {
    //             "Name": "Paint your nails",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Breathe deeply",
    //             "Tags": "relaxing, quick fix"
    //         },
    //         {
    //             "Name": "Create a morning or evening routine",
    //             "Tags": "productive"
    //         },
    //         {
    //             "Name": "Eat a meal you enjoy",
    //             "Tags": "nourishing"
    //         },
    //         {
    //             "Name": "Sleep in",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Plan daily self-care for the month",
    //             "Tags": "productive"
    //         },
    //         {
    //             "Name": "Watch a movie or show you like",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Call someone you care about ",
    //             "Tags": "social"
    //         },
    //         {
    //             "Name": "Go for a hike",
    //             "Tags": "active"
    //         },
    //         {
    //             "Name": "Bake or cook",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Do a random act of kindness",
    //             "Tags": "charitable"
    //         },
    //         {
    //             "Name": "Have a picnic",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Take a walk",
    //             "Tags": "active"
    //         },
    //         {
    //             "Name": "Look at the clouds",
    //             "Tags": "relaxing, quick fix"
    //         },
    //         {
    //             "Name": "Go to bed early",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Take a bath",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Volunteer",
    //             "Tags": "charitable"
    //         },
    //         {
    //             "Name": "Take a shower ",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Attend a counseling session or support group",
    //             "Tags": "social"
    //         },
    //         {
    //             "Name": "Look at the stars",
    //             "Tags": "relaxing, quick fix"
    //         },
    //         {
    //             "Name": "Try guided imagery meditation",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Color",
    //             "Tags": "creative"
    //         },
    //         {
    //             "Name": "Go for a drive",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Meditate",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Plan a night out with friends",
    //             "Tags": "social"
    //         },
    //         {
    //             "Name": "Go to therapy",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Declutter something",
    //             "Tags": "productive"
    //         },
    //         {
    //             "Name": "Light a candle",
    //             "Tags": "relaxing, quick fix"
    //         },
    //         {
    //             "Name": "Read a magazine",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Go out with friends",
    //             "Tags": "social"
    //         },
    //         {
    //             "Name": "Turn your phone off",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Do a craft",
    //             "Tags": "creative"
    //         },
    //         {
    //             "Name": "Garden",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Get pampered, get a manicure or massage",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Go to the park",
    //             "Tags": "active"
    //         },
    //         {
    //             "Name": "Find something that inspires you",
    //             "Tags": "quick fix"
    //         },
    //         {
    //             "Name": "Paint",
    //             "Tags": "creative"
    //         },
    //         {
    //             "Name": "Look at old photos",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Pet an animal",
    //             "Tags": "quick fix"
    //         },
    //         {
    //             "Name": "Find something that makes you laugh",
    //             "Tags": "quick fix"
    //         },
    //         {
    //             "Name": "Start a gratitude journal",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Organize your day",
    //             "Tags": "productive"
    //         },
    //         {
    //             "Name": "Sit outside",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Snuggle with someone",
    //             "Tags": "relaxing, social"
    //         },
    //         {
    //             "Name": "Stretch",
    //             "Tags": "active, quick fix"
    //         },
    //         {
    //             "Name": "Take some photos of things that make you smile",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Write down your negative thoughts and throw them away or burn them",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Watch baby animal videos",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Write down 3 things you’re thankful for",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Read a book",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Stop what you’re doing and simply breathe",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Talk about your feelings with someone",
    //             "Tags": "social"
    //         },
    //         {
    //             "Name": "Set a timer and stay off of social media for that time",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Visit an animal shelter",
    //             "Tags": "charitable"
    //         },
    //         {
    //             "Name": "Watch the sunset or sunrise",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Wear something that makes you feel good",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Pick one thing that you need to do and get it done",
    //             "Tags": "productive"
    //         },
    //         {
    //             "Name": "Listen to a song you love",
    //             "Tags": "quick fix"
    //         },
    //         {
    //             "Name": "Go through your closet and donate the clothes you haven’t worn in years",
    //             "Tags": "productive, charitable"
    //         },
    //         {
    //             "Name": "Learn a new skill",
    //             "Tags": "productive"
    //         },
    //         {
    //             "Name": "Listen to a podcast",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Write a poem or a story",
    //             "Tags": "creative"
    //         },
    //         {
    //             "Name": "Take a nap",
    //             "Tags": "relaxing"
    //         },
    //         {
    //             "Name": "Pick or buy yourself flowers",
    //             "Tags": ""
    //         },
    //         {
    //             "Name": "Drink water",
    //             "Tags": "quick fix, nourishing"
    //         },
    //         {
    //             "Name": "Find an affirmation and say it to yourself",
    //             "Tags": "quick fix"
    //         },
    //         {
    //             "Name": "Play on a playground",
    //             "Tags": "active"
    //         },
    //         {
    //             "Name": "Think of something you love about yourself",
    //             "Tags": "quick fix"
    //         }
    //     ]
    //     let filteredIdeas = allIdeas.filter(idea=>
    //         idea.Tags.includes(this.state.searchTerm.toLowerCase()))
    //     this.setState({ideas:filteredIdeas})
    // }
        
    render(){
        // OPTION 1
            // const ideasArray = this.state.ideas.map(
            //     idea=>(
            //         <li>{idea.Name}</li>
            //     )
            // )
        // OPTION 2
            const allIdeas = [
                {
                    "Name": "Dance",
                    "Tags": "active"
                },
                {
                    "Name": "Eat something healthy",
                    "Tags": "nourishing"
                },
                {
                    "Name": "Go for a bike ride",
                    "Tags": "active"
                },
                {
                    "Name": "Practice yoga",
                    "Tags": "active, relaxing"
                },
                {
                    "Name": "Play a game",
                    "Tags": ""
                },
                {
                    "Name": "Draw",
                    "Tags": "creative"
                },
                {
                    "Name": "Go to the gym",
                    "Tags": "active"
                },
                {
                    "Name": "Exercise",
                    "Tags": "active"
                },
                {
                    "Name": "Sing",
                    "Tags": "creative"
                },
                {
                    "Name": "Drink tea or your favorite warm drink",
                    "Tags": "quick fix, nourishing"
                },
                {
                    "Name": "Go swimming",
                    "Tags": "active"
                },
                {
                    "Name": "Try aromatherapy",
                    "Tags": "relaxing, quick fix"
                },
                {
                    "Name": "Paint your nails",
                    "Tags": ""
                },
                {
                    "Name": "Breathe deeply",
                    "Tags": "relaxing, quick fix"
                },
                {
                    "Name": "Create a morning or evening routine",
                    "Tags": "productive"
                },
                {
                    "Name": "Eat a meal you enjoy",
                    "Tags": "nourishing"
                },
                {
                    "Name": "Sleep in",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Plan daily self-care for the month",
                    "Tags": "productive"
                },
                {
                    "Name": "Watch a movie or show you like",
                    "Tags": ""
                },
                {
                    "Name": "Call someone you care about ",
                    "Tags": "social"
                },
                {
                    "Name": "Go for a hike",
                    "Tags": "active"
                },
                {
                    "Name": "Bake",
                    "Tags": ""
                },
                {
                    "Name": "Do a random act of kindness",
                    "Tags": "charitable"
                },
                {
                    "Name": "Have a picnic",
                    "Tags": ""
                },
                {
                    "Name": "Take a walk",
                    "Tags": "active"
                },
                {
                    "Name": "Look at the clouds",
                    "Tags": "relaxing, quick fix"
                },
                {
                    "Name": "Go to bed early",
                    "Tags": ""
                },
                {
                    "Name": "Take a bath",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Volunteer",
                    "Tags": "charitable"
                },
                {
                    "Name": "Take a shower ",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Attend a counseling session or support group",
                    "Tags": "social"
                },
                {
                    "Name": "Look at the stars",
                    "Tags": "relaxing, quick fix"
                },
                {
                    "Name": "Try guided imagery meditation",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Color",
                    "Tags": "creative"
                },
                {
                    "Name": "Go for a drive",
                    "Tags": ""
                },
                {
                    "Name": "Meditate",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Plan a night out with friends",
                    "Tags": "social"
                },
                {
                    "Name": "Go to therapy",
                    "Tags": ""
                },
                {
                    "Name": "Cook ",
                    "Tags": ""
                },
                {
                    "Name": "Be kind to someone else",
                    "Tags": "social"
                },
                {
                    "Name": "Declutter something",
                    "Tags": "productive"
                },
                {
                    "Name": "Light a candle",
                    "Tags": "relaxing, quick fix"
                },
                {
                    "Name": "Read a magazine",
                    "Tags": ""
                },
                {
                    "Name": "Go out with friends",
                    "Tags": "social"
                },
                {
                    "Name": "Turn your phone off",
                    "Tags": ""
                },
                {
                    "Name": "Do a craft",
                    "Tags": "creative"
                },
                {
                    "Name": "Garden",
                    "Tags": ""
                },
                {
                    "Name": "Get pampered, get a manicure or massage",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Go to the park",
                    "Tags": "active"
                },
                {
                    "Name": "Find something that inspires you",
                    "Tags": "quick fix"
                },
                {
                    "Name": "Paint ",
                    "Tags": "creative"
                },
                {
                    "Name": "Look at old photos",
                    "Tags": ""
                },
                {
                    "Name": "Listen to an audio book",
                    "Tags": ""
                },
                {
                    "Name": "Pet an animal",
                    "Tags": "quick fix"
                },
                {
                    "Name": "Find something that makes you laugh",
                    "Tags": "quick fix"
                },
                {
                    "Name": "Visit a dog park and watch the dogs play",
                    "Tags": "active"
                },
                {
                    "Name": "Start a gratitude journal",
                    "Tags": ""
                },
                {
                    "Name": "Organize your day",
                    "Tags": "productive"
                },
                {
                    "Name": "Sit outside",
                    "Tags": ""
                },
                {
                    "Name": "Snuggle with someone",
                    "Tags": "relaxing, social"
                },
                {
                    "Name": "Stretch",
                    "Tags": "active, quick fix"
                },
                {
                    "Name": "Take some photos of things that make you smile",
                    "Tags": ""
                },
                {
                    "Name": "Write down your negative thoughts and throw them away or burn them",
                    "Tags": ""
                },
                {
                    "Name": "Watch baby animal videos",
                    "Tags": ""
                },
                {
                    "Name": "Write down 3 things you’re thankful for",
                    "Tags": ""
                },
                {
                    "Name": "Read a book",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Stop what you’re doing and simply breathe",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Talk about your feelings with someone who will listen",
                    "Tags": "social"
                },
                {
                    "Name": "Plant something",
                    "Tags": "productive"
                },
                {
                    "Name": "Set a timer and stay off of social media for that time",
                    "Tags": ""
                },
                {
                    "Name": "Visit an animal shelter",
                    "Tags": "charitable"
                },
                {
                    "Name": "Watch the sunset or sunrise",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Wear something that makes you feel good",
                    "Tags": ""
                },
                {
                    "Name": "Pick one thing that you need to do and get it done",
                    "Tags": "productive"
                },
                {
                    "Name": "Listen to a song you love",
                    "Tags": "quick fix"
                },
                {
                    "Name": "Go through your closet and donate the clothes you haven’t worn in years",
                    "Tags": "productive, charitable"
                },
                {
                    "Name": "Learn a new skill",
                    "Tags": "productive"
                },
                {
                    "Name": "Listen to a podcast",
                    "Tags": ""
                },
                {
                    "Name": "Write a poem or a story",
                    "Tags": "creative"
                },
                {
                    "Name": "Take a nap",
                    "Tags": "relaxing"
                },
                {
                    "Name": "Make a playlist",
                    "Tags": ""
                },
                {
                    "Name": "Pick or buy yourself flowers",
                    "Tags": ""
                },
                {
                    "Name": "Drink water",
                    "Tags": "quick fix, nourishing"
                },
                {
                    "Name": "Find an affirmation and say it to yourself",
                    "Tags": "quick fix"
                },
                {
                    "Name": "Play on a playground",
                    "Tags": "active"
                },
                {
                    "Name": "Go to a museum",
                    "Tags": ""
                },
                {
                    "Name": "Think of something you love about yourself",
                    "Tags": "quick fix"
                }
            ]
            let ideas = allIdeas.filter(idea=>
                idea.Tags.includes(this.state.searchTerm.toLowerCase()))
            
            const ideasArray = ideas.map(
                idea=>(
                    <li>{idea.Name}</li>
                )
            )
        
        console.log('state', this.state.searchTerm)
        return(
            <Fragment>
                {/* <div className="sc-menu" onClick={this.filterOptions}>
                    <button className="sc-menu-btn hvr-grow" >Active</button>
                    <button className="sc-menu-btn hvr-grow">Charitable</button>
                    <button className="sc-menu-btn hvr-grow">Creative</button>
                    <button className="sc-menu-btn hvr-grow">Nourishing</button>
                    <button className="sc-menu-btn hvr-grow">Productive</button>
                    <button className="sc-menu-btn hvr-grow">Quick Fix</button>
                    <button className="sc-menu-btn hvr-grow">Relaxing</button>
                    <button className="sc-menu-btn hvr-grow">Social</button>
                </div> */}


                <div className="sc-container">
                <br/>
                <h2>Self Care Ideas</h2>
                
                <p>Choose an option to see self care ideas.</p>
                <form>
                    {/* <label>I want to do something </label> */}
                    <select onChange={this.filterOptions}>
                        <option value="Active">Active</option>
                        <option value="Charitable">Charitable</option>
                        <option value="Creative">Creative</option>
                        <option value="Nourishing">Nourishing</option>
                        <option value="Productive">Productive</option>
                        <option value="Quick Fix">Quick Fix</option>
                        <option value="Relaxing">Relaxing</option>
                        <option value="Social">Social</option>
                    </select>
                </form>
                <br/>
                <div className="sc-container-points">
                    <ul className="page-left">{ideasArray}</ul>
                    <br/><br/>
                </div>
                <br/><br/>
                </div>
                <br/><br/>
            </Fragment>
        )
    }
}

export default SelfCare
