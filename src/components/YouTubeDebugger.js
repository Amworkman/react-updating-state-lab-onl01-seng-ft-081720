import React, { Component } from 'react';

class YouTubeDebugger extends Component {

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    bitrateClickHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionClickHandeler = () => {
        this.setState({
            settings:{
                ...this.state.settings,            
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.bitrateClickHandler.bind(this)}>bitrate</button>
                <button className="resolution" onClick={this.resolutionClickHandeler.bind(this)}>resolution</button>
            </div>
        );
    }
}

export default YouTubeDebugger;
