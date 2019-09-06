import React, { Component, Fragment } from 'react';
import { Card } from 'semantic-ui-react';


// import SelfCareData from '../sourceData'

class SelfCare extends Component {
    state={
        searchTerm:""
    }

    filterOptions=(event)=>{
        this.setState({searchTerm:event.target.value})
    }

    render(){
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
                "Name": "Go to a or support group",
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
                "Name": "Cook or bake",
                "Tags": ""
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
                "Name": "Write down your thoughts and burn them",
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
                "Name": "Talk about your feelings with someone ",
                "Tags": "social"
            },
            {
                "Name": "Plant something",
                "Tags": "productive"
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
                "Name": "Pick one thing you need to do and get it done",
                "Tags": "productive"
            },
            {
                "Name": "Listen to a song you love",
                "Tags": "quick fix"
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
                "Name": "Think of what you love about yourself",
                "Tags": "quick fix"
            },
            {
                "Name": "Blow bubbles",
                "Tags": "quick fix"
            },
            {
                "Name": "Plan a vacation",
                "Tags": ""
            }
        ]
        let ideas = allIdeas.filter(idea=>
            idea.Tags.includes(this.state.searchTerm.toLowerCase()))
        
        const ideasArray = ideas.map(
            idea=>(
                <div class="card">               
                    <h4>{idea.Name}</h4>
                </div>
            // <Card>
            //         {idea.Name}
            // </Card>  
            )
        )
        
        console.log('ideas', ideas[0])
        console.log('state', this.state.searchTerm)
        return(
            <Fragment>
                <h2>Self Care Ideas</h2>
                <form>
                    <label>I want to do something </label>
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
                
                <div className="page-left ">
                    {ideasArray}
                </div>
                {/* <Card.Group itemsPerRow={6} >
                    {ideasArray}
                </Card.Group> */}
                <br/><br/>
            </Fragment>
        )
    }
}

export default SelfCare
