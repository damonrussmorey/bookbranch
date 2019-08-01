import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './header';

class BookResultsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        text1: '',
    };
  }

  render() {
    return (
        <View>
            <Header headerText={'Bookbranch'} />
            <Text
                style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>
                Results for (Book 1): </Text>
            <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 5,marginLeft: 15}}>{this.props.BookOne}</Text>

            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 10,marginLeft: 5}}>Book 1 Overall Rating: <Text>{this.props.Book1RankOverall}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 10,marginLeft: 5}}>Book 1 Attribute #1: <Text>{this.props.Book1Attribute1}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 1 Attribute #2: <Text>{this.props.Book1Attribute2}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 1 Attribute #3: <Text>{this.props.Book1Attribute3}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 1 Attribute #1 Ranking: <Text>{this.props.Book1Rank1}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 1 Attribute #2 Ranking: <Text>{this.props.Book1Rank2}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 1 Attribute #3 Ranking: <Text>{this.props.Book1Rank3}</Text></Text>

            <Text
                style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>
                Results for (Book 2): </Text>
            <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 5,marginLeft: 15}}>{this.props.BookTwo}</Text>

            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 10,marginLeft: 5}}>Book 2 Overall Rating: <Text>{this.props.Book2RankOverall}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 10,marginLeft: 5}}>Book 2 Attribute #1: <Text>{this.props.book2attributes1}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 2 Attribute #2: <Text>{this.props.book2attributes2}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 2 Attribute #3: <Text>{this.props.book2attributes3}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 2 Attribute #1 Ranking: <Text>{this.props.Book2Rank1}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 2 Attribute #2 Ranking: <Text>{this.props.Book2Rank2}</Text></Text>
            <Text style = {{fontSize: 18, fontWeight: 'bold', marginTop: 5,marginLeft: 5}}>Book 2 Attribute #3 Ranking: <Text>{this.props.Book2Rank3}</Text></Text>

        </View>
    );
  }
}

export default BookResultsDetail;