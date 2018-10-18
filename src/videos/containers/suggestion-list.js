import React, {Component} from 'react';
import {FlatList,Text} from 'react-native';
import SuggestionListLayout from '../components/suggestion-list-layout';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

class SuggestionList extends Component {
    renderEmpty = () => <Empty text="No hay recomendaciones" />
    itemSeparator = () => {return(<Separator />)}
    renderItem = ({item}) => {
        return (
            <Suggestion {...item} />
        )
    }
    render() {
        const list = [
            {
                title: 'title 1',
                key: '1'
            },
            {
                title: 'title 2',
                key: '2'
            }
        ]
        return (
            <SuggestionListLayout
                title="Recomendados"
                >
                <FlatList
                    data={list}
                    ListEmptyComponent={this.renderEmpty} //define que mostrar caso no haya elementos
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </SuggestionListLayout>
        )
    }
}

export default SuggestionList;