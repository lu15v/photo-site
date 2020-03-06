import React from 'react';
import ImageGridList from '../components/ImageGridList';
import {ImageData} from '../typings';

class CardContainer extends React.Component<{contentList: ImageData[]},{}>{

    render(){
        return(
            <div>
                <ImageGridList galleryList={this.props.contentList}/>
            </div>
        )
    }
}

export default CardContainer;