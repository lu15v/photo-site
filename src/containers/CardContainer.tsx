import React from 'react';
import ImageGridList from '../components/ImageGridList';
import {ImageData} from '../typings';

interface CardContainerProps{
    contentList: ImageData[]
}

class CardContainer extends React.Component<CardContainerProps, {}>{
    
    render(){
        return(
            <div>
                <ImageGridList galleryList={this.props.contentList}/>
            </div>
        )
    }
}

export default CardContainer;