import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontal-separator';
import Category from '../components/category';
import Layout from '../components/category-list-layout';

class CategoryList extends Component {
    renderEmpty = () => <Empty text="No hay recomendaciones" />
    keyExtractor = item => item.id.toString();
    itemSeparator = () => {return(<Separator />)}
    renderItem = ({item}) => {
        return (
            <Category {...item} />
        )
    }
    render() {
        return (
            <Layout
                title="Categorias"
                >
                <FlatList
                    horizontal
                    keyExtractor={this.keyExtractor}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmpty} //define que mostrar caso no haya elementos
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem}
                />
            </Layout>
        )
    }
}

export default CategoryList;