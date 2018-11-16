import React, {Component} from 'react';
import FormRowHeader from './FormRowHeader'
import FormRowButtonRow from './FormRowButton';

class More extends Component {
    listOfFormRows = () => [
        { displayText: 'EKM' },
        { displayText: 'Visit Our Website', url: 'https://www.ekm.com/' },
        { displayText: 'Contact Support', url: 'https://help.ekm.com/hc/en-gb' },
        { displayText: 'Social' },
        { displayText: 'Facebook', url: 'https://www.facebook.com/EKM/' },
        { displayText: 'Twitter', url: 'https://twitter.com/ekmpowershop' },
        { displayText: 'Instagram', url: 'https://www.instagram.com/ekmpowershop/' },
    ]

    renderFormRows = () => {
        const formRows = this.listOfFormRows();
        const rowsToDisplay = [];
        formRows.forEach((element, index) => {
            if(element.url != null) {
                rowsToDisplay.push(
                    <FormRowButtonRow
                        key={index}
                        displayText={element.displayText}
                        url={element.url} 
                    />
                )
            } else {
                rowsToDisplay.push(
                    <FormRowHeader displayText={element.displayText} />
                )
            }
        });
        return rowsToDisplay;
    }

    render() {
        const component = this.renderFormRows();
        return(
            component
        )
    }
}

export default More;